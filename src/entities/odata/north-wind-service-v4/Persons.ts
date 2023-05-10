/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PersonsApi } from './PersonsApi';
import { PersonDetails, PersonDetailsType } from './PersonDetails';

/**
 * This class represents the entity "Persons" of service "ODataDemo".
 */
export class Persons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonsType<T>
{
  /**
   * Technical entity name for Persons.
   */
  static _entityName = 'Persons';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/';
  /**
   * All key fields of the Persons entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PersonDetails} entity.
   */
  personDetail?: PersonDetails<T> | null;

  constructor(readonly _entityApi: PersonsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonsType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  personDetail?: PersonDetailsType<T> | null;
}
