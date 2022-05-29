# Class: Timer

Class representing a Timer that implements custom controls ontop of setTimeout to create a configurable timer.

## Hierarchy

- **`Timer`**

  ↳ [`RealtimeTimer`](../wiki/RealtimeTimer)

  ↳ [`ScaledTimer`](../wiki/ScaledTimer)

## Table of contents

### Constructors

- [constructor](../wiki/Timer#constructor)

### Properties

- [\_currentTimingInterval](../wiki/Timer#_currenttiminginterval)
- [\_events](../wiki/Timer#_events)
- [\_intervalOffset](../wiki/Timer#_intervaloffset)
- [\_lastCompletion](../wiki/Timer#_lastcompletion)
- [\_lastTickDate](../wiki/Timer#_lasttickdate)
- [\_name](../wiki/Timer#_name)
- [\_offsetType](../wiki/Timer#_offsettype)
- [\_pausedAt](../wiki/Timer#_pausedat)
- [\_running](../wiki/Timer#_running)
- [\_startTime](../wiki/Timer#_starttime)
- [\_ticksElapsed](../wiki/Timer#_tickselapsed)
- [\_ticksRemaining](../wiki/Timer#_ticksremaining)
- [\_timeout](../wiki/Timer#_timeout)
- [\_timerID](../wiki/Timer#_timerid)
- [\_timingInterval](../wiki/Timer#_timinginterval)

### Accessors

- [currentTimingInterval](../wiki/Timer#currenttiminginterval)
- [events](../wiki/Timer#events)
- [intervalOffset](../wiki/Timer#intervaloffset)
- [lastCompletion](../wiki/Timer#lastcompletion)
- [lastTickDate](../wiki/Timer#lasttickdate)
- [name](../wiki/Timer#name)
- [offsetType](../wiki/Timer#offsettype)
- [pausedAt](../wiki/Timer#pausedat)
- [running](../wiki/Timer#running)
- [startTime](../wiki/Timer#starttime)
- [ticksElapsed](../wiki/Timer#tickselapsed)
- [ticksRemaining](../wiki/Timer#ticksremaining)
- [timeout](../wiki/Timer#timeout)
- [timerID](../wiki/Timer#timerid)
- [timingInterval](../wiki/Timer#timinginterval)

### Methods

- [destroy](../wiki/Timer#destroy)
- [isPaused](../wiki/Timer#ispaused)
- [loop](../wiki/Timer#loop)
- [pause](../wiki/Timer#pause)
- [restart](../wiki/Timer#restart)
- [resume](../wiki/Timer#resume)
- [runLoop](../wiki/Timer#runloop)
- [start](../wiki/Timer#start)
- [stop](../wiki/Timer#stop)
- [toString](../wiki/Timer#tostring)
- [unpause](../wiki/Timer#unpause)
- [toString](../wiki/Timer#tostring)

## Constructors

### constructor

• **new Timer**(`name`, `timingInterval`, `callbacks?`, `startOnCreation?`, `timerRunTime?`, `offsetType?`)

Create a timer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the timer |
| `timingInterval` | `number` | `undefined` | - |
| `callbacks` | `Function`[] | `[]` | - |
| `startOnCreation` | `boolean` | `true` | Determines if this timer should start running after creation |
| `timerRunTime` | `number` | `Number.MAX_SAFE_INTEGER` | The total time for this timer to run |
| `offsetType` | [`TimerOffsetType`](../wiki/TimerOffsetType) | `TimerOffsetType.NoOffset` | Determines if a timer should apply an offset to loop timing and skip offsets if they are too large |

#### Defined in

Timers/Timer.ts:180

## Properties

### \_currentTimingInterval

• `Protected` **\_currentTimingInterval**: `number` = `-1`

#### Defined in

Timers/Timer.ts:78

___

### \_events

• `Private` **\_events**: [`PubSub`](../wiki/PubSub)

#### Defined in

Timers/Timer.ts:166

___

### \_intervalOffset

• `Protected` **\_intervalOffset**: `number` = `-1`

#### Defined in

Timers/Timer.ts:155

___

### \_lastCompletion

• `Protected` **\_lastCompletion**: `number` = `-1`

#### Defined in

Timers/Timer.ts:133

___

### \_lastTickDate

• `Protected` **\_lastTickDate**: `number` = `-1`

#### Defined in

Timers/Timer.ts:89

___

### \_name

• **\_name**: `string` = `""`

#### Defined in

Timers/Timer.ts:10

___

### \_offsetType

• `Protected` **\_offsetType**: [`TimerOffsetType`](../wiki/TimerOffsetType) = `TimerOffsetType.NoOffset`

#### Defined in

Timers/Timer.ts:144

___

### \_pausedAt

• `Protected` **\_pausedAt**: `number` = `-1`

#### Defined in

Timers/Timer.ts:122

___

### \_running

• `Protected` **\_running**: `boolean` = `false`

#### Defined in

Timers/Timer.ts:21

___

### \_startTime

• `Protected` **\_startTime**: `number` = `-1`

#### Defined in

Timers/Timer.ts:56

___

### \_ticksElapsed

• `Protected` **\_ticksElapsed**: `number` = `-1`

#### Defined in

Timers/Timer.ts:111

___

### \_ticksRemaining

• `Protected` **\_ticksRemaining**: `number` = `-1`

#### Defined in

Timers/Timer.ts:100

___

### \_timeout

• `Protected` **\_timeout**: `number` = `-1`

#### Defined in

Timers/Timer.ts:33

___

### \_timerID

• **\_timerID**: `number` = `-1`

#### Defined in

Timers/Timer.ts:44

___

### \_timingInterval

• `Protected` **\_timingInterval**: `number` = `-1`

#### Defined in

Timers/Timer.ts:67

## Accessors

### currentTimingInterval

• `get` **currentTimingInterval**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:79

• `set` **currentTimingInterval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:83

___

### events

• `get` **events**(): [`PubSub`](../wiki/PubSub)

#### Returns

[`PubSub`](../wiki/PubSub)

#### Defined in

Timers/Timer.ts:167

___

### intervalOffset

• `get` **intervalOffset**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:156

• `set` **intervalOffset**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:160

___

### lastCompletion

• `get` **lastCompletion**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:134

• `set` **lastCompletion**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:138

___

### lastTickDate

• `get` **lastTickDate**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:90

• `set` **lastTickDate**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:94

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

Timers/Timer.ts:11

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:15

___

### offsetType

• `get` **offsetType**(): [`TimerOffsetType`](../wiki/TimerOffsetType)

#### Returns

[`TimerOffsetType`](../wiki/TimerOffsetType)

#### Defined in

Timers/Timer.ts:145

• `set` **offsetType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TimerOffsetType`](../wiki/TimerOffsetType) |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:149

___

### pausedAt

• `get` **pausedAt**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:123

• `set` **pausedAt**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:127

___

### running

• `get` **running**(): `boolean`

#### Returns

`boolean`

#### Defined in

Timers/Timer.ts:22

• `set` **running**(`isRunning`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRunning` | `boolean` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:26

___

### startTime

• `get` **startTime**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:57

• `set` **startTime**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:61

___

### ticksElapsed

• `get` **ticksElapsed**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:112

• `set` **ticksElapsed**(`ticksElapsed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticksElapsed` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:116

___

### ticksRemaining

• `get` **ticksRemaining**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:101

• `set` **ticksRemaining**(`ticksRemaining`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticksRemaining` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:105

___

### timeout

• `get` **timeout**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:34

• `set` **timeout**(`timeout`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:38

___

### timerID

• `get` **timerID**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:45

• `set` **timerID**(`timerID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timerID` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:49

___

### timingInterval

• `get` **timingInterval**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:68

• `set` **timingInterval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:72

## Methods

### destroy

▸ **destroy**(): `void`

Handle the destruction of this timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:345

___

### isPaused

▸ **isPaused**(): `boolean`

Test if this Timer is currently pause

#### Returns

`boolean`

#### Defined in

Timers/Timer.ts:279

___

### loop

▸ `Protected` **loop**(): `void`

Handle the looping/countdown calculation of this timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:286

___

### pause

▸ **pause**(): `void`

Pause this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:255

___

### restart

▸ **restart**(): `void`

Restart this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:247

___

### resume

▸ **resume**(): `void`

Resume this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:265

___

### runLoop

▸ `Protected` **runLoop**(): `void`

Handle the looping of this timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:328

___

### start

▸ **start**(): `void`

Start this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:227

___

### stop

▸ **stop**(): `void`

Stop this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:237

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Defined in

Timers/Timer.ts:213

___

### unpause

▸ **unpause**(): `void`

Resume this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:272

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Defined in

Timers/Timer.ts:220
