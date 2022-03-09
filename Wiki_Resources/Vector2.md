# Class: Vector2

Class representing a Vector2 which hold two floats.

## Hierarchy

- **`Vector2`**

  ↳ [`Vector3`](../wiki/Vector3)

## Table of contents

### Constructors

- [constructor](../wiki/Vector2#constructor)

### Properties

- [x](../wiki/Vector2#x)
- [y](../wiki/Vector2#y)

### Methods

- [Add](../wiki/Vector2#add)
- [Dot](../wiki/Vector2#dot)
- [HasNaN](../wiki/Vector2#hasnan)
- [IsNaN](../wiki/Vector2#isnan)
- [Scale](../wiki/Vector2#scale)
- [Subtract](../wiki/Vector2#subtract)
- [add](../wiki/Vector2#add)
- [clone](../wiki/Vector2#clone)
- [distance](../wiki/Vector2#distance)
- [distanceSqr](../wiki/Vector2#distancesqr)
- [dot](../wiki/Vector2#dot)
- [equals](../wiki/Vector2#equals)
- [scale](../wiki/Vector2#scale)
- [set](../wiki/Vector2#set)
- [setVector2](../wiki/Vector2#setvector2)
- [setX](../wiki/Vector2#setx)
- [setY](../wiki/Vector2#sety)
- [subtract](../wiki/Vector2#subtract)
- [NaN](../wiki/Vector2#nan)
- [One](../wiki/Vector2#one)
- [Zero](../wiki/Vector2#zero)
- [hasNaN](../wiki/Vector2#hasnan)
- [isNaN](../wiki/Vector2#isnan)

## Constructors

### constructor

• **new Vector2**(`x`, `y`)

Create a Vector2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x value to set |
| `y` | `number` | The y value to set |

#### Defined in

[Vector2.ts:13](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L13)

## Properties

### x

• **x**: `number`

#### Defined in

[Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L5)

___

### y

• **y**: `number`

#### Defined in

[Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L6)

## Methods

### Add

▸ **Add**(`_vector`): [`Vector2`](../wiki/Vector2)

Add two Vector2's values and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:158](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L158)

___

### Dot

▸ **Dot**(`_vector`): [`Vector2`](../wiki/Vector2)

Calcualte the dot product of two Vector2's and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:226](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L226)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector2 has a NaN value

#### Returns

`boolean`

#### Defined in

[Vector2.ts:65](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L65)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector2 is all NaN

#### Returns

`boolean`

#### Defined in

[Vector2.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L57)

___

### Scale

▸ **Scale**(`_scalar`): [`Vector2`](../wiki/Vector2)

Calcualte the scaled value of a Vector2 and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:203](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L203)

___

### Subtract

▸ **Subtract**(`_vector`): [`Vector2`](../wiki/Vector2)

Subract two Vector2's values and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:180](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L180)

___

### add

▸ **add**(`_vector`): [`Vector2`](../wiki/Vector2)

Add two Vector2's values and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:148](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L148)

___

### clone

▸ **clone**(): [`Vector2`](../wiki/Vector2)

Returns a new Vector2 with the same values as this Vector2

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:139](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L139)

___

### distance

▸ **distance**(`_vector`): `number`

Calculate the distance between two Vector2's

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`number`

#### Defined in

[Vector2.ts:239](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L239)

___

### distanceSqr

▸ **distanceSqr**(`_vector`): `number`

Calculate the squared distance between two Vector2's

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`number`

#### Defined in

[Vector2.ts:249](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L249)

___

### dot

▸ **dot**(`_vector`): [`Vector2`](../wiki/Vector2)

Calcualte the dot product of two Vector2's and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:216](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L216)

___

### equals

▸ **equals**(`o`): `boolean`

Returns if an object is the same as this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Vector2.ts:48](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L48)

___

### scale

▸ **scale**(`_scalar`): [`Vector2`](../wiki/Vector2)

Calcualte the scaled value of a Vector2 and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:193](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L193)

___

### set

▸ **set**(`x`, `y`): [`Vector2`](../wiki/Vector2)

Set this Vector2's x and y value to be the parameter's value and apply the values to this Vector2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x value to set |
| `y` | `number` | The y value to set |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:95](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L95)

___

### setVector2

▸ **setVector2**(`_vector`): ``null`` \| [`Vector2`](../wiki/Vector2)

Set this Vector2's values to be the parameter's values and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

``null`` \| [`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:128](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L128)

___

### setX

▸ **setX**(`x`): [`Vector2`](../wiki/Vector2)

Set this Vector2's x value to be the parameter's value and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:106](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L106)

___

### setY

▸ **setY**(`y`): [`Vector2`](../wiki/Vector2)

Set this Vector2's y value to be the parameter's value and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L117)

___

### subtract

▸ **subtract**(`_vector`): [`Vector2`](../wiki/Vector2)

Subract two Vector2's values and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:170](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L170)

___

### NaN

▸ `Static` **NaN**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with NaN

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L23)

___

### One

▸ `Static` **One**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with 1

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:39](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L39)

___

### Zero

▸ `Static` **Zero**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with 0

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:31](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L31)

___

### hasNaN

▸ `Static` **hasNaN**(`o`): `boolean`

Returns if a Vector2 has a NaN value

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Vector2.ts:84](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L84)

___

### isNaN

▸ `Static` **isNaN**(`o`): `boolean`

Returns if a Vector2 is all NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Vector2.ts:74](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L74)
