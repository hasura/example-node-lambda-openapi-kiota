// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { createPetFromDiscriminatorValue, type Pet } from '../../models/';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestOption } from '@microsoft/kiota-abstractions';

export interface FindByStatusRequestBuilderGetQueryParameters {
    /**
     * Status values that need to be considered for filter
     */
    status?: GetStatusQueryParameterType;
}
export type GetStatusQueryParameterType = (typeof GetStatusQueryParameterTypeObject)[keyof typeof GetStatusQueryParameterTypeObject];
/**
 * Builds and executes requests for operations under /pet/findByStatus
 */
export class FindByStatusRequestBuilder extends BaseRequestBuilder<FindByStatusRequestBuilder> {
    /**
     * Instantiates a new FindByStatusRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/pet/findByStatus{?status*}", (x, y) => new FindByStatusRequestBuilder(x, y));
    }
    /**
     * Multiple status values can be provided with comma separated strings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Pet
     */
    public get(requestConfiguration?: RequestConfiguration<FindByStatusRequestBuilderGetQueryParameters> | undefined) : Promise<Pet[] | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendCollectionAsync<Pet>(requestInfo, createPetFromDiscriminatorValue, undefined);
    }
    /**
     * Multiple status values can be provided with comma separated strings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RequestConfiguration<FindByStatusRequestBuilderGetQueryParameters> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation(HttpMethod.GET, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration);
        requestInfo.headers.tryAdd("Accept", "application/json");
        return requestInfo;
    }
}
export const GetStatusQueryParameterTypeObject = {
    Available: "available",
    Pending: "pending",
    Sold: "sold",
}  as const;
// tslint:enable
// eslint-enable