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
} from '@sap-cloud-sdk/odata-v2';
import { Suppliers } from './Suppliers';

/**
 * Request builder class for operations supported on the {@link Suppliers} entity.
 */
export class SuppliersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Suppliers<T>, T> {
  /**
   * Returns a request builder for retrieving one `Suppliers` entity based on its keys.
   * @param id Key property. See {@link Suppliers.id}.
   * @returns A request builder for creating requests to retrieve one `Suppliers` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Suppliers<T>, T> {
    return new GetByKeyRequestBuilder<Suppliers<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for querying all `Suppliers` entities.
   * @returns A request builder for creating requests to retrieve all `Suppliers` entities.
   */
  getAll(): GetAllRequestBuilder<Suppliers<T>, T> {
    return new GetAllRequestBuilder<Suppliers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Suppliers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Suppliers`.
   */
  create(entity: Suppliers<T>): CreateRequestBuilder<Suppliers<T>, T> {
    return new CreateRequestBuilder<Suppliers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Suppliers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Suppliers`.
   */
  update(entity: Suppliers<T>): UpdateRequestBuilder<Suppliers<T>, T> {
    return new UpdateRequestBuilder<Suppliers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Suppliers`.
   * @param id Key property. See {@link Suppliers.id}.
   * @returns A request builder for creating requests that delete an entity of type `Suppliers`.
   */
  delete(id: number): DeleteRequestBuilder<Suppliers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Suppliers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Suppliers` by taking the entity as a parameter.
   */
  delete(entity: Suppliers<T>): DeleteRequestBuilder<Suppliers<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Suppliers<T>, T> {
    return new DeleteRequestBuilder<Suppliers<T>, T>(
      this.entityApi,
      idOrEntity instanceof Suppliers ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
