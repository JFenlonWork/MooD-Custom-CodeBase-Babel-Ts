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

Events/Event.ts:39

## Properties

### \_callback

• `Private` **\_callback**: `Callbacks`<`Function`\>

#### Defined in

Events/Event.ts:20

___

### \_name

• `Private` **\_name**: `string` = `""`

#### Defined in

Events/Event.ts:10

___

### \_subscribers

• `Protected` **\_subscribers**: `Map`<`Function`, `Callbacks`<`Function`\>\>

#### Defined in

Events/Event.ts:30

## Accessors

### callback

• `get` **callback**(): `Callbacks`<`Function`\>

#### Returns

`Callbacks`<`Function`\>

#### Defined in

Events/Event.ts:21

• `set` **callback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callbacks`<`Function`\> |

#### Returns

`void`

#### Defined in

Events/Event.ts:25

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

Events/Event.ts:11

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

Events/Event.ts:15

___

### subscribers

• `get` **subscribers**(): `Map`<`Function`, `Callbacks`<`Function`\>\>

#### Returns

`Map`<`Function`, `Callbacks`<`Function`\>\>

#### Defined in

Events/Event.ts:31

## Methods

### clear

▸ **clear**(): `boolean`

Handle clearing this event

#### Returns

`boolean`

#### Defined in

Events/Event.ts:100

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

Events/Event.ts:51

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

Events/Event.ts:72

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

Events/Event.ts:86
