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
- [\_lastCompletion](../wiki/RealtimeTimer#_lastcompletion)
- [\_lastTickTime](../wiki/RealtimeTimer#_lastticktime)
- [\_name](../wiki/RealtimeTimer#_name)
- [\_offsetType](../wiki/RealtimeTimer#_offsettype)
- [\_pausedAt](../wiki/RealtimeTimer#_pausedat)
- [\_realtimeEvents](../wiki/RealtimeTimer#_realtimeevents)
- [\_running](../wiki/RealtimeTimer#_running)
- [\_startTime](../wiki/RealtimeTimer#_starttime)
- [\_ticksElapsed](../wiki/RealtimeTimer#_tickselapsed)
- [\_ticksRemaining](../wiki/RealtimeTimer#_ticksremaining)
- [\_timeout](../wiki/RealtimeTimer#_timeout)
- [\_timerID](../wiki/RealtimeTimer#_timerid)
- [\_timingInterval](../wiki/RealtimeTimer#_timinginterval)

### Accessors

- [currentTimingInterval](../wiki/RealtimeTimer#currenttiminginterval)
- [destroyOnStop](../wiki/RealtimeTimer#destroyonstop)
- [events](../wiki/RealtimeTimer#events)
- [lastCompletion](../wiki/RealtimeTimer#lastcompletion)
- [lastTickTime](../wiki/RealtimeTimer#lastticktime)
- [name](../wiki/RealtimeTimer#name)
- [offsetType](../wiki/RealtimeTimer#offsettype)
- [pausedAt](../wiki/RealtimeTimer#pausedat)
- [running](../wiki/RealtimeTimer#running)
- [startTime](../wiki/RealtimeTimer#starttime)
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
- [scheduleLoop](../wiki/RealtimeTimer#scheduleloop)
- [start](../wiki/RealtimeTimer#start)
- [stop](../wiki/RealtimeTimer#stop)
- [toString](../wiki/RealtimeTimer#tostring)
- [unpause](../wiki/RealtimeTimer#unpause)
- [toString](../wiki/RealtimeTimer#tostring)

## Constructors

### constructor

• **new RealtimeTimer**(`name`, `callbacks?`, `startOnCreation?`, `timerRunTime?`, `destroyOnStop?`)

Create a RealtimeTimer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the timer |
| `callbacks` | `undefined` \| `Function` \| `Function`[] | `undefined` | The callback/s listening to this timer |
| `startOnCreation` | `boolean` | `true` | Determines if this timer should start running after creation |
| `timerRunTime` | `number` | `Number.MAX_SAFE_INTEGER` | The total time for this timer to run |
| `destroyOnStop` | `boolean` | `true` | Determines if a timers should destroy itself once it recieves a single stop command |

#### Overrides

[Timer](../wiki/Timer).[constructor](../wiki/Timer#constructor)

#### Defined in

Timers/RealtimeTimer.ts:35

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

### events

• `get` **events**(): [`PubSub`](../wiki/PubSub)

#### Returns

[`PubSub`](../wiki/PubSub)

#### Overrides

Timer.events

#### Defined in

Timers/RealtimeTimer.ts:12

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

Timers/Timer.ts:334

___

### isPaused

▸ **isPaused**(): `boolean`

Test if this Timer is currently pause

#### Returns

`boolean`

#### Inherited from

[Timer](../wiki/Timer).[isPaused](../wiki/Timer#ispaused)

#### Defined in

Timers/Timer.ts:268

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

Timers/RealtimeTimer.ts:62

___

### loop

▸ `Protected` **loop**(): `void`

Handle the looping/countdown calculation of this timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[loop](../wiki/Timer#loop)

#### Defined in

Timers/Timer.ts:275

___

### pause

▸ **pause**(): `void`

Pause this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[pause](../wiki/Timer#pause)

#### Defined in

Timers/Timer.ts:244

___

### restart

▸ **restart**(): `void`

Restart this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[restart](../wiki/Timer#restart)

#### Defined in

Timers/Timer.ts:236

___

### resume

▸ **resume**(): `void`

Resume this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[resume](../wiki/Timer#resume)

#### Defined in

Timers/Timer.ts:254

___

### scheduleLoop

▸ `Protected` **scheduleLoop**(): `void`

Handle the looping of this timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[scheduleLoop](../wiki/Timer#scheduleloop)

#### Defined in

Timers/Timer.ts:317

___

### start

▸ **start**(): `void`

Start this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[start](../wiki/Timer#start)

#### Defined in

Timers/Timer.ts:216

___

### stop

▸ **stop**(): `void`

Stop this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[stop](../wiki/Timer#stop)

#### Defined in

Timers/Timer.ts:226

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Overrides

[Timer](../wiki/Timer).[toString](../wiki/Timer#tostring)

#### Defined in

Timers/RealtimeTimer.ts:50

___

### unpause

▸ **unpause**(): `void`

Resume this Timer

#### Returns

`void`

#### Inherited from

[Timer](../wiki/Timer).[unpause](../wiki/Timer#unpause)

#### Defined in

Timers/Timer.ts:261

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Overrides

[Timer](../wiki/Timer).[toString](../wiki/Timer#tostring)

#### Defined in

Timers/RealtimeTimer.ts:57
