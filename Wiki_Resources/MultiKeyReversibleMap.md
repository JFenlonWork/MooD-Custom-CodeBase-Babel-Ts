# Class: MultiKeyReversibleMap<Key, Value\>

Class that handles multiple keys to value Map with reversable search

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Table of contents

### Constructors

- [constructor](../wiki/MultiKeyReversibleMap#constructor)

### Properties

- [\_\_keyType\_\_](../wiki/MultiKeyReversibleMap#__keytype__)
- [\_\_map\_\_](../wiki/MultiKeyReversibleMap#__map__)
- [\_\_reverseMap\_\_](../wiki/MultiKeyReversibleMap#__reversemap__)
- [\_\_valueType\_\_](../wiki/MultiKeyReversibleMap#__valuetype__)

### Accessors

- [keyType](../wiki/MultiKeyReversibleMap#keytype)
- [reverseSize](../wiki/MultiKeyReversibleMap#reversesize)
- [size](../wiki/MultiKeyReversibleMap#size)
- [valueType](../wiki/MultiKeyReversibleMap#valuetype)

### Methods

- [clear](../wiki/MultiKeyReversibleMap#clear)
- [deleteKey](../wiki/MultiKeyReversibleMap#deletekey)
- [deleteKeys](../wiki/MultiKeyReversibleMap#deletekeys)
- [deleteValue](../wiki/MultiKeyReversibleMap#deletevalue)
- [equals](../wiki/MultiKeyReversibleMap#equals)
- [getKeys](../wiki/MultiKeyReversibleMap#getkeys)
- [getKeysArray](../wiki/MultiKeyReversibleMap#getkeysarray)
- [getValue](../wiki/MultiKeyReversibleMap#getvalue)
- [hasKey](../wiki/MultiKeyReversibleMap#haskey)
- [hasValue](../wiki/MultiKeyReversibleMap#hasvalue)
- [remapKey](../wiki/MultiKeyReversibleMap#remapkey)
- [remapValue](../wiki/MultiKeyReversibleMap#remapvalue)
- [remapValueFromKey](../wiki/MultiKeyReversibleMap#remapvaluefromkey)
- [setKey](../wiki/MultiKeyReversibleMap#setkey)
- [setKeys](../wiki/MultiKeyReversibleMap#setkeys)
- [toString](../wiki/MultiKeyReversibleMap#tostring)
- [toString](../wiki/MultiKeyReversibleMap#tostring)

## Constructors

### constructor

• **new MultiKeyReversibleMap**<`Key`, `Value`\>(`keyType`, `valueType`, `collection?`)

Create a map between multiple keys and a single value

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyType` | `string` | - |
| `valueType` | `string` | - |
| `collection?` | [`Key`[], `Value`][] | A collection of key value pairs to create the map from |

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:39](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L39)

## Properties

### \_\_keyType\_\_

• `Private` **\_\_keyType\_\_**: `string` = `""`

Store the object type of the Keys in this Multi-Key Reversible Map for toString comparison

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:14](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L14)

___

### \_\_map\_\_

• `Private` **\_\_map\_\_**: `Map`<`Key`, `Value`\>

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L8)

___

### \_\_reverseMap\_\_

• `Private` **\_\_reverseMap\_\_**: `Map`<`Value`, `Map`<`Key`, `void`\>\>

Store all inverse references to values to allow searching and Maps the values to void for O(1) checking

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L11)

___

### \_\_valueType\_\_

• `Private` **\_\_valueType\_\_**: `string` = `""`

Return the object type of the Values in this Multi-Key Reversible Map for toString comparison

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L20)

## Accessors

### keyType

• `get` **keyType**(): `string`

#### Returns

`string`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L15)

___

### reverseSize

• `get` **reverseSize**(): `number`

Return the size of the reverse map of this Multi-Key Reversible Map

#### Returns

`number`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:31](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L31)

___

### size

• `get` **size**(): `number`

Return the size of this Multi-Key Reversible Map

#### Returns

`number`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L26)

___

### valueType

• `get` **valueType**(): `string`

#### Returns

`string`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:21](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L21)

## Methods

### clear

▸ **clear**(): `void`

Remove all keys and values

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:292](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L292)

___

### deleteKey

▸ **deleteKey**(`key`, `value?`): `boolean`

Remove a key from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | - |
| `value?` | `Value` | The value that this key links to |

#### Returns

`boolean`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:237](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L237)

___

### deleteKeys

▸ **deleteKeys**(`keys`, `value?`): `boolean`

Remove many keys from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Key`[] | - |
| `value?` | `Value` | The value that these keys link to |

#### Returns

`boolean`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:268](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L268)

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

[Utilities/MultiKeyReversibleMap.ts:280](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L280)

___

### equals

▸ **equals**(`map`): `boolean`

Returns if two Multi-Key Reversible Maps are equal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`MultiKeyReversibleMap`](../wiki/MultiKeyReversibleMap)<`Key`, `Value`\> | The other Multi-Key Reversible Map to compare to |

#### Returns

`boolean`

Value - The value associated with the key

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:69](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L69)

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

[Utilities/MultiKeyReversibleMap.ts:118](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L118)

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

[Utilities/MultiKeyReversibleMap.ts:127](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L127)

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

[Utilities/MultiKeyReversibleMap.ts:102](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L102)

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

[Utilities/MultiKeyReversibleMap.ts:137](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L137)

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

[Utilities/MultiKeyReversibleMap.ts:110](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L110)

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

[Utilities/MultiKeyReversibleMap.ts:220](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L220)

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

[Utilities/MultiKeyReversibleMap.ts:186](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L186)

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

[Utilities/MultiKeyReversibleMap.ts:206](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L206)

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

[Utilities/MultiKeyReversibleMap.ts:146](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L146)

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

[Utilities/MultiKeyReversibleMap.ts:172](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L172)

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:87](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L87)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:94](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ffa4621/Code/src/Utilities/MultiKeyReversibleMap.ts#L94)
