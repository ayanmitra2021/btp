/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Advertisements } from './Advertisements';
import { AdvertisementsRequestBuilder } from './AdvertisementsRequestBuilder';
import { ProductsApi } from './ProductsApi';
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
} from '@sap-cloud-sdk/odata-v4';
export class AdvertisementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Advertisements<DeSerializersT>, DeSerializersT>
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
  ): AdvertisementsApi<DeSerializersT> {
    return new AdvertisementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link featuredProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FEATURED_PRODUCT: OneToOneLink<
      Advertisements<DeSerializersT>,
      DeSerializersT,
      ProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ProductsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      FEATURED_PRODUCT: new OneToOneLink('FeaturedProduct', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Advertisements;

  requestBuilder(): AdvertisementsRequestBuilder<DeSerializersT> {
    return new AdvertisementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Advertisements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Advertisements<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Advertisements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Advertisements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Advertisements, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Advertisements<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Advertisements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AIR_DATE: OrderableEdmTypeField<
      Advertisements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link featuredProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FEATURED_PRODUCT: OneToOneLink<
      Advertisements<DeSerializersT>,
      DeSerializersT,
      ProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Advertisements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link airDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AIR_DATE: fieldBuilder.buildEdmTypeField(
          'AirDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Advertisements)
      };
    }

    return this._schema;
  }
}
