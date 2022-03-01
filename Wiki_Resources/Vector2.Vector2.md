# Class: Vector2

[Vector2](../wiki/Vector2).Vector2

Class representing a Vector2 which hold two floats.

## Hierarchy

- **`Vector2`**

  ↳ [`Vector3`](../wiki/Vector3.Vector3)

## Table of contents

### Constructors

- [constructor](../wiki/Vector2.Vector2#constructor)

### Properties

- [x](../wiki/Vector2.Vector2#x)
- [y](../wiki/Vector2.Vector2#y)

### Methods

- [Add](../wiki/Vector2.Vector2#add)
- [Dot](../wiki/Vector2.Vector2#dot)
- [Scale](../wiki/Vector2.Vector2#scale)
- [Subtract](../wiki/Vector2.Vector2#subtract)
- [add](../wiki/Vector2.Vector2#add)
- [clone](../wiki/Vector2.Vector2#clone)
- [distance](../wiki/Vector2.Vector2#distance)
- [distanceSqr](../wiki/Vector2.Vector2#distancesqr)
- [dot](../wiki/Vector2.Vector2#dot)
- [equals](../wiki/Vector2.Vector2#equals)
- [scale](../wiki/Vector2.Vector2#scale)
- [set](../wiki/Vector2.Vector2#set)
- [setVector2](../wiki/Vector2.Vector2#setvector2)
- [setX](../wiki/Vector2.Vector2#setx)
- [setY](../wiki/Vector2.Vector2#sety)
- [subtract](../wiki/Vector2.Vector2#subtract)

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

[Vector2.ts:13](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L13)

## Properties

### x

• **x**: `number`

#### Defined in

[Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L5)

___

### y

• **y**: `number`

#### Defined in

[Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L6)

## Methods

### Add

▸ **Add**(`_vector`): [`Vector2`](../wiki/Vector2.Vector2)

Add two Vector2's values and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:99](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L99)

___

### Dot

▸ **Dot**(`_vector`): [`Vector2`](../wiki/Vector2.Vector2)

Calcualte the dot product of two Vector2's and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:167](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L167)

___

### Scale

▸ **Scale**(`_scalar`): [`Vector2`](../wiki/Vector2.Vector2)

Calcualte the scaled value of a Vector2 and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:144](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L144)

___

### Subtract

▸ **Subtract**(`_vector`): [`Vector2`](../wiki/Vector2.Vector2)

Subract two Vector2's values and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:121](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L121)

___

### add

▸ **add**(`_vector`): [`Vector2`](../wiki/Vector2.Vector2)

Add two Vector2's values and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:89](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L89)

___

### clone

▸ **clone**(): [`Vector2`](../wiki/Vector2.Vector2)

Returns a new Vector2 with the same values as this Vector2

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:80](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L80)

___

### distance

▸ **distance**(`_vector`): `number`

Calculate the distance between two Vector2's

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

`number`

#### Defined in

[Vector2.ts:180](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L180)

___

### distanceSqr

▸ **distanceSqr**(`_vector`): `number`

Calculate the squared distance between two Vector2's

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

`number`

#### Defined in

[Vector2.ts:190](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L190)

___

### dot

▸ **dot**(`_vector`): [`Vector2`](../wiki/Vector2.Vector2)

Calcualte the dot product of two Vector2's and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:157](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L157)

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

[Vector2.ts:25](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L25)

___

### scale

▸ **scale**(`_scalar`): [`Vector2`](../wiki/Vector2.Vector2)

Calcualte the scaled value of a Vector2 and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:134](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L134)

___

### set

▸ **set**(`x`, `y`): [`Vector2`](../wiki/Vector2.Vector2)

Set this Vector2's x value to be the parameter's value and apply the values to this Vector2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x value to set |
| `y` | `number` | The y value to set |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:36](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L36)

___

### setVector2

▸ **setVector2**(`_vector`): ``null`` \| [`Vector2`](../wiki/Vector2.Vector2)

Set this Vector2's values to be the parameter's values and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

``null`` \| [`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:69](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L69)

___

### setX

▸ **setX**(`x`): [`Vector2`](../wiki/Vector2.Vector2)

Set this Vector2's x value to be the parameter's value and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:47](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L47)

___

### setY

▸ **setY**(`y`): [`Vector2`](../wiki/Vector2.Vector2)

Set this Vector2's y value to be the parameter's value and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:58](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L58)

___

### subtract

▸ **subtract**(`_vector`): [`Vector2`](../wiki/Vector2.Vector2)

Subract two Vector2's values and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2.Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2.Vector2)

#### Defined in

[Vector2.ts:111](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fcdb027/Code/src/cMaths/Vector2.ts#L111)
