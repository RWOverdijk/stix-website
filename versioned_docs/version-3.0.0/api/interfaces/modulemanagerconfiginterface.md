---
title: ModuleManagerConfigInterface
id: version-3.0.0-modulemanagerconfiginterface
original_id: modulemanagerconfiginterface
---

# `Interface` ModuleManagerConfigInterface

The Module Manager config interface consists of an array of [Module classes](moduleclassinterface.md).

## Hierarchy

 `Array`<[ModuleClassInterface](moduleclassinterface)>

**↳ ModuleManagerConfigInterface**

## Indexable

\[n: `number`\]:&nbsp;[ModuleClassInterface](moduleclassinterface)
The Module Manager config interface consists of an array of [Module classes](moduleclassinterface.md).

## Index

### Properties

* [Array](modulemanagerconfiginterface#array)
* [length](modulemanagerconfiginterface#length)

### Methods

* [__@iterator](modulemanagerconfiginterface#___iterator)
* [__@unscopables](modulemanagerconfiginterface#___unscopables)
* [concat](modulemanagerconfiginterface#concat)
* [copyWithin](modulemanagerconfiginterface#copywithin)
* [entries](modulemanagerconfiginterface#entries)
* [every](modulemanagerconfiginterface#every)
* [fill](modulemanagerconfiginterface#fill)
* [filter](modulemanagerconfiginterface#filter)
* [find](modulemanagerconfiginterface#find)
* [findIndex](modulemanagerconfiginterface#findindex)
* [forEach](modulemanagerconfiginterface#foreach)
* [indexOf](modulemanagerconfiginterface#indexof)
* [join](modulemanagerconfiginterface#join)
* [keys](modulemanagerconfiginterface#keys)
* [lastIndexOf](modulemanagerconfiginterface#lastindexof)
* [map](modulemanagerconfiginterface#map)
* [pop](modulemanagerconfiginterface#pop)
* [push](modulemanagerconfiginterface#push)
* [reduce](modulemanagerconfiginterface#reduce)
* [reduceRight](modulemanagerconfiginterface#reduceright)
* [reverse](modulemanagerconfiginterface#reverse)
* [shift](modulemanagerconfiginterface#shift)
* [slice](modulemanagerconfiginterface#slice)
* [some](modulemanagerconfiginterface#some)
* [sort](modulemanagerconfiginterface#sort)
* [splice](modulemanagerconfiginterface#splice)
* [toLocaleString](modulemanagerconfiginterface#tolocalestring)
* [toString](modulemanagerconfiginterface#tostring)
* [unshift](modulemanagerconfiginterface#unshift)
* [values](modulemanagerconfiginterface#values)

---

## Properties

<a id="array"></a>

###  Array

**Array**: *`ArrayConstructor`*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1298*

___
<a id="length"></a>

###  length

**length**: *`number`*

*Inherited from Array.length*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1139*

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

___

## Methods

<a id="___iterator"></a>

###  __@iterator

**__@iterator**(): `IterableIterator`<[ModuleClassInterface](moduleclassinterface)>

*Inherited from Array.[Symbol.iterator]*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.iterable.d.ts:52*

Iterator

**Returns:** `IterableIterator`<[ModuleClassInterface](moduleclassinterface)>

___
<a id="___unscopables"></a>

###  __@unscopables

**__@unscopables**(): `object`

*Inherited from Array.[Symbol.unscopables]*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94*

Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.

**Returns:** `object`

___
<a id="concat"></a>

###  concat

**concat**(...items: *`ConcatArray`<[ModuleClassInterface](moduleclassinterface)>[]*): [ModuleClassInterface](moduleclassinterface)[]

**concat**(...items: *( `T` &#124; `ConcatArray`<`T`>)[]*): [ModuleClassInterface](moduleclassinterface)[]

*Inherited from Array.concat*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1161*

Combines two or more arrays.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | `ConcatArray`<[ModuleClassInterface](moduleclassinterface)>[] |  Additional items to add to the end of array1. |

**Returns:** [ModuleClassInterface](moduleclassinterface)[]

*Inherited from Array.concat*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1166*

Combines two or more arrays.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | ( `T` &#124; `ConcatArray`<`T`>)[] |  Additional items to add to the end of array1. |

**Returns:** [ModuleClassInterface](moduleclassinterface)[]

___
<a id="copywithin"></a>

###  copyWithin

**copyWithin**(target: *`number`*, start: *`number`*, end?: *`number`*): `this`

*Inherited from Array.copyWithin*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.core.d.ts:64*

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | `number` |  If target is negative, it is treated as length+target where length is the length of the array. |
| start | `number` |  If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `Optional` end | `number` |  If not specified, length of the this object is used as its default value. |

**Returns:** `this`

___
<a id="entries"></a>

###  entries

**entries**(): `IterableIterator`<[`number`, [ModuleClassInterface](moduleclassinterface)]>

*Inherited from Array.entries*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.iterable.d.ts:57*

Returns an iterable of key, value pairs for every entry in the array

**Returns:** `IterableIterator`<[`number`, [ModuleClassInterface](moduleclassinterface)]>

___
<a id="every"></a>

###  every

**every**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Array.every*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1226*

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `boolean`

___
<a id="fill"></a>

###  fill

**fill**(value: *[ModuleClassInterface](moduleclassinterface)*, start?: *`number`*, end?: *`number`*): `this`

*Inherited from Array.fill*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.core.d.ts:53*

Returns the this object after filling the section identified by start and end with value

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [ModuleClassInterface](moduleclassinterface) |  value to fill array section with |
| `Optional` start | `number` |  index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `Optional` end | `number` |  index to stop filling the array at. If end is negative, it is treated as length+end. |

**Returns:** `this`

___
<a id="filter"></a>

###  filter

**filter**<`S`>(callbackfn: *`function`*, thisArg?: *`any`*): `S`[]

**filter**(callbackfn: *`function`*, thisArg?: *`any`*): [ModuleClassInterface](moduleclassinterface)[]

*Inherited from Array.filter*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1250*

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

#### S :  [ModuleClassInterface](moduleclassinterface)
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `S`[]

*Inherited from Array.filter*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1256*

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** [ModuleClassInterface](moduleclassinterface)[]

___
<a id="find"></a>

###  find

**find**<`S`>(predicate: *`function`*, thisArg?: *`any`*):  `S` &#124; `undefined`

**find**(predicate: *`function`*, thisArg?: *`any`*):  [ModuleClassInterface](moduleclassinterface) &#124; `undefined`

*Inherited from Array.find*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.core.d.ts:31*

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

**Type parameters:**

#### S :  [ModuleClassInterface](moduleclassinterface)
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:**  `S` &#124; `undefined`

*Inherited from Array.find*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.core.d.ts:32*

**Parameters:**

| Param | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` thisArg | `any` |

**Returns:**  [ModuleClassInterface](moduleclassinterface) &#124; `undefined`

___
<a id="findindex"></a>

###  findIndex

**findIndex**(predicate: *`function`*, thisArg?: *`any`*): `number`

*Inherited from Array.findIndex*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.core.d.ts:43*

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** `number`

___
<a id="foreach"></a>

###  forEach

**forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Array.forEach*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1238*

Performs the specified action for each element in an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `void`

___
<a id="indexof"></a>

###  indexOf

**indexOf**(searchElement: *[ModuleClassInterface](moduleclassinterface)*, fromIndex?: *`number`*): `number`

*Inherited from Array.indexOf*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1214*

Returns the index of the first occurrence of a value in an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchElement | [ModuleClassInterface](moduleclassinterface) |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** `number`

___
<a id="join"></a>

###  join

**join**(separator?: *`string`*): `string`

*Inherited from Array.join*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1171*

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` separator | `string` |  A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

**Returns:** `string`

___
<a id="keys"></a>

###  keys

**keys**(): `IterableIterator`<`number`>

*Inherited from Array.keys*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.iterable.d.ts:62*

Returns an iterable of keys in the array

**Returns:** `IterableIterator`<`number`>

___
<a id="lastindexof"></a>

###  lastIndexOf

**lastIndexOf**(searchElement: *[ModuleClassInterface](moduleclassinterface)*, fromIndex?: *`number`*): `number`

*Inherited from Array.lastIndexOf*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1220*

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchElement | [ModuleClassInterface](moduleclassinterface) |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** `number`

___
<a id="map"></a>

###  map

**map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `U`[]

*Inherited from Array.map*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1244*

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `U`[]

___
<a id="pop"></a>

###  pop

**pop**():  [ModuleClassInterface](moduleclassinterface) &#124; `undefined`

*Inherited from Array.pop*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1151*

Removes the last element from an array and returns it.

**Returns:**  [ModuleClassInterface](moduleclassinterface) &#124; `undefined`

___
<a id="push"></a>

###  push

**push**(...items: *[ModuleClassInterface](moduleclassinterface)[]*): `number`

*Inherited from Array.push*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1156*

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | [ModuleClassInterface](moduleclassinterface)[] |  New elements of the Array. |

**Returns:** `number`

___
<a id="reduce"></a>

###  reduce

**reduce**(callbackfn: *`function`*): [ModuleClassInterface](moduleclassinterface)

**reduce**(callbackfn: *`function`*, initialValue: *[ModuleClassInterface](moduleclassinterface)*): [ModuleClassInterface](moduleclassinterface)

**reduce**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduce*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1262*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** [ModuleClassInterface](moduleclassinterface)

*Inherited from Array.reduce*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1263*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | [ModuleClassInterface](moduleclassinterface) |

**Returns:** [ModuleClassInterface](moduleclassinterface)

*Inherited from Array.reduce*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1269*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | `U` |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

___
<a id="reduceright"></a>

###  reduceRight

**reduceRight**(callbackfn: *`function`*): [ModuleClassInterface](moduleclassinterface)

**reduceRight**(callbackfn: *`function`*, initialValue: *[ModuleClassInterface](moduleclassinterface)*): [ModuleClassInterface](moduleclassinterface)

**reduceRight**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduceRight*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1275*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** [ModuleClassInterface](moduleclassinterface)

*Inherited from Array.reduceRight*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1276*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | [ModuleClassInterface](moduleclassinterface) |

**Returns:** [ModuleClassInterface](moduleclassinterface)

*Inherited from Array.reduceRight*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1282*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | `U` |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

___
<a id="reverse"></a>

###  reverse

**reverse**(): [ModuleClassInterface](moduleclassinterface)[]

*Inherited from Array.reverse*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1175*

Reverses the elements in an Array.

**Returns:** [ModuleClassInterface](moduleclassinterface)[]

___
<a id="shift"></a>

###  shift

**shift**():  [ModuleClassInterface](moduleclassinterface) &#124; `undefined`

*Inherited from Array.shift*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1179*

Removes the first element from an array and returns it.

**Returns:**  [ModuleClassInterface](moduleclassinterface) &#124; `undefined`

___
<a id="slice"></a>

###  slice

**slice**(start?: *`number`*, end?: *`number`*): [ModuleClassInterface](moduleclassinterface)[]

*Inherited from Array.slice*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1185*

Returns a section of an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `number` |  The beginning of the specified portion of the array. |
| `Optional` end | `number` |  The end of the specified portion of the array. |

**Returns:** [ModuleClassInterface](moduleclassinterface)[]

___
<a id="some"></a>

###  some

**some**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Array.some*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1232*

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `boolean`

___
<a id="sort"></a>

###  sort

**sort**(compareFn?: *`function`*): `this`

*Inherited from Array.sort*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1190*

Sorts an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` compareFn | `function` |  The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

**Returns:** `this`

___
<a id="splice"></a>

###  splice

**splice**(start: *`number`*, deleteCount?: *`number`*): [ModuleClassInterface](moduleclassinterface)[]

**splice**(start: *`number`*, deleteCount: *`number`*, ...items: *[ModuleClassInterface](moduleclassinterface)[]*): [ModuleClassInterface](moduleclassinterface)[]

*Inherited from Array.splice*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1196*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| `Optional` deleteCount | `number` |  The number of elements to remove. |

**Returns:** [ModuleClassInterface](moduleclassinterface)[]

*Inherited from Array.splice*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1203*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number` |  The number of elements to remove. |
| `Rest` items | [ModuleClassInterface](moduleclassinterface)[] |  Elements to insert into the array in place of the deleted elements. |

**Returns:** [ModuleClassInterface](moduleclassinterface)[]

___
<a id="tolocalestring"></a>

###  toLocaleString

**toLocaleString**(): `string`

*Inherited from Array.toLocaleString*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1147*

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

**toString**(): `string`

*Inherited from Array.toString*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1143*

Returns a string representation of an array.

**Returns:** `string`

___
<a id="unshift"></a>

###  unshift

**unshift**(...items: *[ModuleClassInterface](moduleclassinterface)[]*): `number`

*Inherited from Array.unshift*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es5.d.ts:1208*

Inserts new elements at the start of an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | [ModuleClassInterface](moduleclassinterface)[] |  Elements to insert at the start of the Array. |

**Returns:** `number`

___
<a id="values"></a>

###  values

**values**(): `IterableIterator`<[ModuleClassInterface](moduleclassinterface)>

*Inherited from Array.values*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/typescript/lib/lib.es2015.iterable.d.ts:67*

Returns an iterable of values in the array

**Returns:** `IterableIterator`<[ModuleClassInterface](moduleclassinterface)>

___

