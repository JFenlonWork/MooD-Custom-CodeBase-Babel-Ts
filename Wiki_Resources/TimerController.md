# Class: TimerController

Class representing any utility functions or variables that help Timers.

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
- [getTimer](../wiki/TimerController#gettimer)
- [getTimerFromID](../wiki/TimerController#gettimerfromid)
- [removeTimer](../wiki/TimerController#removetimer)
- [testTimerNameIsValid](../wiki/TimerController#testtimernameisvalid)

## Constructors

### constructor

• `Private` **new TimerController**()

Return this or singleton instance of TimerController

#### Defined in

[TImers/TimerController.ts:18](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L18)

## Properties

### \_timers

• `Private` **\_timers**: [`MultiKeyReversableMap`](../wiki/MultiKeyReversableMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Defined in

[TImers/TimerController.ts:33](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L33)

___

### \_uniqueID

• `Private` **\_uniqueID**: [`UniqueID`](../wiki/UniqueID)

#### Defined in

[TImers/TimerController.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L26)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`TimerController`](../wiki/TimerController)

#### Defined in

[TImers/TimerController.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L10)

## Accessors

### timers

• `get` **timers**(): [`MultiKeyReversableMap`](../wiki/MultiKeyReversableMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Returns

[`MultiKeyReversableMap`](../wiki/MultiKeyReversableMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Defined in

[TImers/TimerController.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L34)

___

### uniqueID

• `get` **uniqueID**(): [`UniqueID`](../wiki/UniqueID)

#### Returns

[`UniqueID`](../wiki/UniqueID)

#### Defined in

[TImers/TimerController.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L27)

___

### Instance

• `Static` `get` **Instance**(): [`TimerController`](../wiki/TimerController)

#### Returns

[`TimerController`](../wiki/TimerController)

#### Defined in

[TImers/TimerController.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L11)

## Methods

### Time

▸ `Static` **Time**(): `number`

Return the current datetime

#### Returns

`number`

#### Defined in

[TImers/TimerController.ts:43](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L43)

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

[TImers/TimerController.ts:78](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L78)

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

[TImers/TimerController.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L51)

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

[TImers/TimerController.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L60)

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

[TImers/TimerController.ts:86](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L86)

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

[TImers/TimerController.ts:69](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/TimerController.ts#L69)
