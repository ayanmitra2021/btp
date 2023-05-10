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
import { Products } from './Products';

/**
 * Request builder class for operations supported on the {@link Products} entity.
 */
export class ProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Products<T>, T> {
  /**
   * Returns a request builder for retrieving one `Products` entity based on its keys.
   * @param id Key property. See {@link Products.id}.
   * @returns A request builder for creating requests to retrieve one `Products` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Products<T>, T> {
    return new GetByKeyRequestBuilder<Products<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for querying all `Products` entities.
   * @returns A request builder for creating requests to retrieve all `Products` entities.
   */
  getAll(): GetAllRequestBuilder<Products<T>, T> {
    return new GetAllRequestBuilder<Products<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Products` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Products`.
   */
  create(entity: Products<T>): CreateRequestBuilder<Products<T>, T> {
    return new CreateRequestBuilder<Products<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Products`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Products`.
   */
  update(entity: Products<T>): UpdateRequestBuilder<Products<T>, T> {
    return new UpdateRequestBuilder<Products<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Products`.
   * @param id Key property. See {@link Products.id}.
   * @returns A request builder for creating requests that delete an entity of type `Products`.
   */
  delete(id: number): DeleteRequestBuilder<Products<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Products`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Products` by taking the entity as a parameter.
   */
  delete(entity: Products<T>): DeleteRequestBuilder<Products<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Products<T>, T> {
    return new DeleteRequestBuilder<Products<T>, T>(
      this.entityApi,
      idOrEntity instanceof Products ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
