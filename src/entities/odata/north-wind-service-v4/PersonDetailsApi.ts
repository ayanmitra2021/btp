/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonDetails } from './PersonDetails';
import { PersonDetailsRequestBuilder } from './PersonDetailsRequestBuilder';
import { PersonsApi } from './PersonsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PersonDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonDetails<DeSerializersT>, DeSerializersT>
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
  ): PersonDetailsApi<DeSerializersT> {
    return new PersonDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonDetails<DeSerializersT>,
      DeSerializersT,
      PersonsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [PersonsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PersonDetails;

  requestBuilder(): PersonDetailsRequestBuilder<DeSerializersT> {
    return new PersonDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonDetails<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PersonDetails<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PersonDetails, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PersonDetails, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSON_ID: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGE: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      false,
      true
    >;
    GENDER: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PHONE: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS: AddressField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    PHOTO: EdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Any',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonDetails<DeSerializersT>,
      DeSerializersT,
      PersonsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ID: fieldBuilder.buildEdmTypeField(
          'PersonID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link age} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGE: fieldBuilder.buildEdmTypeField('Age', 'Edm.Byte', false),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEdmTypeField('Gender', 'Edm.Boolean', false),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
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
         * Static representation of the {@link photo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHOTO: fieldBuilder.buildEdmTypeField('Photo', 'Edm.Any', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonDetails)
      };
    }

    return this._schema;
  }
}
