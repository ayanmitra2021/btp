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
import type { SuppliersApi } from './SuppliersApi';
import { Products, ProductsType } from './Products';

/**
 * This class represents the entity "Suppliers" of service "ODataDemo".
 */
export class Suppliers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SuppliersType<T>
{
  /**
   * Technical entity name for Suppliers.
   */
  static _entityName = 'Suppliers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/';
  /**
   * All key fields of the Suppliers entity
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
   * Address.
   * @nullable
   */
  address?: Address<T> | null;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.Any'> | null;
  /**
   * Concurrency.
   */
  concurrency!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link Products} entity.
   */
  products!: Products<T>[];

  constructor(readonly _entityApi: SuppliersApi<T>) {
    super(_entityApi);
  }
}

export interface SuppliersType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  address?: Address<T> | null;
  location?: DeserializedType<T, 'Edm.Any'> | null;
  concurrency: DeserializedType<T, 'Edm.Int32'>;
  products: ProductsType<T>[];
}
