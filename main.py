#!/usr/bin/env python3
"""Entry point used by action.yml. Equivalent to running `sarif-to-csv`."""

import sys

from sarif_to_csv.cli import main

if __name__ == "__main__":
    sys.exit(main())
