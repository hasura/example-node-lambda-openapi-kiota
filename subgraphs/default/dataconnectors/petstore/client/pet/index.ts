// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { createPetFromDiscriminatorValue, deserializeIntoPet, serializePet, type Pet } from '../models/';
import { FindByStatusRequestBuilder } from './findByStatus/';
import { FindByTagsRequestBuilder } from './findByTags/';
import { WithPetItemRequestBuilder } from './item/';
import { BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /pet
 */
export class PetRequestBuilder extends BaseRequestBuilder<PetRequestBuilder> {
    /**
     * The findByStatus property
     */
    public get findByStatus(): FindByStatusRequestBuilder {
        return new FindByStatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * The findByTags property
     */
    public get findByTags(): FindByTagsRequestBuilder {
        return new FindByTagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the ApiSdk.pet.item collection
     * @param petId ID of pet to return
     * @returns a WithPetItemRequestBuilder
     */
    public byPetId(petId: number) : WithPetItemRequestBuilder {
        if(!petId) throw new Error("petId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["petId"] = petId
        return new WithPetItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    /**
     * Instantiates a new PetRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/pet", (x, y) => new PetRequestBuilder(x, y));
    }
    /**
     * Add a new pet to the store
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Pet
     */
    public post(body: Pet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Pet | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter.sendAsync<Pet>(requestInfo, createPetFromDiscriminatorValue, undefined);
    }
    /**
     * Update an existing pet by Id
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Pet
     */
    public put(body: Pet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Pet | undefined> {
        const requestInfo = this.toPutRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter.sendAsync<Pet>(requestInfo, createPetFromDiscriminatorValue, undefined);
    }
    /**
     * Add a new pet to the store
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Pet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation(HttpMethod.POST, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration);
        requestInfo.headers.tryAdd("Accept", "application/json");
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePet);
        return requestInfo;
    }
    /**
     * Update an existing pet by Id
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPutRequestInformation(body: Pet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation(HttpMethod.PUT, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration);
        requestInfo.headers.tryAdd("Accept", "application/json");
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePet);
        return requestInfo;
    }
}
// tslint:enable
// eslint-enable
