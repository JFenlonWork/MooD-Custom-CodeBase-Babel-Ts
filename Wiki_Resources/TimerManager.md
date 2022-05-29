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

Timers/TimerManager.ts:18

## Properties

### \_timers

• `Private` **\_timers**: [`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Defined in

Timers/TimerManager.ts:33

___

### \_uniqueID

• `Private` **\_uniqueID**: [`UniqueID`](../wiki/UniqueID)

#### Defined in

Timers/TimerManager.ts:26

___

### \_instance

▪ `Static` `Private` **\_instance**: [`TimerManager`](../wiki/TimerManager)

#### Defined in

Timers/TimerManager.ts:10

## Accessors

### timers

• `get` **timers**(): [`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Returns

[`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<`String` \| `Number`, [`Timer`](../wiki/Timer)\>

#### Defined in

Timers/TimerManager.ts:34

___

### uniqueID

• `get` **uniqueID**(): [`UniqueID`](../wiki/UniqueID)

#### Returns

[`UniqueID`](../wiki/UniqueID)

#### Defined in

Timers/TimerManager.ts:27

___

### Instance

• `Static` `get` **Instance**(): [`TimerManager`](../wiki/TimerManager)

#### Returns

[`TimerManager`](../wiki/TimerManager)

#### Defined in

Timers/TimerManager.ts:11

## Methods

### Time

▸ `Static` **Time**(): `number`

Return the current time in milliseconds

#### Returns

`number`

#### Defined in

Timers/TimerManager.ts:43

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

Timers/TimerManager.ts:79

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

Timers/TimerManager.ts:52

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

Timers/TimerManager.ts:61

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

Timers/TimerManager.ts:87

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

Timers/TimerManager.ts:70
