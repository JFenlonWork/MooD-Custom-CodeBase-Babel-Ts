# Class: PubSub

Class that handles simple subscription/publish event manager.

## Table of contents

### Constructors

- [constructor](../wiki/PubSub#constructor)

### Properties

- [\_events](../wiki/PubSub#_events)
- [\_subscribers](../wiki/PubSub#_subscribers)

### Accessors

- [events](../wiki/PubSub#events)
- [subscribers](../wiki/PubSub#subscribers)

### Methods

- [clear](../wiki/PubSub#clear)
- [clearEvent](../wiki/PubSub#clearevent)
- [publish](../wiki/PubSub#publish)
- [setupEvent](../wiki/PubSub#setupevent)
- [subscribe](../wiki/PubSub#subscribe)
- [unsubscribe](../wiki/PubSub#unsubscribe)

## Constructors

### constructor

• **new PubSub**()

## Properties

### \_events

• `Private` **\_events**: `Map`<`String`, [`Event`](../wiki/Event)\>

#### Defined in

[Events/PubSub.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L9)

___

### \_subscribers

• `Protected` **\_subscribers**: [`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<[`Event`](../wiki/Event), `Function`\>

#### Defined in

[Events/PubSub.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L15)

## Accessors

### events

• `get` **events**(): `Map`<`String`, [`Event`](../wiki/Event)\>

#### Returns

`Map`<`String`, [`Event`](../wiki/Event)\>

#### Defined in

[Events/PubSub.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L10)

___

### subscribers

• `get` **subscribers**(): [`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<[`Event`](../wiki/Event), `Function`\>

#### Returns

[`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<[`Event`](../wiki/Event), `Function`\>

#### Defined in

[Events/PubSub.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L16)

## Methods

### clear

▸ **clear**(...`args`): `boolean`

Handle clearing all events

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:146](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L146)

___

### clearEvent

▸ **clearEvent**(`event`, ...`args`): `boolean`

Handle clearing specific event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event to clear all subscribers from This will need improving to handle event unsubscribing when clearing |
| `...args` | `any`[] | - |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:131](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L131)

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

[Events/PubSub.ts:113](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L113)

___

### setupEvent

▸ **setupEvent**(`event`, `settings?`, ...`args`): `boolean`

Handle modifiy/creating event with specific settings

**`link`** https://api.jquery.com/jquery.callbacks/

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `event` | `string` | `undefined` | The event to subscribe to |
| `settings` | `string` | `""` | The JQuery.Callbacks settings to apply to this event |
| `...args` | `any`[] | `undefined` | Any extra arguments that will be sent to EventSetup event |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L27)

___

### subscribe

▸ **subscribe**(`event`, `callbacks`, ...`args`): `boolean`

Handle subscribing to events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event to subscribe to |
| `callbacks` | `Function` \| `Function`[] | The callbacks to add to this event |
| `...args` | `any`[] | Any extra arguments that will be sent to EventSubscribed event |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L51)

___

### unsubscribe

▸ **unsubscribe**(`event`, `callbacks`, ...`args`): `boolean`

Handle unsubscribing from events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event to unsubscribe from |
| `callbacks` | `Function` \| `Function`[] | The callbacks to remove from this event |
| `...args` | `any`[] | Any extra arguments that will be sent to EventUnsubscribed event |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:86](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Events/PubSub.ts#L86)
