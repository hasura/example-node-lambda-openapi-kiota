// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { createPetFromDiscriminatorValue, type Pet } from '../../models/';
import { UploadImageRequestBuilder } from './uploadImage/';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestOption } from '@microsoft/kiota-abstractions';

export interface WithPetItemRequestBuilderPostQueryParameters {
    /**
     * Name of pet that needs to be updated
     */
    name?: string;
    /**
     * Status of pet that needs to be updated
     */
    status?: string;
}
/**
 * Builds and executes requests for operations under /pet/{petId}
 */
export class WithPetItemRequestBuilder extends BaseRequestBuilder<WithPetItemRequestBuilder> {
    /**
     * The uploadImage property
     */
    public get uploadImage(): UploadImageRequestBuilder {
        return new UploadImageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WithPetItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/pet/{petId}{?name*,status*}", (x, y) => new WithPetItemRequestBuilder(x, y));
    }
    /**
     * Deletes a pet
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
    public delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", undefined);
    }
    /**
     * Returns a single pet
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Pet
     */
    public get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Pet | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendAsync<Pet>(requestInfo, createPetFromDiscriminatorValue, undefined);
    }
    /**
     * Updates a pet in the store with form data
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
    public post(requestConfiguration?: RequestConfiguration<WithPetItemRequestBuilderPostQueryParameters> | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", undefined);
    }
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation(HttpMethod.DELETE, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration);
        return requestInfo;
    }
    /**
     * Returns a single pet
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation(HttpMethod.GET, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration);
        requestInfo.headers.tryAdd("Accept", "application/json");
        return requestInfo;
    }
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: RequestConfiguration<WithPetItemRequestBuilderPostQueryParameters> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation(HttpMethod.POST, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration);
        return requestInfo;
    }
}
// tslint:enable
// eslint-enable
