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
- [\_enableOffset](../wiki/Timer#_enableoffset)
- [\_events](../wiki/Timer#_events)
- [\_intervalOffset](../wiki/Timer#_intervaloffset)
- [\_lastCompletion](../wiki/Timer#_lastcompletion)
- [\_lastTickDate](../wiki/Timer#_lasttickdate)
- [\_name](../wiki/Timer#_name)
- [\_pausedAt](../wiki/Timer#_pausedat)
- [\_running](../wiki/Timer#_running)
- [\_skipOffset](../wiki/Timer#_skipoffset)
- [\_skipOffsetCalculation](../wiki/Timer#_skipoffsetcalculation)
- [\_startDate](../wiki/Timer#_startdate)
- [\_ticksElapsed](../wiki/Timer#_tickselapsed)
- [\_ticksRemaining](../wiki/Timer#_ticksremaining)
- [\_timeout](../wiki/Timer#_timeout)
- [\_timerID](../wiki/Timer#_timerid)
- [\_timingInterval](../wiki/Timer#_timinginterval)

### Accessors

- [currentTimingInterval](../wiki/Timer#currenttiminginterval)
- [enableOffset](../wiki/Timer#enableoffset)
- [events](../wiki/Timer#events)
- [intervalOffset](../wiki/Timer#intervaloffset)
- [lastCompletion](../wiki/Timer#lastcompletion)
- [lastTickDate](../wiki/Timer#lasttickdate)
- [name](../wiki/Timer#name)
- [pausedAt](../wiki/Timer#pausedat)
- [running](../wiki/Timer#running)
- [skipOffset](../wiki/Timer#skipoffset)
- [skipOffsetCalculation](../wiki/Timer#skipoffsetcalculation)
- [startDate](../wiki/Timer#startdate)
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
- [unpause](../wiki/Timer#unpause)

## Constructors

### constructor

• **new Timer**(`name`, `timingInterval`, `callbacks?`, `startOnCreation?`, `timerRunTime?`, `enableOffset?`, `skipOffset?`)

Create a timer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the timer |
| `timingInterval` | `number` | `undefined` | - |
| `callbacks` | `Function`[] | `[]` | - |
| `startOnCreation` | `boolean` | `true` | Determines if this timer should start running after creation |
| `timerRunTime` | `number` | `Number.MAX_SAFE_INTEGER` | The total time for this timer to run |
| `enableOffset` | `boolean` | `false` | Determines if a timers loop should change based on browser time discrepancies |
| `skipOffset` | [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) | `TimerSkipOffsetType.NoSkip` | Determines if a timers should skip offsets if they are too large |

#### Defined in

Timers/Timer.ts:204

## Properties

### \_currentTimingInterval

• `Protected` **\_currentTimingInterval**: `number` = `-1`

#### Defined in

Timers/Timer.ts:78

___

### \_enableOffset

• `Protected` **\_enableOffset**: `boolean` = `false`

#### Defined in

Timers/Timer.ts:146

___

### \_events

• `Private` **\_events**: [`PubSub`](../wiki/PubSub)

#### Defined in

Timers/Timer.ts:190

___

### \_intervalOffset

• `Protected` **\_intervalOffset**: `number` = `-1`

#### Defined in

Timers/Timer.ts:157

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

### \_skipOffset

• `Protected` **\_skipOffset**: [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) = `TimerSkipOffsetType.NoSkip`

#### Defined in

Timers/Timer.ts:168

___

### \_skipOffsetCalculation

• `Protected` **\_skipOffsetCalculation**: `boolean` = `false`

#### Defined in

Timers/Timer.ts:179

___

### \_startDate

• `Protected` **\_startDate**: `number` = `-1`

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

### enableOffset

• `get` **enableOffset**(): `boolean`

#### Returns

`boolean`

#### Defined in

Timers/Timer.ts:147

• `set` **enableOffset**(`enabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:151

___

### events

• `get` **events**(): [`PubSub`](../wiki/PubSub)

#### Returns

[`PubSub`](../wiki/PubSub)

#### Defined in

Timers/Timer.ts:191

___

### intervalOffset

• `get` **intervalOffset**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:158

• `set` **intervalOffset**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:162

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

### skipOffset

• `get` **skipOffset**(): [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType)

#### Returns

[`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType)

#### Defined in

Timers/Timer.ts:169

• `set` **skipOffset**(`skipType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipType` | [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:173

___

### skipOffsetCalculation

• `get` **skipOffsetCalculation**(): `boolean`

#### Returns

`boolean`

#### Defined in

Timers/Timer.ts:180

• `set` **skipOffsetCalculation**(`skipOffsetCalculation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipOffsetCalculation` | `boolean` |

#### Returns

`void`

#### Defined in

Timers/Timer.ts:184

___

### startDate

• `get` **startDate**(): `number`

#### Returns

`number`

#### Defined in

Timers/Timer.ts:57

• `set` **startDate**(`date`): `void`

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

Timers/Timer.ts:366

___

### isPaused

▸ **isPaused**(): `boolean`

Test if this Timer is currently pause

#### Returns

`boolean`

#### Defined in

Timers/Timer.ts:292

___

### loop

▸ `Protected` **loop**(): `void`

Handle the looping/countdown calculation of this timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:299

___

### pause

▸ **pause**(): `void`

Pause this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:265

___

### restart

▸ **restart**(): `void`

Restart this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:257

___

### resume

▸ **resume**(): `void`

Resume this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:276

___

### runLoop

▸ `Protected` **runLoop**(): `void`

Handle the looping of this timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:348

___

### start

▸ **start**(): `void`

Start this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:237

___

### stop

▸ **stop**(): `void`

Stop this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:247

___

### unpause

▸ **unpause**(): `void`

Resume this Timer

#### Returns

`void`

#### Defined in

Timers/Timer.ts:284
