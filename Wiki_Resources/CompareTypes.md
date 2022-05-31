# Class: CompareTypes

Class representing a utility that compares types.

## Table of contents

### Constructors

- [constructor](../wiki/CompareTypes#constructor)

### Methods

- [arrayDifferent](../wiki/CompareTypes#arraydifferent)
- [arraySame](../wiki/CompareTypes#arraysame)
- [arrayType](../wiki/CompareTypes#arraytype)
- [arrayTypeSet](../wiki/CompareTypes#arraytypeset)
- [arrayTypesCompare](../wiki/CompareTypes#arraytypescompare)
- [arrayValuesDifferent](../wiki/CompareTypes#arrayvaluesdifferent)
- [arrayValuesSame](../wiki/CompareTypes#arrayvaluessame)
- [different](../wiki/CompareTypes#different)
- [same](../wiki/CompareTypes#same)
- [type](../wiki/CompareTypes#type)

## Constructors

### constructor

• **new CompareTypes**()

## Methods

### arrayDifferent

▸ `Static` **arrayDifferent**(`a`, `bArray`): `boolean`

Compare all values of an array with a parameter and return if they are a different same type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | The value to compare to |
| `bArray` | `any`[] | The values to compare |

#### Returns

`boolean`

#### Defined in

[Utilities/CompareTypes.ts:48](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L48)

___

### arraySame

▸ `Static` **arraySame**(`a`, `bArray`): `boolean`

Compare all values of an array with a parameter and return if they are the same type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | The value to compare to |
| `bArray` | `any`[] | The values to compare |

#### Returns

`boolean`

#### Defined in

[Utilities/CompareTypes.ts:36](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L36)

___

### arrayType

▸ `Static` **arrayType**(`a`): `string`[]

Return the unique types of values in an array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any`[] | The array to get the type of |

#### Returns

`string`[]

#### Defined in

[Utilities/CompareTypes.ts:59](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L59)

___

### arrayTypeSet

▸ `Static` **arrayTypeSet**(`a`): `Set`<`string`\>

Return the unique types of values in an array as a Set

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any`[] | The array to get the type of |

#### Returns

`Set`<`string`\>

#### Defined in

[Utilities/CompareTypes.ts:67](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L67)

___

### arrayTypesCompare

▸ `Static` **arrayTypesCompare**(`aArray`, `bArray`): `boolean`

Compare all values of an array with the values of another and return if any are not the same type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aArray` | `any`[] | The array to compare |
| `bArray` | `any`[] | The array to compare to |

#### Returns

`boolean`

#### Defined in

[Utilities/CompareTypes.ts:92](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L92)

___

### arrayValuesDifferent

▸ `Static` **arrayValuesDifferent**(`array`): `boolean`

Compare all values of an array and return if they are different types

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | The array to compare |

#### Returns

`boolean`

#### Defined in

[Utilities/CompareTypes.ts:83](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L83)

___

### arrayValuesSame

▸ `Static` **arrayValuesSame**(`array`): `boolean`

Compare all values of an array and return if they are the same types

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | The array to compare |

#### Returns

`boolean`

#### Defined in

[Utilities/CompareTypes.ts:75](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L75)

___

### different

▸ `Static` **different**(`a`, `b`): `boolean`

Compare two parameters and return if they are not the same type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | The value to compare |
| `b` | `any` | The value to compare to |

#### Returns

`boolean`

#### Defined in

[Utilities/CompareTypes.ts:19](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L19)

___

### same

▸ `Static` **same**(`a`, `b`): `boolean`

Compare two parameters and return if they are the same type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | The value to compare |
| `b` | `any` | The value to compare to |

#### Returns

`boolean`

#### Defined in

[Utilities/CompareTypes.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L10)

___

### type

▸ `Static` **type**(`a`): `string`

Return the type of a parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | The value to get the type of |

#### Returns

`string`

#### Defined in

[Utilities/CompareTypes.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Utilities/CompareTypes.ts#L27)
