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
import { PersonDetails } from './PersonDetails';

/**
 * Request builder class for operations supported on the {@link PersonDetails} entity.
 */
export class PersonDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonDetails<T>, T> {
  /**
   * Returns a request builder for retrieving one `PersonDetails` entity based on its keys.
   * @param personId Key property. See {@link PersonDetails.personId}.
   * @returns A request builder for creating requests to retrieve one `PersonDetails` entity based on its keys.
   */
  getByKey(
    personId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PersonDetails<T>, T> {
    return new GetByKeyRequestBuilder<PersonDetails<T>, T>(this.entityApi, {
      PersonID: personId
    });
  }

  /**
   * Returns a request builder for querying all `PersonDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PersonDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PersonDetails<T>, T> {
    return new GetAllRequestBuilder<PersonDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonDetails`.
   */
  create(entity: PersonDetails<T>): CreateRequestBuilder<PersonDetails<T>, T> {
    return new CreateRequestBuilder<PersonDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonDetails`.
   */
  update(entity: PersonDetails<T>): UpdateRequestBuilder<PersonDetails<T>, T> {
    return new UpdateRequestBuilder<PersonDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonDetails`.
   * @param personId Key property. See {@link PersonDetails.personId}.
   * @returns A request builder for creating requests that delete an entity of type `PersonDetails`.
   */
  delete(personId: number): DeleteRequestBuilder<PersonDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonDetails` by taking the entity as a parameter.
   */
  delete(entity: PersonDetails<T>): DeleteRequestBuilder<PersonDetails<T>, T>;
  delete(personIdOrEntity: any): DeleteRequestBuilder<PersonDetails<T>, T> {
    return new DeleteRequestBuilder<PersonDetails<T>, T>(
      this.entityApi,
      personIdOrEntity instanceof PersonDetails
        ? personIdOrEntity
        : { PersonID: personIdOrEntity! }
    );
  }
}
