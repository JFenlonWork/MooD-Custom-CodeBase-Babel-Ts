# Class: PubSub

Class that handles simple subscription/publish event manager.

## Table of contents

### Constructors

- [constructor](../wiki/PubSub#constructor)

### Properties

- [\_events](../wiki/PubSub#_events)

### Methods

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

[Events/PubSub.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Events/PubSub.ts#L6)

## Methods

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

[Events/PubSub.ts:45](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Events/PubSub.ts#L45)

___

### subscribe

▸ **subscribe**(`event`, `callback`): `boolean`

Handle subscribing to events

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Events/PubSub.ts#L11)

___

### unsubscribe

▸ **unsubscribe**(`event`, `callback`): `boolean`

Handle unsubscribing from events

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |

#### Returns

`boolean`

#### Defined in

[Events/PubSub.ts:31](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Events/PubSub.ts#L31)
