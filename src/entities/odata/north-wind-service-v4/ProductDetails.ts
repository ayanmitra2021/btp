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
import type { ProductDetailsApi } from './ProductDetailsApi';
import { Products, ProductsType } from './Products';

/**
 * This class represents the entity "ProductDetails" of service "ODataDemo".
 */
export class ProductDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductDetailsType<T>
{
  /**
   * Technical entity name for ProductDetails.
   */
  static _entityName = 'ProductDetails';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/';
  /**
   * All key fields of the ProductDetails entity
   */
  static _keys = ['ProductID'];
  /**
   * Product Id.
   */
  productId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Products} entity.
   */
  product?: Products<T> | null;

  constructor(readonly _entityApi: ProductDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productId: DeserializedType<T, 'Edm.Int32'>;
  details?: DeserializedType<T, 'Edm.String'> | null;
  product?: ProductsType<T> | null;
}
