# Class: MultiKeyMap<Key, Value\>

Class that handles multiple keys to one value Map

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Table of contents

### Constructors

- [constructor](../wiki/MultiKeyMap#constructor)

### Properties

- [\_\_map\_\_](../wiki/MultiKeyMap#__map__)
- [\_\_reverseMap\_\_](../wiki/MultiKeyMap#__reversemap__)

### Methods

- [clear](../wiki/MultiKeyMap#clear)
- [deleteKey](../wiki/MultiKeyMap#deletekey)
- [deleteKeys](../wiki/MultiKeyMap#deletekeys)
- [deleteValue](../wiki/MultiKeyMap#deletevalue)
- [getKeys](../wiki/MultiKeyMap#getkeys)
- [getKeysArray](../wiki/MultiKeyMap#getkeysarray)
- [getValue](../wiki/MultiKeyMap#getvalue)
- [hasKey](../wiki/MultiKeyMap#haskey)
- [remapKey](../wiki/MultiKeyMap#remapkey)
- [remapValue](../wiki/MultiKeyMap#remapvalue)
- [remapValueFromKey](../wiki/MultiKeyMap#remapvaluefromkey)
- [setKey](../wiki/MultiKeyMap#setkey)
- [setKeys](../wiki/MultiKeyMap#setkeys)

## Constructors

### constructor

• **new MultiKeyMap**<`Key`, `Value`\>(`keys?`, `value?`)

Create a map between multiple keys and a single value

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `keys` | `Key` \| `Key`[] | `[]` | - |
| `value?` | `Value` | `undefined` | The value to link these keys to |

#### Defined in

[Utilities/MultiKeyMap.ts:18](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L18)

## Properties

### \_\_map\_\_

• `Private` **\_\_map\_\_**: `Map`<`Key`, `Value`\>

#### Defined in

[Utilities/MultiKeyMap.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L8)

___

### \_\_reverseMap\_\_

• `Private` **\_\_reverseMap\_\_**: `Map`<`Value`, `Map`<`Key`, `void`\>\>

Store all inverse references to values to allow searching and Maps the values to void for O(1) checking

#### Defined in

[Utilities/MultiKeyMap.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L11)

## Methods

### clear

▸ **clear**(): `void`

Remove all keys and values

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyMap.ts:183](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L183)

___

### deleteKey

▸ **deleteKey**(`key`, `value`): `void`

Remove a key from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | - |
| `value` | `Value` | The value that this key links to |

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyMap.ts:147](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L147)

___

### deleteKeys

▸ **deleteKeys**(`keys`, `value`): `void`

Remove many keys from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Key`[] | - |
| `value` | `Value` | The value that these keys link to |

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyMap.ts:163](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L163)

___

### deleteValue

▸ **deleteValue**(`value`): `void`

Remove all references to a value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The value to remove |

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyMap.ts:173](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L173)

___

### getKeys

▸ **getKeys**(`value`): `undefined` \| `Map`<`Key`, `void`\>

Return Map of Value to Keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Value` |

#### Returns

`undefined` \| `Map`<`Key`, `void`\>

#### Defined in

[Utilities/MultiKeyMap.ts:47](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L47)

___

### getKeysArray

▸ **getKeysArray**(`value`): `Key`[]

Return all keys relating to a value in array format

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Value` |

#### Returns

`Key`[]

#### Defined in

[Utilities/MultiKeyMap.ts:55](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L55)

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

[Utilities/MultiKeyMap.ts:39](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L39)

___

### hasKey

▸ **hasKey**(`key`): `boolean`

Test if a value exists for a given key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`boolean`

#### Defined in

[Utilities/MultiKeyMap.ts:64](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L64)

___

### remapKey

▸ **remapKey**(`key`, `newValue`): `void`

Remap pre-existing key to a new value based on pre-existing Key->Value map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The key to remap |
| `newValue` | `Value` | The new value to link the key to |

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyMap.ts:134](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L134)

___

### remapValue

▸ **remapValue**(`value`, `newValue`): `Key`[]

Remap pre-existing keys to a new value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The value to get the keys from |
| `newValue` | `Value` | The new value to link the keys to |

#### Returns

`Key`[]

#### Defined in

[Utilities/MultiKeyMap.ts:103](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L103)

___

### remapValueFromKey

▸ **remapValueFromKey**(`key`, `newValue`): `Key`[]

Remap pre-existing keys to a new value based on pre-existing Key->Value map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The key to lookup to find the original value to get the keys from |
| `newValue` | `Value` | The new value to link the keys to |

#### Returns

`Key`[]

#### Defined in

[Utilities/MultiKeyMap.ts:123](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L123)

___

### setKey

▸ **setKey**(`key`, `value`): `void`

Create a map between a key and a single value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | - |
| `value` | `Value` | The value to link this key to |

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyMap.ts:73](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L73)

___

### setKeys

▸ **setKeys**(`keys`, `value`): `void`

Create a map between multiple keys and a single value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Key`[] | - |
| `value` | `Value` | The value to link these keys to |

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyMap.ts:92](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fbb3331/Code/src/Utilities/MultiKeyMap.ts#L92)
