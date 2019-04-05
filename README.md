# ngbx-data-table


## Development
- Run `ng serve`
Navigate to `http://localhost:4200/` (OR port of your choice `ng serve --port  xxxx` and navigate to `http://localhost:xxxx`).
- Any changes to the actual library code will need a rebuild of the library `ng build ngbx-data-table`. App should auto load when the library project is rebuilt.


## Build
Run `ng build ngbx-data-table` to build the project. The build artifacts will be stored in the `dist/` directory.

## Code Commit
Submit a Pull Request to the master branch.

## Publish
For now, publish manually. I will be automating this in future
 - Run `npm version patch` from projects/ngbx-data-table
 - Rebuild the library `ng build ngbx-data-table`
 - Run `npm publish` from dist/ngbx-data-table
