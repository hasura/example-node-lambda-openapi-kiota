// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { type AdditionalDataHolder, type ApiError, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ApiResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The code property
     */
    code?: number;
    /**
     * The message property
     */
    message?: string;
    /**
     * The type property
     */
    type?: string;
}
export interface Category extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The id property
     */
    id?: number;
    /**
     * The name property
     */
    name?: string;
}
export function createApiResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    return deserializeIntoApiResponse;
}
export function createCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    return deserializeIntoCategory;
}
export function createOrderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    return deserializeIntoOrder;
}
export function createPetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    return deserializeIntoPet;
}
export function createTagFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    return deserializeIntoTag;
}
export function createUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    return deserializeIntoUser;
}
export function deserializeIntoApiResponse(apiResponse: ApiResponse | undefined = {} as ApiResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { apiResponse.code = n.getNumberValue(); },
        "message": n => { apiResponse.message = n.getStringValue(); },
        "type": n => { apiResponse.type = n.getStringValue(); },
    }
}
export function deserializeIntoCategory(category: Category | undefined = {} as Category) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { category.id = n.getNumberValue(); },
        "name": n => { category.name = n.getStringValue(); },
    }
}
export function deserializeIntoOrder(order: Order | undefined = {} as Order) : Record<string, (node: ParseNode) => void> {
    return {
        "complete": n => { order.complete = n.getBooleanValue(); },
        "id": n => { order.id = n.getNumberValue(); },
        "petId": n => { order.petId = n.getNumberValue(); },
        "quantity": n => { order.quantity = n.getNumberValue(); },
        "shipDate": n => { order.shipDate = n.getDateValue(); },
        "status": n => { order.status = n.getEnumValue<Order_status>(Order_statusObject); },
    }
}
export function deserializeIntoPet(pet: Pet | undefined = {} as Pet) : Record<string, (node: ParseNode) => void> {
    return {
        "category": n => { pet.category = n.getObjectValue<Category>(createCategoryFromDiscriminatorValue); },
        "id": n => { pet.id = n.getNumberValue(); },
        "name": n => { pet.name = n.getStringValue(); },
        "photoUrls": n => { pet.photoUrls = n.getCollectionOfPrimitiveValues<string>(); },
        "status": n => { pet.status = n.getEnumValue<Pet_status>(Pet_statusObject); },
        "tags": n => { pet.tags = n.getCollectionOfObjectValues<Tag>(createTagFromDiscriminatorValue); },
    }
}
export function deserializeIntoTag(tag: Tag | undefined = {} as Tag) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { tag.id = n.getNumberValue(); },
        "name": n => { tag.name = n.getStringValue(); },
    }
}
export function deserializeIntoUser(user: User | undefined = {} as User) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { user.email = n.getStringValue(); },
        "firstName": n => { user.firstName = n.getStringValue(); },
        "id": n => { user.id = n.getNumberValue(); },
        "lastName": n => { user.lastName = n.getStringValue(); },
        "password": n => { user.password = n.getStringValue(); },
        "phone": n => { user.phone = n.getStringValue(); },
        "username": n => { user.username = n.getStringValue(); },
        "userStatus": n => { user.userStatus = n.getNumberValue(); },
    }
}
export interface Order extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The complete property
     */
    complete?: boolean;
    /**
     * The id property
     */
    id?: number;
    /**
     * The petId property
     */
    petId?: number;
    /**
     * The quantity property
     */
    quantity?: number;
    /**
     * The shipDate property
     */
    shipDate?: Date;
    /**
     * Order Status
     */
    status?: Order_status;
}
export type Order_status = (typeof Order_statusObject)[keyof typeof Order_statusObject];
export interface Pet extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The category property
     */
    category?: Category;
    /**
     * The id property
     */
    id?: number;
    /**
     * The name property
     */
    name?: string;
    /**
     * The photoUrls property
     */
    photoUrls?: string[];
    /**
     * pet status in the store
     */
    status?: Pet_status;
    /**
     * The tags property
     */
    tags?: Tag[];
}
export type Pet_status = (typeof Pet_statusObject)[keyof typeof Pet_statusObject];
export function serializeApiResponse(writer: SerializationWriter, apiResponse: ApiResponse | undefined = {} as ApiResponse) : void {
    writer.writeNumberValue("code", apiResponse.code);
    writer.writeStringValue("message", apiResponse.message);
    writer.writeStringValue("type", apiResponse.type);
    writer.writeAdditionalData(apiResponse.additionalData);
}
export function serializeCategory(writer: SerializationWriter, category: Category | undefined = {} as Category) : void {
    writer.writeNumberValue("id", category.id);
    writer.writeStringValue("name", category.name);
    writer.writeAdditionalData(category.additionalData);
}
export function serializeOrder(writer: SerializationWriter, order: Order | undefined = {} as Order) : void {
    writer.writeBooleanValue("complete", order.complete);
    writer.writeNumberValue("id", order.id);
    writer.writeNumberValue("petId", order.petId);
    writer.writeNumberValue("quantity", order.quantity);
    writer.writeDateValue("shipDate", order.shipDate);
    writer.writeEnumValue<Order_status>("status", order.status);
    writer.writeAdditionalData(order.additionalData);
}
export function serializePet(writer: SerializationWriter, pet: Pet | undefined = {} as Pet) : void {
    writer.writeObjectValue<Category>("category", pet.category, serializeCategory);
    writer.writeNumberValue("id", pet.id);
    writer.writeStringValue("name", pet.name);
    writer.writeCollectionOfPrimitiveValues<string>("photoUrls", pet.photoUrls);
    writer.writeEnumValue<Pet_status>("status", pet.status);
    writer.writeCollectionOfObjectValues<Tag>("tags", pet.tags, serializeTag);
    writer.writeAdditionalData(pet.additionalData);
}
export function serializeTag(writer: SerializationWriter, tag: Tag | undefined = {} as Tag) : void {
    writer.writeNumberValue("id", tag.id);
    writer.writeStringValue("name", tag.name);
    writer.writeAdditionalData(tag.additionalData);
}
export function serializeUser(writer: SerializationWriter, user: User | undefined = {} as User) : void {
    writer.writeStringValue("email", user.email);
    writer.writeStringValue("firstName", user.firstName);
    writer.writeNumberValue("id", user.id);
    writer.writeStringValue("lastName", user.lastName);
    writer.writeStringValue("password", user.password);
    writer.writeStringValue("phone", user.phone);
    writer.writeStringValue("username", user.username);
    writer.writeNumberValue("userStatus", user.userStatus);
    writer.writeAdditionalData(user.additionalData);
}
export interface Tag extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The id property
     */
    id?: number;
    /**
     * The name property
     */
    name?: string;
}
export interface User extends AdditionalDataHolder, ApiError, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The email property
     */
    email?: string;
    /**
     * The firstName property
     */
    firstName?: string;
    /**
     * The id property
     */
    id?: number;
    /**
     * The lastName property
     */
    lastName?: string;
    /**
     * The password property
     */
    password?: string;
    /**
     * The phone property
     */
    phone?: string;
    /**
     * The username property
     */
    username?: string;
    /**
     * User Status
     */
    userStatus?: number;
}
/**
 * Order Status
 */
export const Order_statusObject = {
    Placed: "placed",
    Approved: "approved",
    Delivered: "delivered",
}  as const;
/**
 * pet status in the store
 */
export const Pet_statusObject = {
    Available: "available",
    Pending: "pending",
    Sold: "sold",
}  as const;
// tslint:enable
// eslint-enable
