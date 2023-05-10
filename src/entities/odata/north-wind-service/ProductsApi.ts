/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Products } from './Products';
import { ProductsRequestBuilder } from './ProductsRequestBuilder';
import { CategoriesApi } from './CategoriesApi';
import { SuppliersApi } from './SuppliersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class ProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Products<DeSerializersT>, DeSerializersT>
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
  ): ProductsApi<DeSerializersT> {
    return new ProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link category} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORY: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      CategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link supplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLIER: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      SuppliersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CategoriesApi<DeSerializersT>, SuppliersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CATEGORY: new OneToOneLink('Category', this, linkedApis[0]),
      SUPPLIER: new OneToOneLink('Supplier', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Products;

  requestBuilder(): ProductsRequestBuilder<DeSerializersT> {
    return new ProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Products<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Products<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Products<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Products, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Products, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_DATE: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    DISCONTINUED_DATE: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    RATING: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link category} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORY: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      CategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link supplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLIER: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      SuppliersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Products<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'ReleaseDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link discontinuedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCONTINUED_DATE: fieldBuilder.buildEdmTypeField(
          'DiscontinuedDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link rating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING: fieldBuilder.buildEdmTypeField('Rating', 'Edm.Int32', false),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Products)
      };
    }

    return this._schema;
  }
}
