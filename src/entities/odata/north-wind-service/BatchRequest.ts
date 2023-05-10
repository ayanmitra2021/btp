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
  FunctionImportRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  Products,
  Categories,
  Suppliers,
  GetProductsByRatingParameters
} from './index';

/**
 * Batch builder for operations supported on the North Wind Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadNorthWindServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadNorthWindServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadNorthWindServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadNorthWindServiceRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadNorthWindServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultNorthWindServicePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the North Wind Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteNorthWindServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteNorthWindServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteNorthWindServiceRequestBuilder<DeSerializersT>
    | Array<WriteNorthWindServiceRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteNorthWindServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultNorthWindServicePath =
  '/V2/(S(1ebluu1cznhubkqqusiqbn1f))/OData/OData.svc/';
export type ReadNorthWindServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | FunctionImportRequestBuilder<
      DeSerializersT,
      GetProductsByRatingParameters<DeSerializersT>,
      Products[]
    >;
export type WriteNorthWindServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>;
