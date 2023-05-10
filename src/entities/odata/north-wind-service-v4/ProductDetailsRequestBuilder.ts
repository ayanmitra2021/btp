/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { ProductDetails } from './ProductDetails';

/**
 * Request builder class for operations supported on the {@link ProductDetails} entity.
 */
export class ProductDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductDetails<T>, T> {
  /**
   * Returns a request builder for retrieving one `ProductDetails` entity based on its keys.
   * @param productId Key property. See {@link ProductDetails.productId}.
   * @returns A request builder for creating requests to retrieve one `ProductDetails` entity based on its keys.
   */
  getByKey(
    productId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProductDetails<T>, T> {
    return new GetByKeyRequestBuilder<ProductDetails<T>, T>(this.entityApi, {
      ProductID: productId
    });
  }

  /**
   * Returns a request builder for querying all `ProductDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ProductDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ProductDetails<T>, T> {
    return new GetAllRequestBuilder<ProductDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductDetails`.
   */
  create(
    entity: ProductDetails<T>
  ): CreateRequestBuilder<ProductDetails<T>, T> {
    return new CreateRequestBuilder<ProductDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductDetails`.
   */
  update(
    entity: ProductDetails<T>
  ): UpdateRequestBuilder<ProductDetails<T>, T> {
    return new UpdateRequestBuilder<ProductDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductDetails`.
   * @param productId Key property. See {@link ProductDetails.productId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductDetails`.
   */
  delete(productId: number): DeleteRequestBuilder<ProductDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductDetails` by taking the entity as a parameter.
   */
  delete(entity: ProductDetails<T>): DeleteRequestBuilder<ProductDetails<T>, T>;
  delete(productIdOrEntity: any): DeleteRequestBuilder<ProductDetails<T>, T> {
    return new DeleteRequestBuilder<ProductDetails<T>, T>(
      this.entityApi,
      productIdOrEntity instanceof ProductDetails
        ? productIdOrEntity
        : { ProductID: productIdOrEntity! }
    );
  }
}
