---
title: ServiceManager
id: version-1.0.2-servicemanager
original_id: servicemanager
---

# `Class` ServiceManager

*__export__*: 

*__class__*: ServiceManager

*__implements__*: {ServiceManagerInterface}

## Hierarchy

**ServiceManager**

↳  [AbstractPluginManager](abstractpluginmanager)

## Implements

* [ServiceManagerInterface](../interfaces/servicemanagerinterface)

## Index

### Constructors

* [constructor](servicemanager#constructor)

### Properties

* [aliases](servicemanager#aliases)
* [creationContext](servicemanager#creationcontext)
* [factories](servicemanager#factories)
* [services](servicemanager#services)
* [shared](servicemanager#shared)
* [sharedByDefault](servicemanager#sharedbydefault)

### Methods

* [configure](servicemanager#configure)
* [get](servicemanager#get)
* [has](servicemanager#has)
* [registerFactories](servicemanager#registerfactories)
* [registerFactory](servicemanager#registerfactory)
* [registerService](servicemanager#registerservice)
* [resolveName](servicemanager#resolvename)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ServiceManager**(config?: *[ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype)*): [ServiceManager](servicemanager)

*Defined in [Library/ServiceManager/ServiceManager.ts:21](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` config | [ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype) |

**Returns:** [ServiceManager](servicemanager)

___

## Properties

<a id="aliases"></a>

### `Private` aliases

**aliases**: *[AliasesType](../modules/servicemanagerconfiginterface#aliasestype)*

*Defined in [Library/ServiceManager/ServiceManager.ts:15](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L15)*

___
<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Defined in [Library/ServiceManager/ServiceManager.ts:21](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L21)*

___
<a id="factories"></a>

### `Private` factories

**factories**: *[FactoriesMapType](../modules/servicemanagerconfiginterface#factoriesmaptype)* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:13](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L13)*

___
<a id="services"></a>

### `Private` services

**services**: *[ServicesMapType](../modules/servicemanagerconfiginterface#servicesmaptype)* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:11](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L11)*

___
<a id="shared"></a>

### `Private` shared

**shared**: *[SharedMapType](../modules/servicemanagerconfiginterface#sharedmaptype)* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:17](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L17)*

___
<a id="sharedbydefault"></a>

### `Private` sharedByDefault

**sharedByDefault**: *`boolean`* = true

*Defined in [Library/ServiceManager/ServiceManager.ts:19](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L19)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype)*): `this`

*Defined in [Library/ServiceManager/ServiceManager.ts:78](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype) |

**Returns:** `this`

___
<a id="get"></a>

###  get

**get**<`T`>(Service: *[ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`>*, forceTransient?: *`boolean`*): `T`

*Defined in [Library/ServiceManager/ServiceManager.ts:31](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L31)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Service | [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`> | - |
| `Default value` forceTransient | `boolean` | false |

**Returns:** `T`

___
<a id="has"></a>

###  has

**has**<`T`>(Service: *[ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`>*): `boolean`

*Defined in [Library/ServiceManager/ServiceManager.ts:52](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L52)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Service | [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`> |

**Returns:** `boolean`

___
<a id="registerfactories"></a>

###  registerFactories

**registerFactories**(factories: *[FactoriesMapType](../modules/servicemanagerconfiginterface#factoriesmaptype)*): `this`

*Defined in [Library/ServiceManager/ServiceManager.ts:64](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| factories | [FactoriesMapType](../modules/servicemanagerconfiginterface#factoriesmaptype) |

**Returns:** `this`

___
<a id="registerfactory"></a>

###  registerFactory

**registerFactory**(key: * `Function` &#124; `string`*, value: *[ServiceFactoryType](../interfaces/servicefactorytype)<`Object`>*): `this`

*Defined in [Library/ServiceManager/ServiceManager.ts:58](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| value | [ServiceFactoryType](../interfaces/servicefactorytype)<`Object`> |

**Returns:** `this`

___
<a id="registerservice"></a>

###  registerService

**registerService**(key: * `Function` &#124; `string`*, service: *`Object`*): `this`

*Defined in [Library/ServiceManager/ServiceManager.ts:72](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| service | `Object` |

**Returns:** `this`

___
<a id="resolvename"></a>

### `Private` resolveName

**resolveName**<`T`>(name: *[ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`>*): [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`>

*Defined in [Library/ServiceManager/ServiceManager.ts:108](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManager.ts#L108)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`> |

**Returns:** [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`>

___

