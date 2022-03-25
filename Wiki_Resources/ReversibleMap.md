# Class: ReversibleMap<Key, Value\>

Class that handles key to value Map with reversible search

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Table of contents

### Constructors

- [constructor](../wiki/ReversibleMap#constructor)

### Properties

- [\_\_map\_\_](../wiki/ReversibleMap#__map__)
- [\_\_reverseMap\_\_](../wiki/ReversibleMap#__reversemap__)

### Methods

- [clear](../wiki/ReversibleMap#clear)
- [deleteKey](../wiki/ReversibleMap#deletekey)
- [deleteValue](../wiki/ReversibleMap#deletevalue)
- [getKey](../wiki/ReversibleMap#getkey)
- [getValue](../wiki/ReversibleMap#getvalue)
- [hasKey](../wiki/ReversibleMap#haskey)
- [hasValue](../wiki/ReversibleMap#hasvalue)
- [setKey](../wiki/ReversibleMap#setkey)

## Constructors

### constructor

• **new ReversibleMap**<`Key`, `Value`\>(`key?`, `value?`)

Create a reversible map between Keys and Values

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

[Utilities/ReversibleMap.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L15)

## Properties

### \_\_map\_\_

• `Private` **\_\_map\_\_**: `Map`<`Key`, `Value`\>

#### Defined in

[Utilities/ReversibleMap.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L5)

___

### \_\_reverseMap\_\_

• `Private` **\_\_reverseMap\_\_**: `Map`<`Value`, `Key`\>

Store all inverse references to values to allow searching and Maps the values to void for O(1) checking

#### Defined in

[Utilities/ReversibleMap.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L8)

## Methods

### clear

▸ **clear**(): `void`

Remove all keys and values

#### Returns

`void`

#### Defined in

[Utilities/ReversibleMap.ts:101](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L101)

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

[Utilities/ReversibleMap.ts:74](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L74)

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

[Utilities/ReversibleMap.ts:88](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L88)

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

[Utilities/ReversibleMap.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L34)

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

[Utilities/ReversibleMap.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L26)

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

[Utilities/ReversibleMap.ts:42](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L42)

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

[Utilities/ReversibleMap.ts:50](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L50)

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

[Utilities/ReversibleMap.ts:59](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/84e0bbd/Code/src/Utilities/ReversibleMap.ts#L59)
