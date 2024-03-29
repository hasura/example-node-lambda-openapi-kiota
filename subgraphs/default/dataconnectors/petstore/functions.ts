import { AnonymousAuthenticationProvider, RequestConfiguration } from '@microsoft/kiota-abstractions';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { PetstoreClient } from './client/petstoreClient';
import { User } from './client/models';
import { LoginRequestBuilderGetQueryParameters } from './client/user/login';
import { InventoryGetResponse } from './client/store/inventory';

// See: https://learn.microsoft.com/en-us/openapi/kiota/quickstarts/typescript
// See: https://learn.microsoft.com/en-us/openapi/kiota/tutorials/typescript-azure?tabs=portal
const authProvider = new AnonymousAuthenticationProvider();
const adapter = new FetchRequestAdapter(authProvider);
const client = new PetstoreClient(adapter);

adapter.baseUrl = "http://localhost:1234";

export async function login(username: string, password: string): Promise<string> { //  Promise<User> {
  const loginBody = {username, password};
  const loginResponse = await client.user.login.get({queryParameters: loginBody});
  console.log(`Logged in: ${loginResponse}`);
  if(! loginResponse) {
    throw new Error(`Failed login for user ${username}.`);
  }
  return loginResponse;
}

/**
 * @pure
 * @param username Works with example username user1
 * @returns User
 */
export async function getUser(username: string): Promise<User> {
  const userResponse = await client.user.byUsername(username).get()
  console.log(`Got user: ${userResponse}`);
  if(! userResponse) {
    throw new Error(`Failed login for user me.`);
  }
  return userResponse;
}

/**
 * @pure
 * @returns InventoryGetResponse
 */
export async function getStoreInventory(): Promise<InventoryGetResponse> {
  const inventoryResponse = await client.store.inventory.get();
  if(! inventoryResponse) {
    throw new Error(`Failed to fetch store inventory.`);
  }
  return inventoryResponse;
}