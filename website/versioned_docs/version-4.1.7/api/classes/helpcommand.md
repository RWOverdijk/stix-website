---
title: HelpCommand
id: version-4.1.7-helpcommand
original_id: helpcommand
---

# `Class` HelpCommand

## Hierarchy

 [AbstractCommand](abstractcommand)

**↳ HelpCommand**

## Index

### Properties

* [cliService](helpcommand#cliservice)

### Methods

* [output](helpcommand#output)
* [renderCommand](helpcommand#rendercommand)
* [renderExamples](helpcommand#renderexamples)
* [renderOptions](helpcommand#renderoptions)
* [renderUsage](helpcommand#renderusage)

---

## Properties

<a id="cliservice"></a>

### `Private` cliService

**cliService**: *[CliService](cliservice)*

*Defined in [Library/Command/HelpCommand.ts:10](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Command/HelpCommand.ts#L10)*

___

## Methods

<a id="output"></a>

###  output

**output**(output: *[Output](output)*, params: *`object`*): [Output](output)

*Defined in [Library/Command/HelpCommand.ts:12](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Command/HelpCommand.ts#L12)*

**Parameters:**

**output: [Output](output)**

**params: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` command | `string` |

**Returns:** [Output](output)

___
<a id="rendercommand"></a>

### `Private` renderCommand

**renderCommand**(__namedParameters: *`object`*): `object`

*Defined in [Library/Command/HelpCommand.ts:93](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Command/HelpCommand.ts#L93)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| commandLine | `string` |
| config | `object` |

**Returns:** `object`

___
<a id="renderexamples"></a>

### `Private` renderExamples

**renderExamples**(examples: *`string`[]*): `object`

*Defined in [Library/Command/HelpCommand.ts:86](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Command/HelpCommand.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| examples | `string`[] |

**Returns:** `object`

___
<a id="renderoptions"></a>

### `Private` renderOptions

**renderOptions**(options: *[CliCommandOptionsType]()*): `object`

*Defined in [Library/Command/HelpCommand.ts:70](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Command/HelpCommand.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [CliCommandOptionsType]() |

**Returns:** `object`

___
<a id="renderusage"></a>

### `Private` renderUsage

**renderUsage**(command: *[CliCommandType]()*): `object`

*Defined in [Library/Command/HelpCommand.ts:51](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Command/HelpCommand.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | [CliCommandType]() |

**Returns:** `object`

___

