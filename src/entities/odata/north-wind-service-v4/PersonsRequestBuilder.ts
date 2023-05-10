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
import { Persons } from './Persons';

/**
 * Request builder class for operations supported on the {@link Persons} entity.
 */
export class PersonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Persons<T>, T> {
  /**
   * Returns a request builder for retrieving one `Persons` entity based on its keys.
   * @param id Key property. See {@link Persons.id}.
   * @returns A request builder for creating requests to retrieve one `Persons` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Persons<T>, T> {
    return new GetByKeyRequestBuilder<Persons<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for querying all `Persons` entities.
   * @returns A request builder for creating requests to retrieve all `Persons` entities.
   */
  getAll(): GetAllRequestBuilder<Persons<T>, T> {
    return new GetAllRequestBuilder<Persons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Persons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Persons`.
   */
  create(entity: Persons<T>): CreateRequestBuilder<Persons<T>, T> {
    return new CreateRequestBuilder<Persons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Persons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Persons`.
   */
  update(entity: Persons<T>): UpdateRequestBuilder<Persons<T>, T> {
    return new UpdateRequestBuilder<Persons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Persons`.
   * @param id Key property. See {@link Persons.id}.
   * @returns A request builder for creating requests that delete an entity of type `Persons`.
   */
  delete(id: number): DeleteRequestBuilder<Persons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Persons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Persons` by taking the entity as a parameter.
   */
  delete(entity: Persons<T>): DeleteRequestBuilder<Persons<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Persons<T>, T> {
    return new DeleteRequestBuilder<Persons<T>, T>(
      this.entityApi,
      idOrEntity instanceof Persons ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
