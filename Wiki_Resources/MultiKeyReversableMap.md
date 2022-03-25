# Class: MultiKeyReversableMap<Key, Value\>

Class that handles multiple keys to value Map with reversable search

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Table of contents

### Constructors

- [constructor](../wiki/MultiKeyReversableMap#constructor)

### Properties

- [\_\_map\_\_](../wiki/MultiKeyReversableMap#__map__)
- [\_\_reverseMap\_\_](../wiki/MultiKeyReversableMap#__reversemap__)

### Methods

- [clear](../wiki/MultiKeyReversableMap#clear)
- [deleteKey](../wiki/MultiKeyReversableMap#deletekey)
- [deleteKeys](../wiki/MultiKeyReversableMap#deletekeys)
- [deleteValue](../wiki/MultiKeyReversableMap#deletevalue)
- [getKeys](../wiki/MultiKeyReversableMap#getkeys)
- [getKeysArray](../wiki/MultiKeyReversableMap#getkeysarray)
- [getValue](../wiki/MultiKeyReversableMap#getvalue)
- [hasKey](../wiki/MultiKeyReversableMap#haskey)
- [hasValue](../wiki/MultiKeyReversableMap#hasvalue)
- [remapKey](../wiki/MultiKeyReversableMap#remapkey)
- [remapValue](../wiki/MultiKeyReversableMap#remapvalue)
- [remapValueFromKey](../wiki/MultiKeyReversableMap#remapvaluefromkey)
- [setKey](../wiki/MultiKeyReversableMap#setkey)
- [setKeys](../wiki/MultiKeyReversableMap#setkeys)

## Constructors

### constructor

• **new MultiKeyReversableMap**<`Key`, `Value`\>(`keys?`, `value?`)

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

Utilities/MultiKeyReversableMap.ts:18

## Properties

### \_\_map\_\_

• `Private` **\_\_map\_\_**: `Map`<`Key`, `Value`\>

#### Defined in

Utilities/MultiKeyReversableMap.ts:8

___

### \_\_reverseMap\_\_

• `Private` **\_\_reverseMap\_\_**: `Map`<`Value`, `Map`<`Key`, `void`\>\>

Store all inverse references to values to allow searching and Maps the values to void for O(1) checking

#### Defined in

Utilities/MultiKeyReversableMap.ts:11

## Methods

### clear

▸ **clear**(): `void`

Remove all keys and values

#### Returns

`void`

#### Defined in

Utilities/MultiKeyReversableMap.ts:216

___

### deleteKey

▸ **deleteKey**(`key`, `value`): `boolean`

Remove a key from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | - |
| `value` | `Value` | The value that this key links to |

#### Returns

`boolean`

#### Defined in

Utilities/MultiKeyReversableMap.ts:172

___

### deleteKeys

▸ **deleteKeys**(`keys`, `value`): `boolean`

Remove many keys from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Key`[] | - |
| `value` | `Value` | The value that these keys link to |

#### Returns

`boolean`

#### Defined in

Utilities/MultiKeyReversableMap.ts:191

___

### deleteValue

▸ **deleteValue**(`value`): `boolean`

Remove all references to a value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The value to remove |

#### Returns

`boolean`

#### Defined in

Utilities/MultiKeyReversableMap.ts:204

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

Utilities/MultiKeyReversableMap.ts:55

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

Utilities/MultiKeyReversableMap.ts:64

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

Utilities/MultiKeyReversableMap.ts:39

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

Utilities/MultiKeyReversableMap.ts:74

___

### hasValue

▸ **hasValue**(`value`): `boolean`

Test if a key exists for a given value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The value to check if a key exists |

#### Returns

`boolean`

#### Defined in

Utilities/MultiKeyReversableMap.ts:47

___

### remapKey

▸ **remapKey**(`key`, `newValue`): `boolean`

Remap pre-existing key to a new value based on pre-existing Key->Value map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The key to remap |
| `newValue` | `Value` | The new value to link the key to |

#### Returns

`boolean`

#### Defined in

Utilities/MultiKeyReversableMap.ts:155

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

Utilities/MultiKeyReversableMap.ts:121

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

Utilities/MultiKeyReversableMap.ts:141

___

### setKey

▸ **setKey**(`key`, `value`): `boolean`

Create a map between a key and a single value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | - |
| `value` | `Value` | The value to link this key to |

#### Returns

`boolean`

#### Defined in

Utilities/MultiKeyReversableMap.ts:83

___

### setKeys

▸ **setKeys**(`keys`, `value`): `boolean`

Create a map between multiple keys and a single value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Key`[] | - |
| `value` | `Value` | The value to link these keys to |

#### Returns

`boolean`

#### Defined in

Utilities/MultiKeyReversableMap.ts:107
