/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Suppliers } from './Suppliers';
import { SuppliersRequestBuilder } from './SuppliersRequestBuilder';
import { ProductsApi } from './ProductsApi';
import { Address, AddressField } from './Address';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SuppliersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Suppliers<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): SuppliersApi<DeSerializersT> {
    return new SuppliersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link products} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS: OneToManyLink<
      Suppliers<DeSerializersT>,
      DeSerializersT,
      ProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ProductsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PRODUCTS: new OneToManyLink('Products', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Suppliers;

  requestBuilder(): SuppliersRequestBuilder<DeSerializersT> {
    return new SuppliersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Suppliers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Suppliers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Suppliers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Suppliers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Suppliers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Suppliers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Suppliers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS: AddressField<Suppliers<DeSerializers>, DeSerializersT, true, true>;
    LOCATION: EdmTypeField<
      Suppliers<DeSerializers>,
      DeSerializersT,
      'Edm.Any',
      true,
      true
    >;
    CONCURRENCY: OrderableEdmTypeField<
      Suppliers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link products} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS: OneToManyLink<
      Suppliers<DeSerializersT>,
      DeSerializersT,
      ProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Suppliers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildComplexTypeField(
          'Address',
          AddressField,
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField('Location', 'Edm.Any', true),
        /**
         * Static representation of the {@link concurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENCY: fieldBuilder.buildEdmTypeField(
          'Concurrency',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Suppliers)
      };
    }

    return this._schema;
  }
}
