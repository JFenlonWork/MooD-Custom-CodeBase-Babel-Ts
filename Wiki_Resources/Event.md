# Class: Event

Class that handles any event driven data for event managers.

## Table of contents

### Constructors

- [constructor](../wiki/Event#constructor)

### Properties

- [\_callback](../wiki/Event#_callback)
- [\_name](../wiki/Event#_name)
- [\_subscribers](../wiki/Event#_subscribers)

### Accessors

- [callback](../wiki/Event#callback)
- [name](../wiki/Event#name)
- [subscribers](../wiki/Event#subscribers)

### Methods

- [clear](../wiki/Event#clear)
- [setupEvent](../wiki/Event#setupevent)
- [subscribe](../wiki/Event#subscribe)
- [unsubscribe](../wiki/Event#unsubscribe)

## Constructors

### constructor

• **new Event**(`name`, `callback?`)

Create an Event and store it's name and callback if provided

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | `Callbacks`<`Function`\> |

#### Defined in

[Events/Event.ts:37](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L37)

## Properties

### \_callback

• `Private` **\_callback**: `Callbacks`<`Function`\>

#### Defined in

[Events/Event.ts:18](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L18)

___

### \_name

• `Private` **\_name**: `string` = `""`

#### Defined in

[Events/Event.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L8)

___

### \_subscribers

• `Protected` **\_subscribers**: `Map`<`Function`, `Callbacks`<`Function`\>\>

#### Defined in

[Events/Event.ts:28](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L28)

## Accessors

### callback

• `get` **callback**(): `Callbacks`<`Function`\>

#### Returns

`Callbacks`<`Function`\>

#### Defined in

[Events/Event.ts:19](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L19)

• `set` **callback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callbacks`<`Function`\> |

#### Returns

`void`

#### Defined in

[Events/Event.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L23)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Events/Event.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L9)

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[Events/Event.ts:13](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L13)

___

### subscribers

• `get` **subscribers**(): `Map`<`Function`, `Callbacks`<`Function`\>\>

#### Returns

`Map`<`Function`, `Callbacks`<`Function`\>\>

#### Defined in

[Events/Event.ts:29](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L29)

## Methods

### clear

▸ **clear**(): `boolean`

Handle clearing this event

#### Returns

`boolean`

#### Defined in

[Events/Event.ts:98](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L98)

___

### setupEvent

▸ **setupEvent**(`settings`): `boolean`

Handle setting up this event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `string` | The settings to apply to this JQuery.callbacks |

#### Returns

`boolean`

#### Defined in

[Events/Event.ts:49](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L49)

___

### subscribe

▸ **subscribe**(`subscriber`): `boolean`

Handle subscribing to this event

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriber` | `Function` |

#### Returns

`boolean`

#### Defined in

[Events/Event.ts:70](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L70)

___

### unsubscribe

▸ **unsubscribe**(`subscriber`): `boolean`

Handle unsubscribing to this event

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriber` | `Function` |

#### Returns

`boolean`

#### Defined in

[Events/Event.ts:84](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/9921b29/Code/src/Events/Event.ts#L84)
