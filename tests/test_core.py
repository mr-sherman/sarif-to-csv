import csv
import io
import os

import pytest

from sarif_to_csv.core import (
    get_csv,
    get_csv_row,
    get_properties_map,
    get_results,
    get_security_severity_string,
    read_sarif_as_map,
)

FIXTURE = os.path.join(os.path.dirname(__file__), "..", "test", "results.sarif")


@pytest.fixture(scope="module")
def sarif_map():
    return read_sarif_as_map(FIXTURE)


def test_get_security_severity_string():
    assert get_security_severity_string("9.3") == "critical"
    assert get_security_severity_string("7.8") == "high"
    assert get_security_severity_string("5.0") == "medium"
    assert get_security_severity_string("0.1") == "low"
    assert get_security_severity_string("0.0") == "none"
    assert get_security_severity_string(None) == "none"


def test_get_properties_map(sarif_map):
    properties = get_properties_map(sarif_map)
    assert "js/code-injection" in properties
    assert properties["js/code-injection"]["security-severity"] == "9.3"


def test_get_results(sarif_map):
    results = get_results(sarif_map)
    assert len(results) == 21
    assert results[0]["ruleId"] == "js/code-injection"


def test_get_csv_row(sarif_map):
    properties = get_properties_map(sarif_map)
    results = get_results(sarif_map)
    row = get_csv_row(results[0], properties)
    assert row == [
        "Code injection",
        "critical",
        "9.3",
        "security; external/cwe/cwe-094; external/cwe/cwe-095; external/cwe/cwe-079; external/cwe/cwe-116",
        "app/routes/contributions.js",
        "32",
        "29",
        "44",
    ]


def test_get_csv_is_valid_csv(sarif_map):
    csv_str = get_csv(sarif_map)
    reader = csv.reader(io.StringIO(csv_str))
    rows = list(reader)
    assert rows[0] == [
        "NAME",
        "SEVERITY",
        "SCORE",
        "TAGS",
        "SOURCE",
        "START LINE",
        "START COLUMN",
        "END COLUMN",
    ]
    assert len(rows) == 1 + 21


def test_missing_rule_properties_do_not_error():
    sarif_map = {
        "runs": [
            {
                "tool": {"driver": {"rules": []}},
                "results": [
                    {
                        "ruleId": "unknown-rule",
                        "locations": [
                            {
                                "physicalLocation": {
                                    "artifactLocation": {"uri": "foo.py"},
                                    "region": {
                                        "startLine": 1,
                                        "startColumn": 2,
                                        "endColumn": 3,
                                    },
                                }
                            }
                        ],
                    }
                ],
            }
        ]
    }
    row = get_csv_row(sarif_map["runs"][0]["results"][0], get_properties_map(sarif_map))
    assert row == ["", "none", "", "", "foo.py", "1", "2", "3"]
