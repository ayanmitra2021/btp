/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  ActionImportRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  Products,
  ProductDetails,
  Categories,
  Suppliers,
  Persons,
  PersonDetails,
  Advertisements,
  IncreaseSalariesParameters
} from './index';

/**
 * Batch builder for operations supported on the North Wind Service V4.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadNorthWindServiceV4RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadNorthWindServiceV4RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadNorthWindServiceV4RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadNorthWindServiceV4RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadNorthWindServiceV4RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultNorthWindServiceV4Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the North Wind Service V4.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteNorthWindServiceV4RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteNorthWindServiceV4RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteNorthWindServiceV4RequestBuilder<DeSerializersT>
    | Array<WriteNorthWindServiceV4RequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteNorthWindServiceV4RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultNorthWindServiceV4Path =
  '/V4/(S(zv1zkzj5ajxajfctaqmubpup))/OData/OData.svc/';
export type ReadNorthWindServiceV4RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductDetails<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Persons<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PersonDetails<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Advertisements<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductDetails<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Persons<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PersonDetails<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Advertisements<DeSerializersT>, DeSerializersT>;
export type WriteNorthWindServiceV4RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductDetails<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductDetails<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductDetails<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Persons<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Persons<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Persons<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PersonDetails<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PersonDetails<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PersonDetails<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Advertisements<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Advertisements<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Advertisements<DeSerializersT>, DeSerializersT>
  | ActionImportRequestBuilder<
      DeSerializersT,
      IncreaseSalariesParameters<DeSerializersT>,
      undefined
    >;
