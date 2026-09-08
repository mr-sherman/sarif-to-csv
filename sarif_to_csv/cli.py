"""Command-line entry point for sarif-to-csv."""

from __future__ import annotations

import argparse
import os
import sys

from .core import get_csv, read_sarif_as_map


def _get_input(name: str, default: str) -> str:
    """Fall back to the GitHub Actions INPUT_<NAME> env var, like @actions/core's getInput."""
    env_name = "INPUT_" + name.upper().replace(" ", "_")
    return os.environ.get(env_name, default)


def parse_args(argv=None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        prog="sarif-to-csv",
        description="Convert a SARIF-formatted file into a CSV report.",
    )
    parser.add_argument(
        "--input-file",
        dest="input_file",
        default=_get_input("input-file", "results.sarif"),
        help="sarif-formatted input file (default: results.sarif)",
    )
    parser.add_argument(
        "--output-file",
        dest="output_file",
        default=_get_input("output-file", "results.csv"),
        help="CSV-formatted output file (default: results.csv)",
    )
    return parser.parse_args(argv)


def main(argv=None) -> int:
    args = parse_args(argv)
    sarif_map = read_sarif_as_map(args.input_file)
    csv_str = get_csv(sarif_map)
    with open(args.output_file, "w", encoding="utf-8", newline="") as f:
        f.write(csv_str + "\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
