---
title: EventManager
---

# `Class` EventManager

## Hierarchy

 `EventEmitter`

**↳ EventManager**

↳  [SharedEventManager](sharedeventmanager)

## Index

### Constructors

* [constructor](eventmanager#constructor)

### Properties

* [hooks](eventmanager#hooks)
* [sharedEventManager](eventmanager#sharedeventmanager)
* [defaultMaxListeners](eventmanager#defaultmaxlisteners)

### Methods

* [addListener](eventmanager#addlistener)
* [attach](eventmanager#attach)
* [attachAt](eventmanager#attachat)
* [attachOnce](eventmanager#attachonce)
* [detach](eventmanager#detach)
* [emit](eventmanager#emit)
* [eventNames](eventmanager#eventnames)
* [getMaxListeners](eventmanager#getmaxlisteners)
* [getSharedEventManager](eventmanager#getsharedeventmanager)
* [has](eventmanager#has)
* [listenerCount](eventmanager#listenercount)
* [listeners](eventmanager#listeners)
* [off](eventmanager#off)
* [on](eventmanager#on)
* [once](eventmanager#once)
* [prependListener](eventmanager#prependlistener)
* [prependOnceListener](eventmanager#prependoncelistener)
* [rawListeners](eventmanager#rawlisteners)
* [removeAllListeners](eventmanager#removealllisteners)
* [removeListener](eventmanager#removelistener)
* [setMaxListeners](eventmanager#setmaxlisteners)
* [trigger](eventmanager#trigger)
* [listenerCount](eventmanager#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new EventManager**(sharedEventManager?: *[EventManager](eventmanager)*): [EventManager](eventmanager)

*Defined in [Library/EventManager/EventManager.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L11)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` sharedEventManager | [EventManager](eventmanager) |  null |

**Returns:** [EventManager](eventmanager)

___

## Properties

<a id="hooks"></a>

### `Private` hooks

**hooks**: *`object`*

*Defined in [Library/EventManager/EventManager.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L11)*

#### Type declaration

[eventName: `string`]: `Array`<`Function`>

___
<a id="sharedeventmanager"></a>

### `Protected` sharedEventManager

**sharedEventManager**: *[EventManager](eventmanager)*

*Defined in [Library/EventManager/EventManager.ts:9](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L9)*

___
<a id="defaultmaxlisteners"></a>

### `Static` defaultMaxListeners

**defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1038*

___

## Methods

<a id="addlistener"></a>

###  addListener

**addListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1040*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="attach"></a>

###  attach

**attach**(event: *`string`*, callback: *`Function`*, index?: *`number`*): `this`

*Defined in [Library/EventManager/EventManager.ts:69](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `string` |
| callback | `Function` |
| `Optional` index | `number` |

**Returns:** `this`

___
<a id="attachat"></a>

###  attachAt

**attachAt**(index: *`number`*, event: *`string`*, callback: *`Function`*): `this`

*Defined in [Library/EventManager/EventManager.ts:81](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |
| event | `string` |
| callback | `Function` |

**Returns:** `this`

___
<a id="attachonce"></a>

###  attachOnce

**attachOnce**(eventName: *`string`*, callback: *`Function`*, index?: *`number`*): `void`

*Defined in [Library/EventManager/EventManager.ts:63](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| eventName | `string` |
| callback | `Function` |
| `Optional` index | `number` |

**Returns:** `void`

___
<a id="detach"></a>

###  detach

**detach**(event: *`string`*, callback: *`Function`*): `this`

*Defined in [Library/EventManager/EventManager.ts:85](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `string` |
| callback | `Function` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

**emit**(event: * `string` &#124; `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1052*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

**eventNames**(): `Array`< `string` &#124; `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1053*

**Returns:** `Array`< `string` &#124; `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

**getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1049*

**Returns:** `number`

___
<a id="getsharedeventmanager"></a>

###  getSharedEventManager

**getSharedEventManager**(): [EventManager](eventmanager)

*Defined in [Library/EventManager/EventManager.ts:105](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L105)*

**Returns:** [EventManager](eventmanager)

___
<a id="has"></a>

###  has

**has**(event: *`string`*, callback: *`Function`*): `boolean`

*Defined in [Library/EventManager/EventManager.ts:59](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `string` |
| callback | `Function` |

**Returns:** `boolean`

___
<a id="listenercount"></a>

###  listenerCount

**listenerCount**(type: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1054*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type |  `string` &#124; `symbol`|

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

**listeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1050*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

**off**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1046*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

**on**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1041*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

**once**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1042*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

**prependListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1043*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

**prependOnceListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1044*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

**rawListeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1051*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

**removeAllListeners**(event?: * `string` &#124; `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1047*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` event |  `string` &#124; `symbol`|

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

**removeListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1045*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

**setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1048*

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="trigger"></a>

###  trigger

**trigger**(eventName: *`string`*, target: *`any`*, payload?: *`any`*): `Promise`<`boolean`>

*Defined in [Library/EventManager/EventManager.ts:19](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| eventName | `string` |
| target | `any` |
| `Optional` payload | `any` |

**Returns:** `Promise`<`boolean`>

___
<a id="listenercount-1"></a>

### `Static` listenerCount

**listenerCount**(emitter: *`EventEmitter`*, event: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/node/index.d.ts:1037*

*__deprecated__*: since v4.0.0

**Parameters:**

| Param | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event |  `string` &#124; `symbol`|

**Returns:** `number`

___

