# Class: MultiKeyMap<T\>

Class that handles multiple keys to one value Map

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](../wiki/MultiKeyMap#constructor)

### Properties

- [\_\_map\_\_](../wiki/MultiKeyMap#__map__)
- [\_\_reverseMap\_\_](../wiki/MultiKeyMap#__reversemap__)

### Methods

- [deleteKey](../wiki/MultiKeyMap#deletekey)
- [deleteKeys](../wiki/MultiKeyMap#deletekeys)
- [deleteValue](../wiki/MultiKeyMap#deletevalue)
- [getKeys](../wiki/MultiKeyMap#getkeys)
- [getKeysArray](../wiki/MultiKeyMap#getkeysarray)
- [getValue](../wiki/MultiKeyMap#getvalue)
- [hasKey](../wiki/MultiKeyMap#haskey)
- [setKey](../wiki/MultiKeyMap#setkey)
- [setKeys](../wiki/MultiKeyMap#setkeys)

## Constructors

### constructor

• **new MultiKeyMap**<`T`\>(`keys?`, `value?`)

Create a map between multiple keys and a single value

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `keys` | `any` | `null` | - |
| `value?` | `T` | `undefined` | The value to link these keys to |

#### Defined in

Utilities/MultiKeyMap.ts:16

## Properties

### \_\_map\_\_

• `Private` **\_\_map\_\_**: `Map`<`any`, `T`\>

#### Defined in

Utilities/MultiKeyMap.ts:6

___

### \_\_reverseMap\_\_

• `Private` **\_\_reverseMap\_\_**: `Map`<`T`, `Map`<`any`, `void`\>\>

Store all inverse references to values to allow searching and Maps the values to void for O(1) checking

#### Defined in

Utilities/MultiKeyMap.ts:9

## Methods

### deleteKey

▸ **deleteKey**(`key`, `value`): `void`

Remove a key from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | - |
| `value` | `T` | The value that this key links to |

#### Returns

`void`

#### Defined in

Utilities/MultiKeyMap.ts:98

___

### deleteKeys

▸ **deleteKeys**(`keys`, `value`): `void`

Remove many keys from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `any`[] | - |
| `value` | `T` | The value that these keys link to |

#### Returns

`void`

#### Defined in

Utilities/MultiKeyMap.ts:114

___

### deleteValue

▸ **deleteValue**(`value`): `void`

Remove all references to a value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to remove |

#### Returns

`void`

#### Defined in

Utilities/MultiKeyMap.ts:124

___

### getKeys

▸ **getKeys**(`value`): `undefined` \| `Map`<`any`, `void`\>

Return Map of Value to Keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`undefined` \| `Map`<`any`, `void`\>

#### Defined in

Utilities/MultiKeyMap.ts:42

___

### getKeysArray

▸ **getKeysArray**(`value`): `any`[]

Return all keys relating to a value in array format

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`any`[]

#### Defined in

Utilities/MultiKeyMap.ts:50

___

### getValue

▸ **getValue**(`key`): `any`

Return Value associated with a key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | The key to return the value for |

#### Returns

`any`

#### Defined in

Utilities/MultiKeyMap.ts:34

___

### hasKey

▸ **hasKey**(`key`): `boolean`

Test if a value exists for a given key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

Utilities/MultiKeyMap.ts:59

___

### setKey

▸ **setKey**(`key`, `value`): `void`

Create a map between a key and a single value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | - |
| `value` | `T` | The value to link this key to |

#### Returns

`void`

#### Defined in

Utilities/MultiKeyMap.ts:68

___

### setKeys

▸ **setKeys**(`keys`, `value`): `void`

Create a map between multiple keys and a single value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `any`[] | - |
| `value` | `T` | The value to link these keys to |

#### Returns

`void`

#### Defined in

Utilities/MultiKeyMap.ts:87