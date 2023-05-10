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
import { Advertisements } from './Advertisements';

/**
 * Request builder class for operations supported on the {@link Advertisements} entity.
 */
export class AdvertisementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Advertisements<T>, T> {
  /**
   * Returns a request builder for retrieving one `Advertisements` entity based on its keys.
   * @param id Key property. See {@link Advertisements.id}.
   * @returns A request builder for creating requests to retrieve one `Advertisements` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Advertisements<T>, T> {
    return new GetByKeyRequestBuilder<Advertisements<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for querying all `Advertisements` entities.
   * @returns A request builder for creating requests to retrieve all `Advertisements` entities.
   */
  getAll(): GetAllRequestBuilder<Advertisements<T>, T> {
    return new GetAllRequestBuilder<Advertisements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Advertisements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Advertisements`.
   */
  create(
    entity: Advertisements<T>
  ): CreateRequestBuilder<Advertisements<T>, T> {
    return new CreateRequestBuilder<Advertisements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Advertisements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Advertisements`.
   */
  update(
    entity: Advertisements<T>
  ): UpdateRequestBuilder<Advertisements<T>, T> {
    return new UpdateRequestBuilder<Advertisements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Advertisements`.
   * @param id Key property. See {@link Advertisements.id}.
   * @returns A request builder for creating requests that delete an entity of type `Advertisements`.
   */
  delete(id: string): DeleteRequestBuilder<Advertisements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Advertisements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Advertisements` by taking the entity as a parameter.
   */
  delete(entity: Advertisements<T>): DeleteRequestBuilder<Advertisements<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Advertisements<T>, T> {
    return new DeleteRequestBuilder<Advertisements<T>, T>(
      this.entityApi,
      idOrEntity instanceof Advertisements ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
