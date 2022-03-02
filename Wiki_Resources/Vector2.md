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

[Vector2.ts:13](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L13)

## Properties

### x

• **x**: `number`

#### Defined in

[Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L5)

___

### y

• **y**: `number`

#### Defined in

[Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L6)

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

[Vector2.ts:98](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L98)

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

[Vector2.ts:166](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L166)

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

[Vector2.ts:143](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L143)

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

[Vector2.ts:120](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L120)

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

[Vector2.ts:88](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L88)

___

### clone

▸ **clone**(): [`Vector2`](../wiki/Vector2)

Returns a new Vector2 with the same values as this Vector2

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector2.ts:79](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L79)

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

[Vector2.ts:179](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L179)

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

[Vector2.ts:189](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L189)

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

[Vector2.ts:156](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L156)

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

[Vector2.ts:24](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L24)

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

[Vector2.ts:133](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L133)

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

[Vector2.ts:35](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L35)

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

[Vector2.ts:68](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L68)

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

[Vector2.ts:46](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L46)

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

[Vector2.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L57)

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

[Vector2.ts:110](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L110)
