/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  transformReturnValueForEntityList,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  FunctionImportParameter,
  FunctionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { northWindService } from './service';
import { Products } from './Products';
import { ProductsApi } from './ProductsApi';

/**
 * Type of the parameters to be passed to {@link getProductsByRating}.
 */
export interface GetProductsByRatingParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Rating.
   */
  rating?: number | null;
}

/**
 * Get Products By Rating.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function getProductsByRating<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetProductsByRatingParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  GetProductsByRatingParameters<DeSerializersT>,
  Products[]
> {
  const params = {
    rating: new FunctionImportParameter(
      'rating',
      'Edm.Int32',
      parameters.rating
    )
  };

  return new FunctionImportRequestBuilder(
    'get',
    '/V2/(S(1ebluu1cznhubkqqusiqbn1f))/OData/OData.svc/',
    'GetProductsByRating',
    data =>
      transformReturnValueForEntityList(
        data,
        northWindService(deSerializers).productsApi
      ),
    params,
    deSerializers
  );
}

export const operations = {
  getProductsByRating
};
