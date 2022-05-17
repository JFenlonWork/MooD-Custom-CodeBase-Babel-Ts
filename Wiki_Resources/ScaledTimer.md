# Class: ScaledTimer

A ScaledTimer that builds upon default Timer to change have
 variable interval times based on a pass/fail return value

## Hierarchy

- [`Timer`](../wiki/Timer)

  ↳ **`ScaledTimer`**

## Table of contents

### Constructors

- [constructor](../wiki/ScaledTimer#constructor)

### Properties

- [\_currentTimingInterval](../wiki/ScaledTimer#_currenttiminginterval)
- [\_enableOffset](../wiki/ScaledTimer#_enableoffset)
- [\_failCount](../wiki/ScaledTimer#_failcount)
- [\_intervalOffset](../wiki/ScaledTimer#_intervaloffset)
- [\_lastCompletion](../wiki/ScaledTimer#_lastcompletion)
- [\_lastTickDate](../wiki/ScaledTimer#_lasttickdate)
- [\_name](../wiki/ScaledTimer#_name)
- [\_pausedAt](../wiki/ScaledTimer#_pausedat)
- [\_running](../wiki/ScaledTimer#_running)
- [\_scaledEvents](../wiki/ScaledTimer#_scaledevents)
- [\_skipOffset](../wiki/ScaledTimer#_skipoffset)
- [\_skipOffsetCalculation](../wiki/ScaledTimer#_skipoffsetcalculation)
- [\_startDate](../wiki/ScaledTimer#_startdate)
- [\_ticksElapsed](../wiki/ScaledTimer#_tickselapsed)
- [\_ticksRemaining](../wiki/ScaledTimer#_ticksremaining)
- [\_timeScalers](../wiki/ScaledTimer#_timescalers)
- [\_timeout](../wiki/ScaledTimer#_timeout)
- [\_timerID](../wiki/ScaledTimer#_timerid)
- [\_timingInterval](../wiki/ScaledTimer#_timinginterval)

### Accessors

- [currentTimingInterval](../wiki/ScaledTimer#currenttiminginterval)
- [enableOffset](../wiki/ScaledTimer#enableoffset)
- [events](../wiki/ScaledTimer#events)
- [failCount](../wiki/ScaledTimer#failcount)
- [intervalOffset](../wiki/ScaledTimer#intervaloffset)
- [lastCompletion](../wiki/ScaledTimer#lastcompletion)
- [lastTickDate](../wiki/ScaledTimer#lasttickdate)
- [name](../wiki/ScaledTimer#name)
- [pausedAt](../wiki/ScaledTimer#pausedat)
- [running](../wiki/ScaledTimer#running)
- [skipOffset](../wiki/ScaledTimer#skipoffset)
- [skipOffsetCalculation](../wiki/ScaledTimer#skipoffsetcalculation)
- [startDate](../wiki/ScaledTimer#startdate)
- [ticksElapsed](../wiki/ScaledTimer#tickselapsed)
- [ticksRemaining](../wiki/ScaledTimer#ticksremaining)
- [timeScalers](../wiki/ScaledTimer#timescalers)
- [timeout](../wiki/ScaledTimer#timeout)
- [timerID](../wiki/ScaledTimer#timerid)
- [timingInterval](../wiki/ScaledTimer#timinginterval)

### Methods

- [destroy](../wiki/ScaledTimer#destroy)
- [isPaused](../wiki/ScaledTimer#ispaused)
- [listenToResponse](../wiki/ScaledTimer#listentoresponse)
- [loop](../wiki/ScaledTimer#loop)
- [pause](../wiki/ScaledTimer#pause)
- [restart](../wiki/ScaledTimer#restart)
- [resume](../wiki/ScaledTimer#resume)
- [runLoop](../wiki/ScaledTimer#runloop)
- [start](../wiki/ScaledTimer#start)
- [stop](../wiki/ScaledTimer#stop)
- [unpause](../wiki/ScaledTimer#unpause)
- [updateCurrentTimeScaler](../wiki/ScaledTimer#updatecurrenttimescaler)

## Constructors

### constructor

• **new ScaledTimer**(`name`, `timeScalers`, `callbacks?`, `startOnCreation?`, `timerRunTime?`, `enableOffset?`)

Create a RealtimeTimer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the timer |
| `timeScalers` | [`ScaledTime`](../wiki/ScaledTime)[] | `undefined` | An array of ScaledTimes that control this ScaledTimer's timing interval |
| `callbacks` | `Function`[] | `[]` | The callbacks listening to this timer |
| `startOnCreation` | `boolean` | `true` | Determines if this timer should start running after creation |
| `timerRunTime` | `number` | `Number.MAX_SAFE_INTEGER` | The total time for this timer to run |
| `enableOffset` | `boolean` | `true` | Determines if a timers loop should change based on browser time discrepancies |

#### Overrides

[Timer](../wiki/Timer).[constructor](../wiki/Timer#constructor)

#### Defined in

[Timers/ScaledTimer.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L51)

## Properties

### \_currentTimingInterval

• `Protected` **\_currentTimingInterval**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_currentTimingInterval](../wiki/Timer#_currenttiminginterval)

#### Defined in

Timers/Timer.ts:78

___

### \_enableOffset

• `Protected` **\_enableOffset**: `boolean` = `false`

#### Inherited from

[Timer](../wiki/Timer).[_enableOffset](../wiki/Timer#_enableoffset)

#### Defined in

Timers/Timer.ts:146

___

### \_failCount

• **\_failCount**: `number` = `0`

#### Defined in

[Timers/ScaledTimer.ts:17](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L17)

___

### \_intervalOffset

• `Protected` **\_intervalOffset**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_intervalOffset](../wiki/Timer#_intervaloffset)

#### Defined in

Timers/Timer.ts:157

___

### \_lastCompletion

• `Protected` **\_lastCompletion**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_lastCompletion](../wiki/Timer#_lastcompletion)

#### Defined in

Timers/Timer.ts:133

___

### \_lastTickDate

• `Protected` **\_lastTickDate**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_lastTickDate](../wiki/Timer#_lasttickdate)

#### Defined in

Timers/Timer.ts:89

___

### \_name

• **\_name**: `string` = `""`

#### Inherited from

[Timer](../wiki/Timer).[_name](../wiki/Timer#_name)

#### Defined in

Timers/Timer.ts:10

___

### \_pausedAt

• `Protected` **\_pausedAt**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_pausedAt](../wiki/Timer#_pausedat)

#### Defined in

Timers/Timer.ts:122

___

### \_running

• `Protected` **\_running**: `boolean` = `false`

#### Inherited from

[Timer](../wiki/Timer).[_running](../wiki/Timer#_running)

#### Defined in

Timers/Timer.ts:21

___

### \_scaledEvents

• `Private` **\_scaledEvents**: [`PubSub`](../wiki/PubSub)

#### Defined in

[Timers/ScaledTimer.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L11)

___

### \_skipOffset

• `Protected` **\_skipOffset**: [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) = `TimerSkipOffsetType.NoSkip`

#### Inherited from

[Timer](../wiki/Timer).[_skipOffset](../wiki/Timer#_skipoffset)

#### Defined in

Timers/Timer.ts:168

___

### \_skipOffsetCalculation

• `Protected` **\_skipOffsetCalculation**: `boolean` = `false`

#### Inherited from

[Timer](../wiki/Timer).[_skipOffsetCalculation](../wiki/Timer#_skipoffsetcalculation)

#### Defined in

Timers/Timer.ts:179

___

### \_startDate

• `Protected` **\_startDate**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_startDate](../wiki/Timer#_startdate)

#### Defined in

Timers/Timer.ts:56

___

### \_ticksElapsed

• `Protected` **\_ticksElapsed**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_ticksElapsed](../wiki/Timer#_tickselapsed)

#### Defined in

Timers/Timer.ts:111

___

### \_ticksRemaining

• `Protected` **\_ticksRemaining**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_ticksRemaining](../wiki/Timer#_ticksremaining)

#### Defined in

Timers/Timer.ts:100

___

### \_timeScalers

• **\_timeScalers**: [`ScaledTime`](../wiki/ScaledTime)[] = `[]`

#### Defined in

[Timers/ScaledTimer.ts:28](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L28)

___

### \_timeout

• `Protected` **\_timeout**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_timeout](../wiki/Timer#_timeout)

#### Defined in

Timers/Timer.ts:33

___

### \_timerID

• **\_timerID**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_timerID](../wiki/Timer#_timerid)

#### Defined in

Timers/Timer.ts:44

___

### \_timingInterval

• `Protected` **\_timingInterval**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_timingInterval](../wiki/Timer#_timinginterval)

#### Defined in

Timers/Timer.ts:67

## Accessors

### currentTimingInterval

• `get` **currentTimingInterval**(): `number`

#### Returns

`number`

#### Inherited from

Timer.currentTimingInterval

#### Defined in

Timers/Timer.ts:79

• `set` **currentTimingInterval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Inherited from

Timer.currentTimingInterval

#### Defined in

Timers/Timer.ts:83

___

### enableOffset

• `get` **enableOffset**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Timer.enableOffset

#### Defined in

Timers/Timer.ts:147

• `set` **enableOffset**(`enabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Inherited from

Timer.enableOffset

#### Defined in

Timers/Timer.ts:151

___

### events

• `get` **events**(): [`PubSub`](../wiki/PubSub)

#### Returns

[`PubSub`](../wiki/PubSub)

#### Overrides

Timer.events

#### Defined in

[Timers/ScaledTimer.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L12)

___

### failCount

• `get` **failCount**(): `number`

#### Returns

`number`

#### Defined in

[Timers/ScaledTimer.ts:18](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L18)

• `set` **failCount**(`failCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failCount` | `number` |

#### Returns

`void`

#### Defined in

[Timers/ScaledTimer.ts:22](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L22)

___

### intervalOffset

• `get` **intervalOffset**(): `number`

#### Returns

`number`

#### Inherited from

Timer.intervalOffset

#### Defined in

Timers/Timer.ts:158

• `set` **intervalOffset**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Inherited from

Timer.intervalOffset

#### Defined in

Timers/Timer.ts:162

___

### lastCompletion

• `get` **lastCompletion**(): `number`

#### Returns

`number`

#### Inherited from

Timer.lastCompletion

#### Defined in

Timers/Timer.ts:134

• `set` **lastCompletion**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Inherited from

Timer.lastCompletion

#### Defined in

Timers/Timer.ts:138

___

### lastTickDate

• `get` **lastTickDate**(): `number`

#### Returns

`number`

#### Inherited from

Timer.lastTickDate

#### Defined in

Timers/Timer.ts:90

• `set` **lastTickDate**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Inherited from

Timer.lastTickDate

#### Defined in

Timers/Timer.ts:94

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

Timer.name

#### Defined in

Timers/Timer.ts:11

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

Timer.name

#### Defined in

Timers/Timer.ts:15

___

### pausedAt

• `get` **pausedAt**(): `number`

#### Returns

`number`

#### Inherited from

Timer.pausedAt

#### Defined in

Timers/Timer.ts:123

• `set` **pausedAt**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Inherited from

Timer.pausedAt

#### Defined in

Timers/Timer.ts:127

___

### running

• `get` **running**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Timer.running

#### Defined in

Timers/Timer.ts:22

• `set` **running**(`isRunning`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRunning` | `boolean` |

#### Returns

`void`

#### Inherited from

Timer.running

#### Defined in

Timers/Timer.ts:26

___

### skipOffset

• `get` **skipOffset**(): [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType)

#### Returns

[`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType)

#### Inherited from

Timer.skipOffset

#### Defined in

Timers/Timer.ts:169

• `set` **skipOffset**(`skipType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipType` | [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) |

#### Returns

`void`

#### Inherited from

Timer.skipOffset

#### Defined in

Timers/Timer.ts:173

___

### skipOffsetCalculation

• `get` **skipOffsetCalculation**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Timer.skipOffsetCalculation

#### Defined in

Timers/Timer.ts:180

• `set` **skipOffsetCalculation**(`skipOffsetCalculation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipOffsetCalculation` | `boolean` |

#### Returns

`void`

#### Inherited from

Timer.skipOffsetCalculation

#### Defined in

Timers/Timer.ts:184

___

### startDate

• `get` **startDate**(): `number`

#### Returns

`number`

#### Inherited from

Timer.startDate

#### Defined in

Timers/Timer.ts:57

• `set` **startDate**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Inherited from

Timer.startDate

#### Defined in

Timers/Timer.ts:61

___

### ticksElapsed

• `get` **ticksElapsed**(): `number`

#### Returns

`number`

#### Inherited from

Timer.ticksElapsed

#### Defined in

Timers/Timer.ts:112

• `set` **ticksElapsed**(`ticksElapsed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticksElapsed` | `number` |

#### Returns

`void`

#### Inherited from

Timer.ticksElapsed

#### Defined in

Timers/Timer.ts:116

___

### ticksRemaining

• `get` **ticksRemaining**(): `number`

#### Returns

`number`

#### Inherited from

Timer.ticksRemaining

#### Defined in

Timers/Timer.ts:101

• `set` **ticksRemaining**(`ticksRemaining`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticksRemaining` | `number` |

#### Returns

`void`

#### Inherited from

Timer.ticksRemaining

#### Defined in

Timers/Timer.ts:105

___

### timeScalers

• `get` **timeScalers**(): [`ScaledTime`](../wiki/ScaledTime)[]

#### Returns

[`ScaledTime`](../wiki/ScaledTime)[]

#### Defined in

[Timers/ScaledTimer.ts:29](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L29)

• `set` **timeScalers**(`timeScalers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeScalers` | [`ScaledTime`](../wiki/ScaledTime) \| [`ScaledTime`](../wiki/ScaledTime)[] |

#### Returns

`void`

#### Defined in

[Timers/ScaledTimer.ts:33](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L33)

___

### timeout

• `get` **timeout**(): `number`

#### Returns

`number`

#### Inherited from

Timer.timeout

#### Defined in

Timers/Timer.ts:34

• `set` **timeout**(`timeout`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

`void`

#### Inherited from

Timer.timeout

#### Defined in

Timers/Timer.ts:38

___

### timerID

• `get` **timerID**(): `number`

#### Returns

`number`

#### Inherited from

Timer.timerID

#### Defined in

Timers/Timer.ts:45

• `set` **timerID**(`timerID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timerID` | `number` |

#### Returns

`void`

#### Inherited from

Timer.timerID

#### Defined in

Timers/Timer.ts:49

___

### timingInterval

• `get` **timingInterval**(): `number`

#### Returns

`number`

#### Inherited from

Timer.timingInterval

#### Defined in

Timers/Timer.ts:68

• `set` **timingInterval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Inherited from

Timer.timingInterval

#### Defined in

Timers/Timer.ts:72

## Methods

### destroy

▸ **destroy**(): `void`

Handle the destruction of this timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[destroy](../wiki/Timer#destroy)

#### Defined in

Timers/Timer.ts:366

___

### isPaused

▸ **isPaused**(): `boolean`

Test if this Timer is currently pause

#### Returns

`boolean`

#### Inherited from

[Timer](../wiki/Timer).[isPaused](../wiki/Timer#ispaused)

#### Defined in

Timers/Timer.ts:292

___

### listenToResponse

▸ `Private` **listenToResponse**(...`args`): `void`

Handles listening to responses from callbacks to see if this ScaledTimer
  should change it's timing interval

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[Timers/ScaledTimer.ts:66](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L66)

___

### loop

▸ `Protected` **loop**(): `void`

Handle the looping/countdown calculation of this timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[loop](../wiki/Timer#loop)

#### Defined in

Timers/Timer.ts:299

___

### pause

▸ **pause**(): `void`

Pause this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[pause](../wiki/Timer#pause)

#### Defined in

Timers/Timer.ts:265

___

### restart

▸ **restart**(): `void`

Restart this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[restart](../wiki/Timer#restart)

#### Defined in

Timers/Timer.ts:257

___

### resume

▸ **resume**(): `void`

Resume this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[resume](../wiki/Timer#resume)

#### Defined in

Timers/Timer.ts:276

___

### runLoop

▸ `Protected` **runLoop**(): `void`

Handle the looping of this timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[runLoop](../wiki/Timer#runloop)

#### Defined in

Timers/Timer.ts:348

___

### start

▸ **start**(): `void`

Start this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[start](../wiki/Timer#start)

#### Defined in

Timers/Timer.ts:237

___

### stop

▸ **stop**(): `void`

Stop this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[stop](../wiki/Timer#stop)

#### Defined in

Timers/Timer.ts:247

___

### unpause

▸ **unpause**(): `void`

Resume this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[unpause](../wiki/Timer#unpause)

#### Defined in

Timers/Timer.ts:284

___

### updateCurrentTimeScaler

▸ `Private` **updateCurrentTimeScaler**(): [`ScaledTime`](../wiki/ScaledTime)

Handles finding the correct ScaledTime for the current fail rate

#### Returns

[`ScaledTime`](../wiki/ScaledTime)

#### Defined in

[Timers/ScaledTimer.ts:89](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7ca3a3b/Code/src/Timers/ScaledTimer.ts#L89)
