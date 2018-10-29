---
title: Cli
id: version-4.1.3-cli
original_id: cli
---

# `Class` Cli

## Hierarchy

**Cli**

## Index

### Methods

* [command](cli#command)
* [program](cli#program)

---

## Methods

<a id="command"></a>

### `Static` command

**command**(commandLine: *`string`*, Command: *[AbstractCommand](abstractcommand)*, action: *`string`*, config?: *[CliCommandConfigType](../modules/clitypes#clicommandconfigtype)*): [CliCommandType](../modules/clitypes#clicommandtype)

*Defined in [Library/Cli/Cli.ts:27](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Cli/Cli.ts#L27)*

Convenience method to help format a command.

┌─1─┐┌──2────┐ ┌4┐ stix generate module user -v │ └───────3─────────────┘ └─────────5────────────────┘

Legend:

1.  Command name Maps to Command
2.  Token Maps to action
3.  Arguments Passed to the action
4.  Options Passed to the action as part of arguments
5.  Command line The full command line, maps to command.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| commandLine | `string` |  \- |
| Command | [AbstractCommand](abstractcommand) |  \- |
| action | `string` |  \- |
| `Optional` config | [CliCommandConfigType](../modules/clitypes#clicommandconfigtype) |   |

**Returns:** [CliCommandType](../modules/clitypes#clicommandtype)

___
<a id="program"></a>

### `Static` program

**program**(program: *`string`*, config?: *[CliProgramConfigType](../modules/clitypes#cliprogramconfigtype)*): [CliProgramType](../modules/clitypes#cliprogramtype)

*Defined in [Library/Cli/Cli.ts:31](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Cli/Cli.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| program | `string` |
| `Optional` config | [CliProgramConfigType](../modules/clitypes#cliprogramconfigtype) |

**Returns:** [CliProgramType](../modules/clitypes#cliprogramtype)

___

