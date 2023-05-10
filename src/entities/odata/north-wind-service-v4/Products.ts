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
import type { ProductsApi } from './ProductsApi';
import { Categories, CategoriesType } from './Categories';
import { Suppliers, SuppliersType } from './Suppliers';
import { ProductDetails, ProductDetailsType } from './ProductDetails';

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
    '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/';
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
  releaseDate!: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discontinued Date.
   * @nullable
   */
  discontinuedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Rating.
   */
  rating!: DeserializedType<T, 'Edm.Int16'>;
  /**
   * Price.
   */
  price!: DeserializedType<T, 'Edm.Double'>;
  /**
   * One-to-many navigation property to the {@link Categories} entity.
   */
  categories!: Categories<T>[];
  /**
   * One-to-one navigation property to the {@link Suppliers} entity.
   */
  supplier?: Suppliers<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductDetails} entity.
   */
  productDetail?: ProductDetails<T> | null;

  constructor(readonly _entityApi: ProductsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductsType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  releaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discontinuedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  rating: DeserializedType<T, 'Edm.Int16'>;
  price: DeserializedType<T, 'Edm.Double'>;
  categories: CategoriesType<T>[];
  supplier?: SuppliersType<T> | null;
  productDetail?: ProductDetailsType<T> | null;
}
