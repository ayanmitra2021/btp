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
import type { AdvertisementsApi } from './AdvertisementsApi';
import { Products, ProductsType } from './Products';

/**
 * This class represents the entity "Advertisements" of service "ODataDemo".
 */
export class Advertisements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AdvertisementsType<T>
{
  /**
   * Technical entity name for Advertisements.
   */
  static _entityName = 'Advertisements';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/';
  /**
   * All key fields of the Advertisements entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Air Date.
   */
  airDate!: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link Products} entity.
   */
  featuredProduct?: Products<T> | null;

  constructor(readonly _entityApi: AdvertisementsApi<T>) {
    super(_entityApi);
  }
}

export interface AdvertisementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  airDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  featuredProduct?: ProductsType<T> | null;
}
