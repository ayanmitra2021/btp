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
} from '@sap-cloud-sdk/odata-v2';
import type { ProductsApi } from './ProductsApi';
import { Categories, CategoriesType } from './Categories';
import { Suppliers, SuppliersType } from './Suppliers';

/**
 * This class represents the entity "Products" of service "ODataDemo".
 */
export class Products<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductsType<T>
{
  /**
   * Technical entity name for Products.
   */
  static _entityName = 'Products';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/V2/(S(1ebluu1cznhubkqqusiqbn1f))/OData/OData.svc/';
  /**
   * All key fields of the Products entity
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
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Date.
   */
  releaseDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Discontinued Date.
   * @nullable
   */
  discontinuedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rating.
   */
  rating!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Price.
   */
  price!: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Categories} entity.
   */
  category?: Categories<T> | null;
  /**
   * One-to-one navigation property to the {@link Suppliers} entity.
   */
  supplier?: Suppliers<T> | null;

  constructor(readonly _entityApi: ProductsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductsType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  releaseDate: DeserializedType<T, 'Edm.DateTime'>;
  discontinuedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  rating: DeserializedType<T, 'Edm.Int32'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  category?: CategoriesType<T> | null;
  supplier?: SuppliersType<T> | null;
}
