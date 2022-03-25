# Class: ReversableMap<Key, Value\>

Class that handles key to value Map with reversable search

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Table of contents

### Constructors

- [constructor](../wiki/ReversableMap#constructor)

### Properties

- [\_\_map\_\_](../wiki/ReversableMap#__map__)
- [\_\_reverseMap\_\_](../wiki/ReversableMap#__reversemap__)

### Methods

- [clear](../wiki/ReversableMap#clear)
- [deleteKey](../wiki/ReversableMap#deletekey)
- [deleteValue](../wiki/ReversableMap#deletevalue)
- [getKey](../wiki/ReversableMap#getkey)
- [getValue](../wiki/ReversableMap#getvalue)
- [hasKey](../wiki/ReversableMap#haskey)
- [hasValue](../wiki/ReversableMap#hasvalue)
- [setKey](../wiki/ReversableMap#setkey)

## Constructors

### constructor

• **new ReversableMap**<`Key`, `Value`\>(`key?`, `value?`)

Create a reversable map between Keys and Values

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `Key` | - |
| `value?` | `Value` | The value to link this key |

#### Defined in

Utilities/ReversableMap.ts:15

## Properties

### \_\_map\_\_

• `Private` **\_\_map\_\_**: `Map`<`Key`, `Value`\>

#### Defined in

Utilities/ReversableMap.ts:5

___

### \_\_reverseMap\_\_

• `Private` **\_\_reverseMap\_\_**: `Map`<`Value`, `Key`\>

Store all inverse references to values to allow searching and Maps the values to void for O(1) checking

#### Defined in

Utilities/ReversableMap.ts:8

## Methods

### clear

▸ **clear**(): `void`

Remove all keys and values

#### Returns

`void`

#### Defined in

Utilities/ReversableMap.ts:101

___

### deleteKey

▸ **deleteKey**(`key`): `boolean`

Remove a key from this map

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`boolean`

#### Defined in

Utilities/ReversableMap.ts:74

___

### deleteValue

▸ **deleteValue**(`value`): `boolean`

Remove a Value from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The Value to remove |

#### Returns

`boolean`

#### Defined in

Utilities/ReversableMap.ts:88

___

### getKey

▸ **getKey**(`value`): `undefined` \| `Key`

Return Key associated with a Value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Value` |

#### Returns

`undefined` \| `Key`

#### Defined in

Utilities/ReversableMap.ts:34

___

### getValue

▸ **getValue**(`key`): `undefined` \| `Value`

Return Value associated with a key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The key to return the value for |

#### Returns

`undefined` \| `Value`

#### Defined in

Utilities/ReversableMap.ts:26

___

### hasKey

▸ **hasKey**(`key`): `boolean`

Test if a Value exists for a given Key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`boolean`

#### Defined in

Utilities/ReversableMap.ts:42

___

### hasValue

▸ **hasValue**(`value`): `boolean`

Test if a Key exists for a given Value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The Value to check if a Key exists |

#### Returns

`boolean`

#### Defined in

Utilities/ReversableMap.ts:50

___

### setKey

▸ **setKey**(`key`, `value`): `boolean`

Create a map between a Key and a Value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | - |
| `value` | `Value` | The Value to link to this Key |

#### Returns

`boolean`

#### Defined in

Utilities/ReversableMap.ts:59
