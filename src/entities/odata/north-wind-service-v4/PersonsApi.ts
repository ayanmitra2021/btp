/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Persons } from './Persons';
import { PersonsRequestBuilder } from './PersonsRequestBuilder';
import { PersonDetailsApi } from './PersonDetailsApi';
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
export class PersonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Persons<DeSerializersT>, DeSerializersT>
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
  ): PersonsApi<DeSerializersT> {
    return new PersonsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link personDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_DETAIL: OneToOneLink<
      Persons<DeSerializersT>,
      DeSerializersT,
      PersonDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PersonDetailsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PERSON_DETAIL: new OneToOneLink('PersonDetail', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Persons;

  requestBuilder(): PersonsRequestBuilder<DeSerializersT> {
    return new PersonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Persons<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Persons<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Persons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Persons, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Persons, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Persons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Persons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_DETAIL: OneToOneLink<
      Persons<DeSerializersT>,
      DeSerializersT,
      PersonDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Persons<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Persons)
      };
    }

    return this._schema;
  }
}
