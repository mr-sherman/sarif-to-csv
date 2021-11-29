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
uses: mr-sherman/sarif-to-csv-action@v2
with:
  input-file: 'results.sarif'
  output-file: 'results.csv'
```

Here's a more involved sample which does a codeql analysis and then outputs the sarif file to csv and then uploads the csv as an artifact to this action:

```
jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest

    strategy:
      fail-fast: false
      matrix:
        language: [ 'csharp', 'javascript' ]
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v1
      with:
        languages: ${{ matrix.language }}
        queries: security-extended
        
    - name: Autobuild
      uses: github/codeql-action/autobuild@v1

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v1
    - name: Clean up CodeQL database before upload
      id: database-cleanup
      env:
        LANGUAGE: ${{ matrix.language }}
      run: |
        set -xu
        DATABASE_DIR="/home/runner/work/_temp/codeql_databases/$LANGUAGE"
        echo "Cleaning up database in $DATABASE_DIR"
        for SUB_DIR in log results working; do
          rm -rf $DATABASE_DIR/$SUB_DIR
        done
        echo "Zipping database"
        DATABASE_ZIP="netgoat-$LANGUAGE-db.zip"
        zip -r "$DATABASE_ZIP" "$DATABASE_DIR"
        echo "::set-output name=zip::$DATABASE_ZIP"
    - name: Extract CSV from SARIF
      uses: mr-sherman/sarif-to-csv@v2
      with:
         input-file: "/home/runner/work/repo-name/results/${{ matrix.language }}.sarif"
         output-file: "/home/runner/work/repo-name/results/${{ matrix.language }}.csv"
    - name: Upload CodeQL database
      uses: actions/upload-artifact@v2
      with:
        name: repo-name-${{ matrix.language }}-db
        path: ${{ steps.database-cleanup.outputs.zip }}
    - name: Upload CSV
      uses: actions/upload-artifact@v2
      with:
        name: "${{ matrix.language }}.csv"
        path: "/home/runner/work/repo-name/results/${{ matrix.language }}.csv"
        
```
