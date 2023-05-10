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
import type { CategoriesApi } from './CategoriesApi';
import { Products, ProductsType } from './Products';

/**
 * This class represents the entity "Categories" of service "ODataDemo".
 */
export class Categories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CategoriesType<T>
{
  /**
   * Technical entity name for Categories.
   */
  static _entityName = 'Categories';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/';
  /**
   * All key fields of the Categories entity
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
   * One-to-many navigation property to the {@link Products} entity.
   */
  products!: Products<T>[];

  constructor(readonly _entityApi: CategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface CategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  products: ProductsType<T>[];
}
