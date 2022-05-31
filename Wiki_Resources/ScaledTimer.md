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
- [\_failCount](../wiki/ScaledTimer#_failcount)
- [\_lastCompletion](../wiki/ScaledTimer#_lastcompletion)
- [\_lastTickTime](../wiki/ScaledTimer#_lastticktime)
- [\_name](../wiki/ScaledTimer#_name)
- [\_offsetType](../wiki/ScaledTimer#_offsettype)
- [\_pausedAt](../wiki/ScaledTimer#_pausedat)
- [\_running](../wiki/ScaledTimer#_running)
- [\_scaledEvents](../wiki/ScaledTimer#_scaledevents)
- [\_startTime](../wiki/ScaledTimer#_starttime)
- [\_ticksElapsed](../wiki/ScaledTimer#_tickselapsed)
- [\_ticksRemaining](../wiki/ScaledTimer#_ticksremaining)
- [\_timeScalers](../wiki/ScaledTimer#_timescalers)
- [\_timeout](../wiki/ScaledTimer#_timeout)
- [\_timerID](../wiki/ScaledTimer#_timerid)
- [\_timingInterval](../wiki/ScaledTimer#_timinginterval)

### Accessors

- [currentTimingInterval](../wiki/ScaledTimer#currenttiminginterval)
- [events](../wiki/ScaledTimer#events)
- [failCount](../wiki/ScaledTimer#failcount)
- [lastCompletion](../wiki/ScaledTimer#lastcompletion)
- [lastTickTime](../wiki/ScaledTimer#lastticktime)
- [name](../wiki/ScaledTimer#name)
- [offsetType](../wiki/ScaledTimer#offsettype)
- [pausedAt](../wiki/ScaledTimer#pausedat)
- [running](../wiki/ScaledTimer#running)
- [startTime](../wiki/ScaledTimer#starttime)
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
- [scheduleLoop](../wiki/ScaledTimer#scheduleloop)
- [start](../wiki/ScaledTimer#start)
- [stop](../wiki/ScaledTimer#stop)
- [toString](../wiki/ScaledTimer#tostring)
- [unpause](../wiki/ScaledTimer#unpause)
- [updateCurrentTimeScaler](../wiki/ScaledTimer#updatecurrenttimescaler)
- [toString](../wiki/ScaledTimer#tostring)

## Constructors

### constructor

• **new ScaledTimer**(`name`, `timeScalers`, `callbacks?`, `startOnCreation?`, `timerRunTime?`, `offsetType?`)

Create a RealtimeTimer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the timer |
| `timeScalers` | [`ScaledTime`](../wiki/ScaledTime)[] | `undefined` | An array of ScaledTimes that control this ScaledTimer's timing interval |
| `callbacks` | `undefined` \| `Function` \| `Function`[] | `undefined` | The callback/s listening to this timer |
| `startOnCreation` | `boolean` | `true` | Determines if this timer should start running after creation |
| `timerRunTime` | `number` | `Number.MAX_SAFE_INTEGER` | The total time for this timer to run |
| `offsetType` | [`TimerOffsetType`](../wiki/TimerOffsetType) | `TimerOffsetType.NoOffset` | Determines if a timer should apply an offset to loop timing to correct browser time discrepencies and skip offsets if they are too large |

#### Overrides

[Timer](../wiki/Timer).[constructor](../wiki/Timer#constructor)

#### Defined in

[Timers/ScaledTimer.ts:52](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L52)

## Properties

### \_currentTimingInterval

• `Protected` **\_currentTimingInterval**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_currentTimingInterval](../wiki/Timer#_currenttiminginterval)

#### Defined in

Timers/Timer.ts:78

___

### \_failCount

• `Private` **\_failCount**: `number` = `0`

#### Defined in

[Timers/ScaledTimer.ts:18](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L18)

___

### \_lastCompletion

• `Protected` **\_lastCompletion**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_lastCompletion](../wiki/Timer#_lastcompletion)

#### Defined in

Timers/Timer.ts:133

___

### \_lastTickTime

• `Protected` **\_lastTickTime**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_lastTickTime](../wiki/Timer#_lastticktime)

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

### \_offsetType

• `Protected` **\_offsetType**: [`TimerOffsetType`](../wiki/TimerOffsetType) = `TimerOffsetType.NoOffset`

#### Inherited from

[Timer](../wiki/Timer).[_offsetType](../wiki/Timer#_offsettype)

#### Defined in

Timers/Timer.ts:144

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

[Timers/ScaledTimer.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L12)

___

### \_startTime

• `Protected` **\_startTime**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_startTime](../wiki/Timer#_starttime)

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

• `Private` **\_timeScalers**: [`ScaledTime`](../wiki/ScaledTime)[] = `[]`

#### Defined in

[Timers/ScaledTimer.ts:29](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L29)

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

### events

• `get` **events**(): [`PubSub`](../wiki/PubSub)

#### Returns

[`PubSub`](../wiki/PubSub)

#### Overrides

Timer.events

#### Defined in

[Timers/ScaledTimer.ts:13](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L13)

___

### failCount

• `get` **failCount**(): `number`

#### Returns

`number`

#### Defined in

[Timers/ScaledTimer.ts:19](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L19)

• `set` **failCount**(`failCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failCount` | `number` |

#### Returns

`void`

#### Defined in

[Timers/ScaledTimer.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L23)

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

### lastTickTime

• `get` **lastTickTime**(): `number`

#### Returns

`number`

#### Inherited from

Timer.lastTickTime

#### Defined in

Timers/Timer.ts:90

• `set` **lastTickTime**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

Timer.lastTickTime

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

### offsetType

• `get` **offsetType**(): [`TimerOffsetType`](../wiki/TimerOffsetType)

#### Returns

[`TimerOffsetType`](../wiki/TimerOffsetType)

#### Inherited from

Timer.offsetType

#### Defined in

Timers/Timer.ts:145

• `set` **offsetType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TimerOffsetType`](../wiki/TimerOffsetType) |

#### Returns

`void`

#### Inherited from

Timer.offsetType

#### Defined in

Timers/Timer.ts:149

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

### startTime

• `get` **startTime**(): `number`

#### Returns

`number`

#### Inherited from

Timer.startTime

#### Defined in

Timers/Timer.ts:57

• `set` **startTime**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Inherited from

Timer.startTime

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

[Timers/ScaledTimer.ts:30](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L30)

• `set` **timeScalers**(`timeScalers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeScalers` | [`ScaledTime`](../wiki/ScaledTime) \| [`ScaledTime`](../wiki/ScaledTime)[] |

#### Returns

`void`

#### Defined in

[Timers/ScaledTimer.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L34)

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

Timers/Timer.ts:335

___

### isPaused

▸ **isPaused**(): `boolean`

Test if this Timer is currently pause

#### Returns

`boolean`

#### Inherited from

[Timer](../wiki/Timer).[isPaused](../wiki/Timer#ispaused)

#### Defined in

Timers/Timer.ts:269

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

[Timers/ScaledTimer.ts:82](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L82)

___

### loop

▸ `Protected` **loop**(): `void`

Handle the looping/countdown calculation of this timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[loop](../wiki/Timer#loop)

#### Defined in

Timers/Timer.ts:276

___

### pause

▸ **pause**(): `void`

Pause this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[pause](../wiki/Timer#pause)

#### Defined in

Timers/Timer.ts:245

___

### restart

▸ **restart**(): `void`

Restart this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[restart](../wiki/Timer#restart)

#### Defined in

Timers/Timer.ts:237

___

### resume

▸ **resume**(): `void`

Resume this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[resume](../wiki/Timer#resume)

#### Defined in

Timers/Timer.ts:255

___

### scheduleLoop

▸ `Protected` **scheduleLoop**(): `void`

Handle the looping of this timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[scheduleLoop](../wiki/Timer#scheduleloop)

#### Defined in

Timers/Timer.ts:318

___

### start

▸ **start**(): `void`

Start this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[start](../wiki/Timer#start)

#### Defined in

Timers/Timer.ts:217

___

### stop

▸ **stop**(): `void`

Stop this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[stop](../wiki/Timer#stop)

#### Defined in

Timers/Timer.ts:227

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Overrides

[Timer](../wiki/Timer).[toString](../wiki/Timer#tostring)

#### Defined in

[Timers/ScaledTimer.ts:67](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L67)

___

### unpause

▸ **unpause**(): `void`

Resume this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[unpause](../wiki/Timer#unpause)

#### Defined in

Timers/Timer.ts:262

___

### updateCurrentTimeScaler

▸ `Private` **updateCurrentTimeScaler**(): [`ScaledTime`](../wiki/ScaledTime)

Handles finding the correct ScaledTime for the current fail rate

#### Returns

[`ScaledTime`](../wiki/ScaledTime)

#### Defined in

[Timers/ScaledTimer.ts:105](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L105)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Overrides

[Timer](../wiki/Timer).[toString](../wiki/Timer#tostring)

#### Defined in

[Timers/ScaledTimer.ts:74](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Timers/ScaledTimer.ts#L74)
