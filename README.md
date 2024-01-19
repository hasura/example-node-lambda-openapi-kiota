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

---

### What is this?

This is an example/prototype project demonstrating how to consume an OpenAPI specified project via data-connectors. It is intended that this will all be automated by scaffolding scripts, etc. at some point, however this is currently done here manually to determine the best implementation for the automation.

Steps:

* Set up project
* Create subgraph
* Create dataconnector based on ts-deno
* Customise connector to use ts-node instead
* Create an OpenAPI client with Microsoft Kiota
* Create an entrypoint `functions.ts` in the new dataconnector
* Add setup and definintions for the client functionality
* Test with `hasura3 watch`

Generating the client with Kiota via docker:

```sh
# Get the PetStore API
curl -L https://petstore3.swagger.io/api/v3/openapi.json \
  | yq -P > petstore.yaml

# Generate the client
docker run -v `pwd`/subgraphs/default/dataconnectors/petstore/client:/app/client \
  -v `pwd`/subgraphs/default/dataconnectors/petstore/petstore.yaml:/app/openapi.yml \
  mcr.microsoft.com/openapi/kiota:1.10.1 generate \
  --language typescript -d /app/openapi.yml -c PetstoreClient -o /app/client
```