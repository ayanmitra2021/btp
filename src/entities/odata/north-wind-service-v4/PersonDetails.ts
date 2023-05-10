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
import { Address, AddressField } from './Address';
import type { PersonDetailsApi } from './PersonDetailsApi';
import { Persons, PersonsType } from './Persons';

/**
 * This class represents the entity "PersonDetails" of service "ODataDemo".
 */
export class PersonDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonDetailsType<T>
{
  /**
   * Technical entity name for PersonDetails.
   */
  static _entityName = 'PersonDetails';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/';
  /**
   * All key fields of the PersonDetails entity
   */
  static _keys = ['PersonID'];
  /**
   * Person Id.
   */
  personId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Age.
   */
  age!: DeserializedType<T, 'Edm.Byte'>;
  /**
   * Gender.
   */
  gender!: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Phone.
   * @nullable
   */
  phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: Address<T> | null;
  /**
   * Photo.
   */
  photo!: DeserializedType<T, 'Edm.Any'>;
  /**
   * One-to-one navigation property to the {@link Persons} entity.
   */
  person?: Persons<T> | null;

  constructor(readonly _entityApi: PersonDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personId: DeserializedType<T, 'Edm.Int32'>;
  age: DeserializedType<T, 'Edm.Byte'>;
  gender: DeserializedType<T, 'Edm.Boolean'>;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  address?: Address<T> | null;
  photo: DeserializedType<T, 'Edm.Any'>;
  person?: PersonsType<T> | null;
}
