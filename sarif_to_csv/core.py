"""Core SARIF -> CSV conversion logic.

This mirrors the original ClojureScript implementation (src/sarif_to_csv/core.cljs)
function-for-function so behavior stays predictable across the rewrite.
"""

from __future__ import annotations

import csv
import io
import json
from typing import Any, Optional

HEADER = [
    "NAME",
    "SEVERITY",
    "SCORE",
    "TAGS",
    "SOURCE",
    "START LINE",
    "START COLUMN",
    "END COLUMN",
]


def read_sarif(filename: str) -> str:
    with open(filename, "r", encoding="utf-8") as f:
        return f.read()


def read_sarif_as_map(filename: str) -> dict:
    return json.loads(read_sarif(filename))


def _rules_from_run(run: dict) -> list:
    driver_rules = (run.get("tool") or {}).get("driver", {}).get("rules") or []
    extensions = (run.get("tool") or {}).get("driver", {}).get("extensions") or []
    extension_rules = [rule for ext in extensions for rule in (ext.get("rules") or [])]
    return [rule for rule in [*driver_rules, *extension_rules] if rule is not None]


def get_properties_map(sarif_map: dict) -> dict:
    runs = sarif_map.get("runs") or []
    if not runs:
        return {}
    rules = _rules_from_run(runs[0])
    return {rule.get("id"): rule.get("properties") for rule in rules}


def get_security_severity_string(score: Any) -> str:
    try:
        x = float(score)
    except (TypeError, ValueError):
        return "none"
    if x > 8.9:
        return "critical"
    if x > 6.9:
        return "high"
    if x > 4.9:
        return "medium"
    if x > 0.0:
        return "low"
    return "none"


def get_results(sarif_map: dict) -> list:
    runs = sarif_map.get("runs") or []
    if not runs:
        return []
    return runs[0].get("results") or []


def _physical_location(result: dict) -> dict:
    locations = result.get("locations") or []
    if not locations:
        return {}
    return locations[0].get("physicalLocation") or {}


def source(result: dict) -> Optional[str]:
    return (_physical_location(result).get("artifactLocation") or {}).get("uri")


def line_number(result: dict) -> Optional[int]:
    return (_physical_location(result).get("region") or {}).get("startLine")


def start_column(result: dict) -> Optional[int]:
    return (_physical_location(result).get("region") or {}).get("startColumn")


def end_column(result: dict) -> Optional[int]:
    return (_physical_location(result).get("region") or {}).get("endColumn")


def _blank_if_none(value: Any) -> str:
    return "" if value is None else str(value)


def get_csv_row(result: dict, properties: dict) -> list:
    rule_id = result.get("ruleId")
    props = properties.get(rule_id) or {}

    name = props.get("name")
    severity_score = props.get("security-severity")
    severity_string = get_security_severity_string(severity_score)
    tags = props.get("tags") or []

    return [
        _blank_if_none(name),
        severity_string,
        _blank_if_none(severity_score),
        "; ".join(tags),
        _blank_if_none(source(result)),
        _blank_if_none(line_number(result)),
        _blank_if_none(start_column(result)),
        _blank_if_none(end_column(result)),
    ]


def get_csv(sarif_map: dict) -> str:
    properties_map = get_properties_map(sarif_map)
    results = get_results(sarif_map)

    buffer = io.StringIO()
    writer = csv.writer(buffer, lineterminator="\n")
    writer.writerow(HEADER)
    for result in results:
        writer.writerow(get_csv_row(result, properties_map))

    return buffer.getvalue().rstrip("\n")
