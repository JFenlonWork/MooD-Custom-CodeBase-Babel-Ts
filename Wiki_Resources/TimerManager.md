# Class: TimerManager

Class representing any utility functions or variables that help Timers.

## Table of contents

### Constructors

- [constructor](../wiki/TimerManager#constructor)

### Properties

- [\_timers](../wiki/TimerManager#_timers)
- [\_uniqueID](../wiki/TimerManager#_uniqueid)
- [\_instance](../wiki/TimerManager#_instance)

### Accessors

- [timers](../wiki/TimerManager#timers)
- [uniqueID](../wiki/TimerManager#uniqueid)
- [Instance](../wiki/TimerManager#instance)

### Methods

- [Time](../wiki/TimerManager#time)
- [addTimer](../wiki/TimerManager#addtimer)
- [getTimer](../wiki/TimerManager#gettimer)
- [getTimerFromID](../wiki/TimerManager#gettimerfromid)
- [removeTimer](../wiki/TimerManager#removetimer)
- [testTimerNameIsValid](../wiki/TimerManager#testtimernameisvalid)

## Constructors

### constructor

• `Private` **new TimerManager**()

Return this or singleton instance of TimerManager

#### Defined in

[TImers/TimerManager.ts:18](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L18)

## Properties

### \_timers

• `Private` **\_timers**: [`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Defined in

[TImers/TimerManager.ts:33](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L33)

___

### \_uniqueID

• `Private` **\_uniqueID**: [`UniqueID`](../wiki/UniqueID)

#### Defined in

[TImers/TimerManager.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L26)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`TimerManager`](../wiki/TimerManager)

#### Defined in

[TImers/TimerManager.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L10)

## Accessors

### timers

• `get` **timers**(): [`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Returns

[`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Defined in

[TImers/TimerManager.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L34)

___

### uniqueID

• `get` **uniqueID**(): [`UniqueID`](../wiki/UniqueID)

#### Returns

[`UniqueID`](../wiki/UniqueID)

#### Defined in

[TImers/TimerManager.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L27)

___

### Instance

• `Static` `get` **Instance**(): [`TimerManager`](../wiki/TimerManager)

#### Returns

[`TimerManager`](../wiki/TimerManager)

#### Defined in

[TImers/TimerManager.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L11)

## Methods

### Time

▸ `Static` **Time**(): `number`

Return the current datetime

#### Returns

`number`

#### Defined in

[TImers/TimerManager.ts:43](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L43)

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

[TImers/TimerManager.ts:78](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L78)

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

[TImers/TimerManager.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L51)

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

[TImers/TimerManager.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L60)

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

[TImers/TimerManager.ts:86](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L86)

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

[TImers/TimerManager.ts:69](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/c636381/Code/src/TImers/TimerManager.ts#L69)
