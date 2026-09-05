"""SARIF to CSV conversion library."""

from .core import get_csv, read_sarif_as_map

__version__ = "3.0.0"

__all__ = ["get_csv", "read_sarif_as_map", "__version__"]
