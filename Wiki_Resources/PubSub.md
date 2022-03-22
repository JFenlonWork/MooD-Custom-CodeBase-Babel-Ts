# Class: PubSub

Class that handles simple subscription/publish event manager.

## Table of contents

### Constructors

- [constructor](../wiki/PubSub#constructor)

### Properties

- [\_events](../wiki/PubSub#_events)

### Methods

- [clear](../wiki/PubSub#clear)
- [clearEvent](../wiki/PubSub#clearevent)
- [publish](../wiki/PubSub#publish)
- [subscribe](../wiki/PubSub#subscribe)
- [unsubscribe](../wiki/PubSub#unsubscribe)

## Constructors

### constructor

• **new PubSub**()

## Properties

### \_events

• `Protected` **\_events**: `Map`<`String`, `Callbacks`<`Function`\>\>

#### Defined in

[Events/PubSub.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Events/PubSub.ts#L6)

## Methods

### clear

▸ **clear**(): `boolean`

Handle clearing all events

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:81](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Events/PubSub.ts#L81)

___

### clearEvent

▸ **clearEvent**(`event`): `boolean`

Handle clearing events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event to clear all subscribers from This will need improving to handle event unsubscribing when clearing |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:69](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Events/PubSub.ts#L69)

___

### publish

▸ **publish**(`event`, ...`args`): `boolean`

Handle publishing events

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:55](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Events/PubSub.ts#L55)

___

### subscribe

▸ **subscribe**(`event`, `callback`, ...`args`): `boolean`

Handle subscribing to events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event to subscribe to |
| `callback` | `Function` | The callback to add to this event |
| `...args` | `any`[] | Any extra arguments that will be sent to EventSubscribed event |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:14](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Events/PubSub.ts#L14)

___

### unsubscribe

▸ **unsubscribe**(`event`, `callback`, ...`args`): `boolean`

Handle unsubscribing from events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event to unsubscribe from |
| `callback` | `Function` | The callback to remove to this event |
| `...args` | `any`[] | Any extra arguments that will be sent to EventUnsubscribed event |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:39](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Events/PubSub.ts#L39)
