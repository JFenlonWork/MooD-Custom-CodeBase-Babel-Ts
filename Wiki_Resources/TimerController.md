# Class: TimerController

Class representing a any utility functions or variables that help Timers.

## Table of contents

### Constructors

- [constructor](../wiki/TimerController#constructor)

### Properties

- [\_timers](../wiki/TimerController#_timers)
- [\_uniqueID](../wiki/TimerController#_uniqueid)
- [\_instance](../wiki/TimerController#_instance)

### Accessors

- [timers](../wiki/TimerController#timers)
- [uniqueID](../wiki/TimerController#uniqueid)
- [Instance](../wiki/TimerController#instance)

### Methods

- [Time](../wiki/TimerController#time)
- [addTimer](../wiki/TimerController#addtimer)
- [generateUID](../wiki/TimerController#generateuid)
- [getTimer](../wiki/TimerController#gettimer)
- [getTimerFromID](../wiki/TimerController#gettimerfromid)
- [removeTimer](../wiki/TimerController#removetimer)
- [testTimerNameIsValid](../wiki/TimerController#testtimernameisvalid)

## Constructors

### constructor

• `Private` **new TimerController**()

#### Defined in

[TImers/TimerController.ts:14](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L14)

## Properties

### \_timers

• `Private` **\_timers**: [`MultiKeyMap`](../wiki/MultiKeyMap)<[`Timer`](../wiki/Timer)\>

#### Defined in

[TImers/TimerController.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L34)

___

### \_uniqueID

• `Private` **\_uniqueID**: `number` = `0`

#### Defined in

[TImers/TimerController.ts:22](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L22)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`TimerController`](../wiki/TimerController)

#### Defined in

[TImers/TimerController.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L9)

## Accessors

### timers

• `get` **timers**(): [`MultiKeyMap`](../wiki/MultiKeyMap)<[`Timer`](../wiki/Timer)\>

#### Returns

[`MultiKeyMap`](../wiki/MultiKeyMap)<[`Timer`](../wiki/Timer)\>

#### Defined in

[TImers/TimerController.ts:35](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L35)

___

### uniqueID

• `get` **uniqueID**(): `number`

#### Returns

`number`

#### Defined in

[TImers/TimerController.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L23)

• `set` **uniqueID**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[TImers/TimerController.ts:28](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L28)

___

### Instance

• `Static` `get` **Instance**(): [`TimerController`](../wiki/TimerController)

#### Returns

[`TimerController`](../wiki/TimerController)

#### Defined in

[TImers/TimerController.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L10)

## Methods

### Time

▸ `Static` **Time**(): `number`

Return the current datetime

#### Returns

`number`

#### Defined in

[TImers/TimerController.ts:44](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L44)

___

### addTimer

▸ `Static` **addTimer**(`timer`): `void`

Adds a timer to a singleton map and update references

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timer` | [`Timer`](../wiki/Timer) | The Timer to add |

#### Returns

`void`

#### Defined in

[TImers/TimerController.ts:87](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L87)

___

### generateUID

▸ `Static` **generateUID**(): `number`

Return and increment a value to fake uniqueness

#### Returns

`number`

#### Defined in

[TImers/TimerController.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L51)

___

### getTimer

▸ `Static` **getTimer**(`name`): `undefined` \| [`Timer`](../wiki/Timer)

Searches for and returns a timer with a name parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The Timer to return |

#### Returns

`undefined` \| [`Timer`](../wiki/Timer)

#### Defined in

[TImers/TimerController.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L60)

___

### getTimerFromID

▸ `Static` **getTimerFromID**(`id`): `undefined` \| [`Timer`](../wiki/Timer)

Searches for and returns a timer with a id parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The Timer to return |

#### Returns

`undefined` \| [`Timer`](../wiki/Timer)

#### Defined in

[TImers/TimerController.ts:69](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L69)

___

### removeTimer

▸ `Static` **removeTimer**(`timer`): `void`

Remove a timer from a singleton map and update references

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timer` | [`Timer`](../wiki/Timer) | The Timer to remove |

#### Returns

`void`

#### Defined in

[TImers/TimerController.ts:95](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L95)

___

### testTimerNameIsValid

▸ `Static` **testTimerNameIsValid**(`name`): `boolean`

Searches for and returns if a timer already exists with a name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The Timer name to test |

#### Returns

`boolean`

#### Defined in

[TImers/TimerController.ts:78](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/TImers/TimerController.ts#L78)
