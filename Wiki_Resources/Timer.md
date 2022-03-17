# Class: Timer

Class representing a Timer that implements custom controls ontop of setTimeout to create a configurable timer.

## Table of contents

### Constructors

- [constructor](../wiki/Timer#constructor)

### Properties

- [currentTimingInterval](../wiki/Timer#currenttiminginterval)
- [enableOffset](../wiki/Timer#enableoffset)
- [intervalOffset](../wiki/Timer#intervaloffset)
- [lastCompletion](../wiki/Timer#lastcompletion)
- [lastTickDate](../wiki/Timer#lasttickdate)
- [name](../wiki/Timer#name)
- [pausedAt](../wiki/Timer#pausedat)
- [running](../wiki/Timer#running)
- [skipOffset](../wiki/Timer#skipoffset)
- [startDate](../wiki/Timer#startdate)
- [ticksElapsed](../wiki/Timer#tickselapsed)
- [ticksRemaining](../wiki/Timer#ticksremaining)
- [timeout](../wiki/Timer#timeout)
- [timerID](../wiki/Timer#timerid)
- [timingInterval](../wiki/Timer#timinginterval)

### Methods

- [isPaused](../wiki/Timer#ispaused)
- [loop](../wiki/Timer#loop)
- [start](../wiki/Timer#start)

## Constructors

### constructor

• **new Timer**(`name`, `timingInterval`, `startOnCreation?`, `timerRunTime?`, `enableOffset?`, `skipOffset?`)

Create a timer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the timer |
| `timingInterval` | `number` | `undefined` | - |
| `startOnCreation` | `boolean` | `true` | Determines if this timer should start running after creation |
| `timerRunTime` | `number` | `Number.MAX_SAFE_INTEGER` | The total time for this timer to run |
| `enableOffset` | `boolean` | `false` | Determines if a timers loop should change based on browser time discrepancies |
| `skipOffset` | [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) | `TimerSkipOffsetType.NoSkip` | Determines if a timers should skip offsets if they are too large |

#### Defined in

TImer/Timer.ts:69

## Properties

### currentTimingInterval

• `Protected` **currentTimingInterval**: `number` = `-1`

#### Defined in

TImer/Timer.ts:30

___

### enableOffset

• `Protected` **enableOffset**: `boolean` = `false`

#### Defined in

TImer/Timer.ts:50

___

### intervalOffset

• `Protected` **intervalOffset**: `number` = `-1`

#### Defined in

TImer/Timer.ts:53

___

### lastCompletion

• `Protected` **lastCompletion**: `number` = `-1`

#### Defined in

TImer/Timer.ts:45

___

### lastTickDate

• `Protected` **lastTickDate**: `number` = `-1`

#### Defined in

TImer/Timer.ts:33

___

### name

• **name**: `string` = `""`

#### Defined in

TImer/Timer.ts:9

___

### pausedAt

• `Protected` **pausedAt**: `number` = `-1`

#### Defined in

TImer/Timer.ts:42

___

### running

• `Protected` **running**: `boolean` = `false`

#### Defined in

TImer/Timer.ts:12

___

### skipOffset

• `Protected` **skipOffset**: [`TimerSkipOffsetType`](../wiki/TimerSkipOffsetType) = `TimerSkipOffsetType.NoSkip`

#### Defined in

TImer/Timer.ts:56

___

### startDate

• `Protected` **startDate**: `number` = `-1`

#### Defined in

TImer/Timer.ts:24

___

### ticksElapsed

• `Protected` **ticksElapsed**: `number` = `-1`

#### Defined in

TImer/Timer.ts:39

___

### ticksRemaining

• `Protected` **ticksRemaining**: `number` = `-1`

#### Defined in

TImer/Timer.ts:36

___

### timeout

• `Protected` **timeout**: `number` = `-1`

#### Defined in

TImer/Timer.ts:16

___

### timerID

• **timerID**: `number` = `-1`

#### Defined in

TImer/Timer.ts:19

___

### timingInterval

• `Protected` **timingInterval**: `number` = `-1`

#### Defined in

TImer/Timer.ts:27

## Methods

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Defined in

TImer/Timer.ts:99

___

### loop

▸ `Protected` **loop**(): `void`

Handle the looping/countdown of this timer

#### Returns

`void`

#### Defined in

TImer/Timer.ts:106

___

### start

▸ **start**(): `void`

Start this timer

#### Returns

`void`

#### Defined in

TImer/Timer.ts:92
