/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductsApi } from './ProductsApi';
import { ProductDetailsApi } from './ProductDetailsApi';
import { CategoriesApi } from './CategoriesApi';
import { SuppliersApi } from './SuppliersApi';
import { PersonsApi } from './PersonsApi';
import { PersonDetailsApi } from './PersonDetailsApi';
import { AdvertisementsApi } from './AdvertisementsApi';
import { increaseSalaries, IncreaseSalariesParameters } from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';

export function northWindServiceV4<
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
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
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
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  > = defaultDeSerializers as any
): NorthWindServiceV4<
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
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
> {
  return new NorthWindServiceV4(mergeDefaultDeSerializersWith(deSerializers));
}
class NorthWindServiceV4<
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
      this.initApi('suppliersApi', SuppliersApi),
      this.initApi('productDetailsApi', ProductDetailsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productDetailsApi(): ProductDetailsApi<DeSerializersT> {
    const api = this.initApi('productDetailsApi', ProductDetailsApi);
    const linkedApis = [this.initApi('productsApi', ProductsApi)];
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

  get personsApi(): PersonsApi<DeSerializersT> {
    const api = this.initApi('personsApi', PersonsApi);
    const linkedApis = [this.initApi('personDetailsApi', PersonDetailsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get personDetailsApi(): PersonDetailsApi<DeSerializersT> {
    const api = this.initApi('personDetailsApi', PersonDetailsApi);
    const linkedApis = [this.initApi('personsApi', PersonsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get advertisementsApi(): AdvertisementsApi<DeSerializersT> {
    const api = this.initApi('advertisementsApi', AdvertisementsApi);
    const linkedApis = [this.initApi('productsApi', ProductsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get operations() {
    return {
      increaseSalaries: (
        parameter: IncreaseSalariesParameters<DeSerializersT>
      ) => increaseSalaries(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
