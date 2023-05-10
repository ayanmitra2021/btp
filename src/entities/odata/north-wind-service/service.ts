/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductsApi } from './ProductsApi';
import { CategoriesApi } from './CategoriesApi';
import { SuppliersApi } from './SuppliersApi';
import {
  getProductsByRating,
  GetProductsByRatingParameters
} from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function northWindService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): NorthWindService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new NorthWindService(mergeDefaultDeSerializersWith(deSerializers));
}
class NorthWindService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get productsApi(): ProductsApi<DeSerializersT> {
    const api = this.initApi('productsApi', ProductsApi);
    const linkedApis = [
      this.initApi('categoriesApi', CategoriesApi),
      this.initApi('suppliersApi', SuppliersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get categoriesApi(): CategoriesApi<DeSerializersT> {
    const api = this.initApi('categoriesApi', CategoriesApi);
    const linkedApis = [this.initApi('productsApi', ProductsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get suppliersApi(): SuppliersApi<DeSerializersT> {
    const api = this.initApi('suppliersApi', SuppliersApi);
    const linkedApis = [this.initApi('productsApi', ProductsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get operations() {
    return {
      getProductsByRating: (
        parameter: GetProductsByRatingParameters<DeSerializersT>
      ) => getProductsByRating(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
