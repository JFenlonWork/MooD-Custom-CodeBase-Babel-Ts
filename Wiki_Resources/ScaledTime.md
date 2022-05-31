# Class: ScaledTime

A class that hold information relating to interval timings of a ScaledTimer

## Table of contents

### Constructors

- [constructor](../wiki/ScaledTime#constructor)

### Properties

- [\_interval](../wiki/ScaledTime#_interval)
- [\_threshold](../wiki/ScaledTime#_threshold)

### Accessors

- [interval](../wiki/ScaledTime#interval)
- [threshold](../wiki/ScaledTime#threshold)

### Methods

- [toString](../wiki/ScaledTime#tostring)
- [toString](../wiki/ScaledTime#tostring)

## Constructors

### constructor

• **new ScaledTime**(`threshold`, `interval`)

Create a Scaled Time which stores data for ScaledTimers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threshold` | `number` | The amount of failed returns for this to become active |
| `interval` | `number` | The ScaledTimer's timing interval if this is active |

#### Defined in

[Timers/ScaledTime.ts:31](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L31)

## Properties

### \_interval

• **\_interval**: `number` = `-1`

#### Defined in

[Timers/ScaledTime.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L16)

___

### \_threshold

• **\_threshold**: `number` = `-1`

#### Defined in

[Timers/ScaledTime.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L6)

## Accessors

### interval

• `get` **interval**(): `number`

#### Returns

`number`

#### Defined in

[Timers/ScaledTime.ts:17](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L17)

• `set` **interval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

[Timers/ScaledTime.ts:21](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L21)

___

### threshold

• `get` **threshold**(): `number`

#### Returns

`number`

#### Defined in

[Timers/ScaledTime.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L7)

• `set` **threshold**(`threshold`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `threshold` | `number` |

#### Returns

`void`

#### Defined in

[Timers/ScaledTime.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L11)

## Methods

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Defined in

[Timers/ScaledTime.ts:43](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L43)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Defined in

[Timers/ScaledTime.ts:50](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTime.ts#L50)
