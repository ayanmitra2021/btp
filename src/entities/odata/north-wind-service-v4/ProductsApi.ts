/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Products } from './Products';
import { ProductsRequestBuilder } from './ProductsRequestBuilder';
import { CategoriesApi } from './CategoriesApi';
import { SuppliersApi } from './SuppliersApi';
import { ProductDetailsApi } from './ProductDetailsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
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
     * Static representation of the one-to-many navigation property {@link categories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORIES: OneToManyLink<
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
    /**
     * Static representation of the one-to-one navigation property {@link productDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DETAIL: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      ProductDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CategoriesApi<DeSerializersT>,
      SuppliersApi<DeSerializersT>,
      ProductDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CATEGORIES: new OneToManyLink('Categories', this, linkedApis[0]),
      SUPPLIER: new OneToOneLink('Supplier', this, linkedApis[1]),
      PRODUCT_DETAIL: new OneToOneLink('ProductDetail', this, linkedApis[2])
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
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCONTINUED_DATE: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RATING: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link categories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORIES: OneToManyLink<
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
    /**
     * Static representation of the one-to-one navigation property {@link productDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DETAIL: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      ProductDetailsApi<DeSerializersT>
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
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discontinuedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCONTINUED_DATE: fieldBuilder.buildEdmTypeField(
          'DiscontinuedDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link rating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING: fieldBuilder.buildEdmTypeField('Rating', 'Edm.Int16', false),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Double', false),
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
