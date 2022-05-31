# Class: MultiKeyReversibleMap<Key, Value\>

Class that handles multiple keys to value Map with reversable search
Lookup is O(1) for forward and O(2) for reverse lookup but requires extra memory

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
- [keys](../wiki/MultiKeyReversibleMap#keys)
- [keysAsArray](../wiki/MultiKeyReversibleMap#keysasarray)
- [remapKey](../wiki/MultiKeyReversibleMap#remapkey)
- [remapValue](../wiki/MultiKeyReversibleMap#remapvalue)
- [remapValueFromKey](../wiki/MultiKeyReversibleMap#remapvaluefromkey)
- [setKey](../wiki/MultiKeyReversibleMap#setkey)
- [setKeys](../wiki/MultiKeyReversibleMap#setkeys)
- [toString](../wiki/MultiKeyReversibleMap#tostring)
- [values](../wiki/MultiKeyReversibleMap#values)
- [valuesAsArray](../wiki/MultiKeyReversibleMap#valuesasarray)
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

[Utilities/MultiKeyReversibleMap.ts:40](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L40)

## Properties

### \_\_keyType\_\_

• `Private` **\_\_keyType\_\_**: `string` = `""`

Store the object type of the Keys in this Multi-Key Reversible Map for toString comparison

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L15)

___

### \_\_map\_\_

• `Private` **\_\_map\_\_**: `Map`<`Key`, `Value`\>

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L9)

___

### \_\_reverseMap\_\_

• `Private` **\_\_reverseMap\_\_**: `Map`<`Value`, `Map`<`Key`, `void`\>\>

Store all inverse references to values to allow searching and Maps the values to void for O(1) checking

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L12)

___

### \_\_valueType\_\_

• `Private` **\_\_valueType\_\_**: `string` = `""`

Return the object type of the Values in this Multi-Key Reversible Map for toString comparison

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:21](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L21)

## Accessors

### keyType

• `get` **keyType**(): `string`

#### Returns

`string`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L16)

___

### reverseSize

• `get` **reverseSize**(): `number`

Return the size of the reverse map of this Multi-Key Reversible Map

#### Returns

`number`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:32](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L32)

___

### size

• `get` **size**(): `number`

Return the size of this Multi-Key Reversible Map

#### Returns

`number`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L27)

___

### valueType

• `get` **valueType**(): `string`

#### Returns

`string`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:22](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L22)

## Methods

### clear

▸ **clear**(): `void`

Remove all keys and values

#### Returns

`void`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:321](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L321)

___

### deleteKey

▸ **deleteKey**(`key`, `value?`): `boolean`

Remove a key from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The key to remove from this map |
| `value?` | `Value` | The value that this key links to |

#### Returns

`boolean`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:266](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L266)

___

### deleteKeys

▸ **deleteKeys**(`keys`, `value?`): `boolean`

Remove many keys from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Key`[] | The keys to remove from this value |
| `value?` | `Value` | The value that these keys link to |

#### Returns

`boolean`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:297](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L297)

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

[Utilities/MultiKeyReversibleMap.ts:309](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L309)

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

[Utilities/MultiKeyReversibleMap.ts:70](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L70)

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

[Utilities/MultiKeyReversibleMap.ts:147](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L147)

___

### getKeysArray

▸ **getKeysArray**(`value`): `Key`[]

Return all keys relating to a value in array format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The value to return keys for |

#### Returns

`Key`[]

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:156](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L156)

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

[Utilities/MultiKeyReversibleMap.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L117)

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

[Utilities/MultiKeyReversibleMap.ts:166](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L166)

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

[Utilities/MultiKeyReversibleMap.ts:125](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L125)

___

### keys

▸ **keys**(): `IterableIterator`<`Key`\>

Returns an iterator for keys

#### Returns

`IterableIterator`<`Key`\>

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:132](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L132)

___

### keysAsArray

▸ **keysAsArray**(): `Key`[]

Returns an array of all keys

#### Returns

`Key`[]

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:139](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L139)

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

[Utilities/MultiKeyReversibleMap.ts:249](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L249)

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

[Utilities/MultiKeyReversibleMap.ts:215](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L215)

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

[Utilities/MultiKeyReversibleMap.ts:235](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L235)

___

### setKey

▸ **setKey**(`key`, `value`): `boolean`

Create a map between a key and a single value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The key to add this value to |
| `value` | `Value` | The value to link this key to |

#### Returns

`boolean`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:175](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L175)

___

### setKeys

▸ **setKeys**(`keys`, `value`): `boolean`

Create a map between multiple keys and a single value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Key`[] | Any keys to add this value to |
| `value` | `Value` | The value to link these keys to |

#### Returns

`boolean`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:201](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L201)

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:88](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L88)

___

### values

▸ **values**(): `IterableIterator`<`Value`\>

Returns an iterator for values

#### Returns

`IterableIterator`<`Value`\>

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:102](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L102)

___

### valuesAsArray

▸ **valuesAsArray**(): `Value`[]

Returns an array of all values

#### Returns

`Value`[]

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:109](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L109)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Defined in

[Utilities/MultiKeyReversibleMap.ts:95](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/MultiKeyReversibleMap.ts#L95)
