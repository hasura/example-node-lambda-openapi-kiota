# Example Kiota OpenAPI Data Connector

Just like the label says on the tin!

Links:

* https://petstore3.swagger.io/#/user/getUserByName
* https://learn.microsoft.com/en-us/openapi/kiota/quickstarts/typescript
* https://github.com/sordina/srvdir

Testing:

* Spin up a mock server with `cd ./test && make` (requires `srvdir`)
* Change `adapter.baseUrl = "http://localhost:1234";` in `subgraphs/default/dataconnectors/petstore/functions.ts` to test against a different backend.
* Execute requests using HTTP-Client (VSCode plugin) on the `./test/*.http` files