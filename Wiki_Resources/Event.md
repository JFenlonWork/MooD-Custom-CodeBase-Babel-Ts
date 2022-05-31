# Class: Event

Class that handles any event driven data for event managers using:

**`link`** https://api.jquery.com/jquery.callbacks/

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
- [toString](../wiki/Event#tostring)
- [unsubscribe](../wiki/Event#unsubscribe)
- [toString](../wiki/Event#tostring)

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

[Events/Event.ts:38](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L38)

## Properties

### \_callback

• `Private` **\_callback**: `Callbacks`<`Function`\>

#### Defined in

[Events/Event.ts:19](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L19)

___

### \_name

• `Private` **\_name**: `string` = `""`

#### Defined in

[Events/Event.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L9)

___

### \_subscribers

• `Protected` **\_subscribers**: `Map`<`Function`, `Callbacks`<`Function`\>\>

#### Defined in

[Events/Event.ts:29](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L29)

## Accessors

### callback

• `get` **callback**(): `Callbacks`<`Function`\>

#### Returns

`Callbacks`<`Function`\>

#### Defined in

[Events/Event.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L20)

• `set` **callback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callbacks`<`Function`\> |

#### Returns

`void`

#### Defined in

[Events/Event.ts:24](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L24)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Events/Event.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L10)

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[Events/Event.ts:14](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L14)

___

### subscribers

• `get` **subscribers**(): `Map`<`Function`, `Callbacks`<`Function`\>\>

#### Returns

`Map`<`Function`, `Callbacks`<`Function`\>\>

#### Defined in

[Events/Event.ts:30](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L30)

## Methods

### clear

▸ **clear**(): `boolean`

Handle clearing this event

#### Returns

`boolean`

#### Defined in

[Events/Event.ts:113](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L113)

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

[Events/Event.ts:64](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L64)

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

[Events/Event.ts:85](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L85)

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Defined in

[Events/Event.ts:49](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L49)

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

[Events/Event.ts:99](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L99)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Defined in

[Events/Event.ts:56](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Events/Event.ts#L56)
