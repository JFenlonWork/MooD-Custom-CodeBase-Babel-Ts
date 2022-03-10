# Class: Vector3

Class representing a Vector3 which hold three floats.

## Hierarchy

- [`Vector2`](../wiki/Vector2)

  ↳ **`Vector3`**

  ↳↳ [`Vector4`](../wiki/Vector4)

## Table of contents

### Constructors

- [constructor](../wiki/Vector3#constructor)

### Properties

- [x](../wiki/Vector3#x)
- [y](../wiki/Vector3#y)
- [z](../wiki/Vector3#z)

### Methods

- [Add](../wiki/Vector3#add)
- [Dot](../wiki/Vector3#dot)
- [HasNaN](../wiki/Vector3#hasnan)
- [IsNaN](../wiki/Vector3#isnan)
- [Scale](../wiki/Vector3#scale)
- [Subtract](../wiki/Vector3#subtract)
- [add](../wiki/Vector3#add)
- [clone](../wiki/Vector3#clone)
- [distance](../wiki/Vector3#distance)
- [distanceSqr](../wiki/Vector3#distancesqr)
- [dot](../wiki/Vector3#dot)
- [equals](../wiki/Vector3#equals)
- [scale](../wiki/Vector3#scale)
- [set](../wiki/Vector3#set)
- [setVector2](../wiki/Vector3#setvector2)
- [setVector3](../wiki/Vector3#setvector3)
- [setX](../wiki/Vector3#setx)
- [setY](../wiki/Vector3#sety)
- [setZ](../wiki/Vector3#setz)
- [subtract](../wiki/Vector3#subtract)
- [vector2](../wiki/Vector3#vector2)
- [NaN](../wiki/Vector3#nan)
- [One](../wiki/Vector3#one)
- [Zero](../wiki/Vector3#zero)
- [hasNaN](../wiki/Vector3#hasnan)
- [isNaN](../wiki/Vector3#isnan)

## Constructors

### constructor

• **new Vector3**(`x`, `y`, `z`)

Create a Vector3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x value to set |
| `y` | `number` | The y value to set |
| `z` | `number` | The z value to set |

#### Overrides

[Vector2](../wiki/Vector2).[constructor](../wiki/Vector2#constructor)

#### Defined in

[Vector3.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L15)

## Properties

### x

• **x**: `number`

#### Inherited from

[Vector2](../wiki/Vector2).[x](../wiki/Vector2#x)

#### Defined in

[Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector2.ts#L5)

___

### y

• **y**: `number`

#### Inherited from

[Vector2](../wiki/Vector2).[y](../wiki/Vector2#y)

#### Defined in

[Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector2.ts#L6)

___

### z

• **z**: `number`

#### Defined in

[Vector3.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L7)

## Methods

### Add

▸ **Add**(`_vector`): [`Vector3`](../wiki/Vector3)

Add two Vector3's values and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Add](../wiki/Vector2#add)

#### Defined in

[Vector3.ts:158](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L158)

___

### Dot

▸ **Dot**(`_vector`): [`Vector3`](../wiki/Vector3)

Calcualte the dot product of two Vector3's and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Dot](../wiki/Vector2#dot)

#### Defined in

[Vector3.ts:224](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L224)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector3 has a NaN value

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[HasNaN](../wiki/Vector2#hasnan)

#### Defined in

[Vector3.ts:67](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L67)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector3 is all NaN

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[IsNaN](../wiki/Vector2#isnan)

#### Defined in

[Vector3.ts:59](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L59)

___

### Scale

▸ **Scale**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the scaled value of a Vector3 and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Scale](../wiki/Vector2#scale)

#### Defined in

[Vector3.ts:202](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L202)

___

### Subtract

▸ **Subtract**(`_vector`): [`Vector3`](../wiki/Vector3)

Subract two Vector3's values and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Subtract](../wiki/Vector2#subtract)

#### Defined in

[Vector3.ts:180](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L180)

___

### add

▸ **add**(`_vector`): [`Vector3`](../wiki/Vector3)

Add two Vector3's values and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[add](../wiki/Vector2#add)

#### Defined in

[Vector3.ts:148](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L148)

___

### clone

▸ **clone**(): [`Vector3`](../wiki/Vector3)

Returns a new Vector3 with the same values as this Vector3

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[clone](../wiki/Vector2#clone)

#### Defined in

[Vector3.ts:139](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L139)

___

### distance

▸ **distance**(`_vector`): `number`

Calculate the distance between two Vector3's

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

`number`

#### Overrides

[Vector2](../wiki/Vector2).[distance](../wiki/Vector2#distance)

#### Defined in

[Vector3.ts:236](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L236)

___

### distanceSqr

▸ **distanceSqr**(`_vector`): `number`

Calculate the squared distance between two Vector3's

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

`number`

#### Overrides

[Vector2](../wiki/Vector2).[distanceSqr](../wiki/Vector2#distancesqr)

#### Defined in

[Vector3.ts:246](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L246)

___

### dot

▸ **dot**(`_vector`): [`Vector3`](../wiki/Vector3)

Calcualte the dot product of two Vector3's and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[dot](../wiki/Vector2#dot)

#### Defined in

[Vector3.ts:214](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L214)

___

### equals

▸ **equals**(`o`): `boolean`

Returns if an object is the same as this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[equals](../wiki/Vector2#equals)

#### Defined in

[Vector3.ts:50](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L50)

___

### scale

▸ **scale**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the scaled value of a Vector3 and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[scale](../wiki/Vector2#scale)

#### Defined in

[Vector3.ts:192](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L192)

___

### set

▸ **set**(`x`, `y`, `z?`): [`Vector3`](../wiki/Vector3)

Set this Vector3's x,y and z value to be the parameter's value and apply the values to this Vector3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x value to set |
| `y` | `number` | The y value to set |
| `z?` | `number` | The z value to set |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[set](../wiki/Vector2#set)

#### Defined in

[Vector3.ts:106](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L106)

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

#### Inherited from

[Vector2](../wiki/Vector2).[setVector2](../wiki/Vector2#setvector2)

#### Defined in

[Vector2.ts:128](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector2.ts#L128)

___

### setVector3

▸ **setVector3**(`_vector`): ``null`` \| [`Vector3`](../wiki/Vector3)

Set this Vector3's values to be the parameter's values and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

``null`` \| [`Vector3`](../wiki/Vector3)

#### Defined in

[Vector3.ts:128](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L128)

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

#### Inherited from

[Vector2](../wiki/Vector2).[setX](../wiki/Vector2#setx)

#### Defined in

[Vector2.ts:106](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector2.ts#L106)

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

#### Inherited from

[Vector2](../wiki/Vector2).[setY](../wiki/Vector2#sety)

#### Defined in

[Vector2.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector2.ts#L117)

___

### setZ

▸ **setZ**(`z`): [`Vector3`](../wiki/Vector3)

Set this Vector3's z value to be the parameter's value and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Defined in

[Vector3.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L117)

___

### subtract

▸ **subtract**(`_vector`): [`Vector3`](../wiki/Vector3)

Subract two Vector3's values and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[subtract](../wiki/Vector2#subtract)

#### Defined in

[Vector3.ts:170](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L170)

___

### vector2

▸ **vector2**(): [`Vector2`](../wiki/Vector2)

Returns a Vector2 version of this Vector3

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector3.ts:95](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L95)

___

### NaN

▸ `Static` **NaN**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with NaN

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[NaN](../wiki/Vector2#nan)

#### Defined in

[Vector3.ts:25](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L25)

___

### One

▸ `Static` **One**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with 1

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[One](../wiki/Vector2#one)

#### Defined in

[Vector3.ts:41](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L41)

___

### Zero

▸ `Static` **Zero**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with 0

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Zero](../wiki/Vector2#zero)

#### Defined in

[Vector3.ts:33](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L33)

___

### hasNaN

▸ `Static` **hasNaN**(`o`): `boolean`

Returns if a Vector3 has a NaN value

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[hasNaN](../wiki/Vector2#hasnan)

#### Defined in

[Vector3.ts:86](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L86)

___

### isNaN

▸ `Static` **isNaN**(`o`): `boolean`

Returns if a Vector3 is all NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[isNaN](../wiki/Vector2#isnan)

#### Defined in

[Vector3.ts:76](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Vector3.ts#L76)
