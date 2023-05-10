/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  transformReturnValueForUndefined,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  ActionImportParameter,
  ActionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { northWindServiceV4 } from './service';

/**
 * Type of the parameters to be passed to {@link increaseSalaries}.
 */
export interface IncreaseSalariesParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Percentage.
   */
  percentage: number;
}

/**
 * Increase Salaries.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function increaseSalaries<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: IncreaseSalariesParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): ActionImportRequestBuilder<
  DeSerializersT,
  IncreaseSalariesParameters<DeSerializersT>,
  undefined
> {
  const params = {
    percentage: new ActionImportParameter(
      'percentage',
      'Edm.Int32',
      parameters.percentage
    )
  };

  return new ActionImportRequestBuilder(
    '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/',
    'IncreaseSalaries',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers
  );
}

export const operations = {
  increaseSalaries
};
