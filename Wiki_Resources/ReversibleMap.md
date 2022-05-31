# Class: ReversibleMap<Key, Value\>

Class that handles key to value Map with reversible search
Lookup is O(1) for both forward and reverse lookup but requires extra memory

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Table of contents

### Constructors

- [constructor](../wiki/ReversibleMap#constructor)

### Properties

- [\_\_keyType\_\_](../wiki/ReversibleMap#__keytype__)
- [\_\_map\_\_](../wiki/ReversibleMap#__map__)
- [\_\_reverseMap\_\_](../wiki/ReversibleMap#__reversemap__)
- [\_\_valueType\_\_](../wiki/ReversibleMap#__valuetype__)

### Accessors

- [keyType](../wiki/ReversibleMap#keytype)
- [reverseSize](../wiki/ReversibleMap#reversesize)
- [size](../wiki/ReversibleMap#size)
- [valueType](../wiki/ReversibleMap#valuetype)

### Methods

- [clear](../wiki/ReversibleMap#clear)
- [deleteKey](../wiki/ReversibleMap#deletekey)
- [deleteValue](../wiki/ReversibleMap#deletevalue)
- [equals](../wiki/ReversibleMap#equals)
- [getKey](../wiki/ReversibleMap#getkey)
- [getValue](../wiki/ReversibleMap#getvalue)
- [hasKey](../wiki/ReversibleMap#haskey)
- [hasValue](../wiki/ReversibleMap#hasvalue)
- [keys](../wiki/ReversibleMap#keys)
- [keysAsArray](../wiki/ReversibleMap#keysasarray)
- [setKey](../wiki/ReversibleMap#setkey)
- [toString](../wiki/ReversibleMap#tostring)
- [values](../wiki/ReversibleMap#values)
- [valuesAsArray](../wiki/ReversibleMap#valuesasarray)
- [toString](../wiki/ReversibleMap#tostring)

## Constructors

### constructor

• **new ReversibleMap**<`Key`, `Value`\>(`keyType`, `valueType`, `collection?`)

Create a reversible map between Keys and Values

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyType` | `string` | The type of the keys in the collection, used for toString comparison |
| `valueType` | `string` | The type of the values in the collection, used for toString comparison |
| `collection?` | [`Key`, `Value`][] | A collection of key value pairs to create the map from |

#### Defined in

[Utilities/ReversibleMap.ts:42](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L42)

## Properties

### \_\_keyType\_\_

• `Private` **\_\_keyType\_\_**: `string` = `""`

Store the object type of the Keys in this Reversible Map for toString comparison

#### Defined in

[Utilities/ReversibleMap.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L15)

___

### \_\_map\_\_

• `Private` **\_\_map\_\_**: `Map`<`Key`, `Value`\>

Store all forward references to values to allow searching

#### Defined in

[Utilities/ReversibleMap.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L9)

___

### \_\_reverseMap\_\_

• `Private` **\_\_reverseMap\_\_**: `Map`<`Value`, `Key`\>

Store all inverse references to values to allow searching and Maps the values to void for O(1) checking

#### Defined in

[Utilities/ReversibleMap.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L12)

___

### \_\_valueType\_\_

• `Private` **\_\_valueType\_\_**: `string` = `""`

Return the object type of the Values in this Reversible Map for toString comparison

#### Defined in

[Utilities/ReversibleMap.ts:21](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L21)

## Accessors

### keyType

• `get` **keyType**(): `string`

#### Returns

`string`

#### Defined in

[Utilities/ReversibleMap.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L16)

___

### reverseSize

• `get` **reverseSize**(): `number`

Return the size of the reverse map of this ReversibleMap

#### Returns

`number`

#### Defined in

[Utilities/ReversibleMap.ts:32](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L32)

___

### size

• `get` **size**(): `number`

Return the size of this ReversibleMap

#### Returns

`number`

#### Defined in

[Utilities/ReversibleMap.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L27)

___

### valueType

• `get` **valueType**(): `string`

#### Returns

`string`

#### Defined in

[Utilities/ReversibleMap.ts:22](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L22)

## Methods

### clear

▸ **clear**(): `void`

Remove all keys and values

#### Returns

`void`

#### Defined in

[Utilities/ReversibleMap.ts:199](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L199)

___

### deleteKey

▸ **deleteKey**(`key`): `boolean`

Remove a key from this map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The Key to remove from this value |

#### Returns

`boolean`

#### Defined in

[Utilities/ReversibleMap.ts:172](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L172)

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

[Utilities/ReversibleMap.ts:186](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L186)

___

### equals

▸ **equals**(`map`): `boolean`

Returns if two reversible maps are equal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`ReversibleMap`](../wiki/ReversibleMap)<`Key`, `Value`\> | The other ReversibleMap to compare to |

#### Returns

`boolean`

Value - The value associated with the key

#### Defined in

[Utilities/ReversibleMap.ts:63](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L63)

___

### getKey

▸ **getKey**(`value`): `undefined` \| `Key`

Return Key associated with a Value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The value to return keys Map for |

#### Returns

`undefined` \| `Key`

#### Defined in

[Utilities/ReversibleMap.ts:132](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L132)

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

[Utilities/ReversibleMap.ts:110](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L110)

___

### hasKey

▸ **hasKey**(`key`): `boolean`

Test if a Value exists for a given Key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The Key to check if a value exists |

#### Returns

`boolean`

#### Defined in

[Utilities/ReversibleMap.ts:140](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L140)

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

[Utilities/ReversibleMap.ts:148](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L148)

___

### keys

▸ **keys**(): `IterableIterator`<`Key`\>

Returns an iterator for keys

#### Returns

`IterableIterator`<`Key`\>

#### Defined in

[Utilities/ReversibleMap.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L117)

___

### keysAsArray

▸ **keysAsArray**(): `Key`[]

Returns an array of all values

#### Returns

`Key`[]

#### Defined in

[Utilities/ReversibleMap.ts:124](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L124)

___

### setKey

▸ **setKey**(`key`, `value`): `boolean`

Create a map between a Key and a Value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Key` | The Key to link to this Value |
| `value` | `Value` | The Value to link to this Key |

#### Returns

`boolean`

#### Defined in

[Utilities/ReversibleMap.ts:157](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L157)

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Defined in

[Utilities/ReversibleMap.ts:81](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L81)

___

### values

▸ **values**(): `IterableIterator`<`Value`\>

Returns an iterator for values

#### Returns

`IterableIterator`<`Value`\>

#### Defined in

[Utilities/ReversibleMap.ts:95](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L95)

___

### valuesAsArray

▸ **valuesAsArray**(): `Value`[]

Returns an array of all values

#### Returns

`Value`[]

#### Defined in

[Utilities/ReversibleMap.ts:102](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L102)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Defined in

[Utilities/ReversibleMap.ts:88](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/ReversibleMap.ts#L88)
