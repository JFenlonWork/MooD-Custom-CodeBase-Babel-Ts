# Class: Timer

Class representing a Timer that implements custom controls ontop of setTimeout to create a configurable timer.

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

[TImers/Timer.ts:204](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L204)

## Properties

### \_currentTimingInterval

• `Protected` **\_currentTimingInterval**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:78](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L78)

___

### \_enableOffset

• `Protected` **\_enableOffset**: `boolean` = `false`

#### Defined in

[TImers/Timer.ts:146](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L146)

___

### \_events

• `Private` **\_events**: [`PubSub`](../wiki/PubSub)

#### Defined in

[TImers/Timer.ts:190](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L190)

___

### \_intervalOffset

• `Protected` **\_intervalOffset**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:157](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L157)

___

### \_lastCompletion

• `Protected` **\_lastCompletion**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:133](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L133)

___

### \_lastTickDate

• `Protected` **\_lastTickDate**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:89](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L89)

___

### \_name

• **\_name**: `string` = `""`

#### Defined in

[TImers/Timer.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L10)

___

### \_pausedAt

• `Protected` **\_pausedAt**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:122](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L122)

___

### \_running

• `Protected` **\_running**: `boolean` = `false`

#### Defined in

[TImers/Timer.ts:21](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L21)

___

### \_skipOffset

• `Protected` **\_skipOffset**: [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) = `TimerSkipOffsetType.NoSkip`

#### Defined in

[TImers/Timer.ts:168](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L168)

___

### \_skipOffsetCalculation

• `Protected` **\_skipOffsetCalculation**: `boolean` = `false`

#### Defined in

[TImers/Timer.ts:179](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L179)

___

### \_startDate

• `Protected` **\_startDate**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:56](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L56)

___

### \_ticksElapsed

• `Protected` **\_ticksElapsed**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:111](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L111)

___

### \_ticksRemaining

• `Protected` **\_ticksRemaining**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:100](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L100)

___

### \_timeout

• `Protected` **\_timeout**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:33](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L33)

___

### \_timerID

• **\_timerID**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:44](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L44)

___

### \_timingInterval

• `Protected` **\_timingInterval**: `number` = `-1`

#### Defined in

[TImers/Timer.ts:67](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L67)

## Accessors

### currentTimingInterval

• `get` **currentTimingInterval**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:79](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L79)

• `set` **currentTimingInterval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:83](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L83)

___

### enableOffset

• `get` **enableOffset**(): `boolean`

#### Returns

`boolean`

#### Defined in

[TImers/Timer.ts:147](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L147)

• `set` **enableOffset**(`enabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:151](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L151)

___

### events

• `get` **events**(): [`PubSub`](../wiki/PubSub)

#### Returns

[`PubSub`](../wiki/PubSub)

#### Defined in

[TImers/Timer.ts:191](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L191)

___

### intervalOffset

• `get` **intervalOffset**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:158](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L158)

• `set` **intervalOffset**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:162](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L162)

___

### lastCompletion

• `get` **lastCompletion**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:134](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L134)

• `set` **lastCompletion**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:138](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L138)

___

### lastTickDate

• `get` **lastTickDate**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:90](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L90)

• `set` **lastTickDate**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:94](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L94)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[TImers/Timer.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L11)

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L15)

___

### pausedAt

• `get` **pausedAt**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:123](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L123)

• `set` **pausedAt**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:127](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L127)

___

### running

• `get` **running**(): `boolean`

#### Returns

`boolean`

#### Defined in

[TImers/Timer.ts:22](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L22)

• `set` **running**(`isRunning`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRunning` | `boolean` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L26)

___

### skipOffset

• `get` **skipOffset**(): [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType)

#### Returns

[`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType)

#### Defined in

[TImers/Timer.ts:169](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L169)

• `set` **skipOffset**(`skipType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipType` | [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:173](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L173)

___

### skipOffsetCalculation

• `get` **skipOffsetCalculation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[TImers/Timer.ts:180](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L180)

• `set` **skipOffsetCalculation**(`skipOffsetCalculation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipOffsetCalculation` | `boolean` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:184](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L184)

___

### startDate

• `get` **startDate**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L57)

• `set` **startDate**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:61](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L61)

___

### ticksElapsed

• `get` **ticksElapsed**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:112](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L112)

• `set` **ticksElapsed**(`ticksElapsed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticksElapsed` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:116](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L116)

___

### ticksRemaining

• `get` **ticksRemaining**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:101](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L101)

• `set` **ticksRemaining**(`ticksRemaining`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticksRemaining` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:105](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L105)

___

### timeout

• `get` **timeout**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L34)

• `set` **timeout**(`timeout`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:38](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L38)

___

### timerID

• `get` **timerID**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:45](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L45)

• `set` **timerID**(`timerID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timerID` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:49](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L49)

___

### timingInterval

• `get` **timingInterval**(): `number`

#### Returns

`number`

#### Defined in

[TImers/Timer.ts:68](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L68)

• `set` **timingInterval**(`interval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:72](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L72)

## Methods

### destroy

▸ **destroy**(): `void`

Handle the destruction of this timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:366](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L366)

___

### isPaused

▸ **isPaused**(): `boolean`

Test if this Timer is currently pause

#### Returns

`boolean`

#### Defined in

[TImers/Timer.ts:292](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L292)

___

### loop

▸ `Protected` **loop**(): `void`

Handle the looping/countdown calculation of this timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:299](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L299)

___

### pause

▸ **pause**(): `void`

Pause this Timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:265](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L265)

___

### restart

▸ **restart**(): `void`

Restart this Timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:257](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L257)

___

### resume

▸ **resume**(): `void`

Resume this Timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:276](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L276)

___

### runLoop

▸ `Protected` **runLoop**(): `void`

Handle the looping of this timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:348](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L348)

___

### start

▸ **start**(): `void`

Start this Timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:237](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L237)

___

### stop

▸ **stop**(): `void`

Stop this Timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:247](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L247)

___

### unpause

▸ **unpause**(): `void`

Resume this Timer

#### Returns

`void`

#### Defined in

[TImers/Timer.ts:284](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/TImers/Timer.ts#L284)
