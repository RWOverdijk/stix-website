---
title: ModuleManager
id: version-3.0.0-modulemanager
original_id: modulemanager
---

# `Class` ModuleManager

## Hierarchy

**ModuleManager**

## Index

### Constructors

* [constructor](modulemanager#constructor)

### Properties

* [application](modulemanager#application)
* [config](modulemanager#config)
* [eventManager](modulemanager#eventmanager)

### Methods

* [bootstrap](modulemanager#bootstrap)
* [getApplication](modulemanager#getapplication)
* [getEventManager](modulemanager#geteventmanager)
* [loadModule](modulemanager#loadmodule)
* [loadModules](modulemanager#loadmodules)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ModuleManager**(application: *[Application](application)*, eventManager: *[EventManager](eventmanager)*, config: *[Config](config)*): [ModuleManager](modulemanager)

*Defined in [Library/ModuleManager/ModuleManager.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L15)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| application | [Application](application) |
| eventManager | [EventManager](eventmanager) |
| config | [Config](config) |

**Returns:** [ModuleManager](modulemanager)

___

## Properties

<a id="application"></a>

### `Private` application

**application**: *[Application](application)*

*Defined in [Library/ModuleManager/ModuleManager.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L15)*

___
<a id="config"></a>

### `Private` config

**config**: *[Config](config)*

*Defined in [Library/ModuleManager/ModuleManager.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L11)*

___
<a id="eventmanager"></a>

### `Private` eventManager

**eventManager**: *[EventManager](eventmanager)*

*Defined in [Library/ModuleManager/ModuleManager.ts:13](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L13)*

___

## Methods

<a id="bootstrap"></a>

###  bootstrap

**bootstrap**(): `Promise`<`boolean`>

*Defined in [Library/ModuleManager/ModuleManager.ts:23](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L23)*

**Returns:** `Promise`<`boolean`>

___
<a id="getapplication"></a>

###  getApplication

**getApplication**(): [Application](application)

*Defined in [Library/ModuleManager/ModuleManager.ts:56](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L56)*

**Returns:** [Application](application)

___
<a id="geteventmanager"></a>

###  getEventManager

**getEventManager**(): [EventManager](eventmanager)

*Defined in [Library/ModuleManager/ModuleManager.ts:52](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L52)*

**Returns:** [EventManager](eventmanager)

___
<a id="loadmodule"></a>

###  loadModule

**loadModule**(ModuleClass: *[ModuleClassInterface](../interfaces/moduleclassinterface)*): `Promise`<`this`>

*Defined in [Library/ModuleManager/ModuleManager.ts:27](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ModuleClass | [ModuleClassInterface](../interfaces/moduleclassinterface) |

**Returns:** `Promise`<`this`>

___
<a id="loadmodules"></a>

###  loadModules

**loadModules**(config: *[ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface)*): `Promise`<`this`>

*Defined in [Library/ModuleManager/ModuleManager.ts:60](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| config | [ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface) |

**Returns:** `Promise`<`this`>

___

