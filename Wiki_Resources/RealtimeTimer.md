# Class: RealtimeTimer

Class representing a Realtime Timer that implements
 custom controls ontop of setTimeout to create a timer that activates as fast as possible.

## Hierarchy

- [`Timer`](../wiki/Timer)

  ↳ **`RealtimeTimer`**

## Table of contents

### Constructors

- [constructor](../wiki/RealtimeTimer#constructor)

### Properties

- [\_currentTimingInterval](../wiki/RealtimeTimer#_currenttiminginterval)
- [\_destroyOnStop](../wiki/RealtimeTimer#_destroyonstop)
- [\_enableOffset](../wiki/RealtimeTimer#_enableoffset)
- [\_intervalOffset](../wiki/RealtimeTimer#_intervaloffset)
- [\_lastCompletion](../wiki/RealtimeTimer#_lastcompletion)
- [\_lastTickDate](../wiki/RealtimeTimer#_lasttickdate)
- [\_name](../wiki/RealtimeTimer#_name)
- [\_pausedAt](../wiki/RealtimeTimer#_pausedat)
- [\_realtimeEvents](../wiki/RealtimeTimer#_realtimeevents)
- [\_running](../wiki/RealtimeTimer#_running)
- [\_skipOffset](../wiki/RealtimeTimer#_skipoffset)
- [\_skipOffsetCalculation](../wiki/RealtimeTimer#_skipoffsetcalculation)
- [\_startDate](../wiki/RealtimeTimer#_startdate)
- [\_ticksElapsed](../wiki/RealtimeTimer#_tickselapsed)
- [\_ticksRemaining](../wiki/RealtimeTimer#_ticksremaining)
- [\_timeout](../wiki/RealtimeTimer#_timeout)
- [\_timerID](../wiki/RealtimeTimer#_timerid)
- [\_timingInterval](../wiki/RealtimeTimer#_timinginterval)

### Accessors

- [currentTimingInterval](../wiki/RealtimeTimer#currenttiminginterval)
- [destroyOnStop](../wiki/RealtimeTimer#destroyonstop)
- [enableOffset](../wiki/RealtimeTimer#enableoffset)
- [events](../wiki/RealtimeTimer#events)
- [intervalOffset](../wiki/RealtimeTimer#intervaloffset)
- [lastCompletion](../wiki/RealtimeTimer#lastcompletion)
- [lastTickDate](../wiki/RealtimeTimer#lasttickdate)
- [name](../wiki/RealtimeTimer#name)
- [pausedAt](../wiki/RealtimeTimer#pausedat)
- [running](../wiki/RealtimeTimer#running)
- [skipOffset](../wiki/RealtimeTimer#skipoffset)
- [skipOffsetCalculation](../wiki/RealtimeTimer#skipoffsetcalculation)
- [startDate](../wiki/RealtimeTimer#startdate)
- [ticksElapsed](../wiki/RealtimeTimer#tickselapsed)
- [ticksRemaining](../wiki/RealtimeTimer#ticksremaining)
- [timeout](../wiki/RealtimeTimer#timeout)
- [timerID](../wiki/RealtimeTimer#timerid)
- [timingInterval](../wiki/RealtimeTimer#timinginterval)

### Methods

- [destroy](../wiki/RealtimeTimer#destroy)
- [isPaused](../wiki/RealtimeTimer#ispaused)
- [listenToResponse](../wiki/RealtimeTimer#listentoresponse)
- [loop](../wiki/RealtimeTimer#loop)
- [pause](../wiki/RealtimeTimer#pause)
- [restart](../wiki/RealtimeTimer#restart)
- [resume](../wiki/RealtimeTimer#resume)
- [runLoop](../wiki/RealtimeTimer#runloop)
- [start](../wiki/RealtimeTimer#start)
- [stop](../wiki/RealtimeTimer#stop)
- [unpause](../wiki/RealtimeTimer#unpause)

## Constructors

### constructor

• **new RealtimeTimer**(`name`, `callbacks?`, `startOnCreation?`, `timerRunTime?`, `destroyOnStop?`)

Create a RealtimeTimer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the timer |
| `callbacks` | `Function`[] | `[]` | The callbacks listening to this timer |
| `startOnCreation` | `boolean` | `true` | Determines if this timer should start running after creation |
| `timerRunTime` | `number` | `Number.MAX_SAFE_INTEGER` | The total time for this timer to run |
| `destroyOnStop` | `boolean` | `true` | Determines if a timers should destroy itself once it recieves a single stop command |

#### Overrides

[Timer](../wiki/Timer).[constructor](../wiki/Timer#constructor)

#### Defined in

Timers/RealtimeTimer.ts:36

## Properties

### \_currentTimingInterval

• `Protected` **\_currentTimingInterval**: `number` = `-1`

#### Inherited from

[Timer](../wiki/Timer).[_currentTimingInterval](../wiki/Timer#_currenttiminginterval)

#### Defined in

Timers/Timer.ts:78

___

### \_destroyOnStop

• `Private` **\_destroyOnStop**: `boolean` = `true`

#### Defined in

Timers/RealtimeTimer.ts:17

___

### \_enableOffset

• `Protected` **\_enableOffset**: `boolean` = `false`

#### Inherited from

[Timer](../wiki/Timer).[_enableOffset](../wiki/Timer#_enableoffset)

#### Defined in

Timers/Timer.ts:146

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

### \_realtimeEvents

• `Private` **\_realtimeEvents**: [`PubSub`](../wiki/PubSub)

#### Defined in

Timers/RealtimeTimer.ts:11

___

### \_running

• `Protected` **\_running**: `boolean` = `false`

#### Inherited from

[Timer](../wiki/Timer).[_running](../wiki/Timer#_running)

#### Defined in

Timers/Timer.ts:21

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

### destroyOnStop

• `get` **destroyOnStop**(): `boolean`

#### Returns

`boolean`

#### Defined in

Timers/RealtimeTimer.ts:18

• `set` **destroyOnStop**(`destroyOnStop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destroyOnStop` | `boolean` |

#### Returns

`void`

#### Defined in

Timers/RealtimeTimer.ts:22

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

Timers/RealtimeTimer.ts:12

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

Timers/RealtimeTimer.ts:47

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
