# SARIF to CSV GitHub Action

This action creates csv report from SARIF files.  This action will help you generate CSV reports for recently run static analysis scans or other security scans that output to the SARIF format. 

## Inputs

### `input-file`

The SARIF file name. Default `"results.sarif"`.

## Outputs

### `output-file`
The CSV file name.  Default:  `"results.csv"`.


## Example usage
```
uses: mr-sherman/sarif-to-csv-action@v1
with:
  input-file: 'results.sarif'
  output-file: 'results.csv'
```

Here's a more involved sample which does a codeql analysis and then outputs the sarif file to csv and then uploads the csv as an artifact to this action:

```
name: "Code Scanning"

on:
  push:
  pull_request:
  schedule:
    - cron: '0 18 * * 6'

jobs:
  CodeQL-Build:
    strategy:
      fail-fast: false
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v1
      with:
        queries: +security-extended
    - name: Autobuild
      uses: github/codeql-action/autobuild@v1
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v1
    - name: Extract CSV from SARIF
      uses: mr-sherman/sarif-to-csv-action@v1
      with:
       input-file: 'results.sarif'
       output-file: 'results.csv'
    - name: Upload CodeQL database
      uses: actions/upload-artifact@v2
      with:
        name: 'results.csv'
        path: 'results.csv'
```