# Class: Vector4

Class representing a Vector3 which hold three floats.

## Hierarchy

- [`Vector3`](../wiki/Vector3)

  ↳ **`Vector4`**

## Table of contents

### Constructors

- [constructor](../wiki/Vector4#constructor)

### Properties

- [w](../wiki/Vector4#w)
- [x](../wiki/Vector4#x)
- [y](../wiki/Vector4#y)
- [z](../wiki/Vector4#z)

### Methods

- [Add](../wiki/Vector4#add)
- [Dot](../wiki/Vector4#dot)
- [HasNaN](../wiki/Vector4#hasnan)
- [IsNaN](../wiki/Vector4#isnan)
- [Scale](../wiki/Vector4#scale)
- [Subtract](../wiki/Vector4#subtract)
- [add](../wiki/Vector4#add)
- [clone](../wiki/Vector4#clone)
- [distance](../wiki/Vector4#distance)
- [distanceSqr](../wiki/Vector4#distancesqr)
- [dot](../wiki/Vector4#dot)
- [equals](../wiki/Vector4#equals)
- [scale](../wiki/Vector4#scale)
- [set](../wiki/Vector4#set)
- [setVector2](../wiki/Vector4#setvector2)
- [setVector3](../wiki/Vector4#setvector3)
- [setVector4](../wiki/Vector4#setvector4)
- [setW](../wiki/Vector4#setw)
- [setX](../wiki/Vector4#setx)
- [setY](../wiki/Vector4#sety)
- [setZ](../wiki/Vector4#setz)
- [subtract](../wiki/Vector4#subtract)
- [vector2](../wiki/Vector4#vector2)
- [vector3](../wiki/Vector4#vector3)
- [NaN](../wiki/Vector4#nan)
- [One](../wiki/Vector4#one)
- [Zero](../wiki/Vector4#zero)
- [hasNaN](../wiki/Vector4#hasnan)
- [isNaN](../wiki/Vector4#isnan)

## Constructors

### constructor

• **new Vector4**(`x`, `y`, `z`, `w`)

Create a Vector3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x value to set |
| `y` | `number` | The y value to set |
| `z` | `number` | The z value to set |
| `w` | `number` | The w value to set |

#### Overrides

[Vector3](../wiki/Vector3).[constructor](../wiki/Vector3#constructor)

#### Defined in

[Vector4.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L16)

## Properties

### w

• **w**: `number`

#### Defined in

[Vector4.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L7)

___

### x

• **x**: `number`

#### Inherited from

[Vector3](../wiki/Vector3).[x](../wiki/Vector3#x)

#### Defined in

[Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L5)

___

### y

• **y**: `number`

#### Inherited from

[Vector3](../wiki/Vector3).[y](../wiki/Vector3#y)

#### Defined in

[Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L6)

___

### z

• **z**: `number`

#### Inherited from

[Vector3](../wiki/Vector3).[z](../wiki/Vector3#z)

#### Defined in

[Vector3.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector3.ts#L7)

## Methods

### Add

▸ **Add**(`_vector`): [`Vector4`](../wiki/Vector4)

Add two Vector4's values and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Add](../wiki/Vector3#add)

#### Defined in

[Vector4.ts:160](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L160)

___

### Dot

▸ **Dot**(`_vector`): [`Vector4`](../wiki/Vector4)

Calcualte the dot product of two Vector4's and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Dot](../wiki/Vector3#dot)

#### Defined in

[Vector4.ts:226](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L226)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector4 has a NaN value

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[HasNaN](../wiki/Vector3#hasnan)

#### Defined in

[Vector4.ts:68](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L68)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector4 is all NaN

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[IsNaN](../wiki/Vector3#isnan)

#### Defined in

[Vector4.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L60)

___

### Scale

▸ **Scale**(`_scalar`): [`Vector4`](../wiki/Vector4)

Calcualte the scaled value of a Vector4 and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Scale](../wiki/Vector3#scale)

#### Defined in

[Vector4.ts:204](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L204)

___

### Subtract

▸ **Subtract**(`_vector`): [`Vector4`](../wiki/Vector4)

Subract two Vector4's values and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Subtract](../wiki/Vector3#subtract)

#### Defined in

[Vector4.ts:182](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L182)

___

### add

▸ **add**(`_vector`): [`Vector4`](../wiki/Vector4)

Add two Vector4's values and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[add](../wiki/Vector3#add)

#### Defined in

[Vector4.ts:150](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L150)

___

### clone

▸ **clone**(): [`Vector4`](../wiki/Vector4)

Returns a new Vector4 with the same values as this Vector4

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[clone](../wiki/Vector3#clone)

#### Defined in

[Vector4.ts:141](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L141)

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

#### Inherited from

[Vector3](../wiki/Vector3).[distance](../wiki/Vector3#distance)

#### Defined in

[Vector3.ts:236](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector3.ts#L236)

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

#### Inherited from

[Vector3](../wiki/Vector3).[distanceSqr](../wiki/Vector3#distancesqr)

#### Defined in

[Vector3.ts:246](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector3.ts#L246)

___

### dot

▸ **dot**(`_vector`): [`Vector4`](../wiki/Vector4)

Calcualte the dot product of two Vector4's and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[dot](../wiki/Vector3#dot)

#### Defined in

[Vector4.ts:216](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L216)

___

### equals

▸ **equals**(`o`): `boolean`

Returns if an object is the same as this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[equals](../wiki/Vector3#equals)

#### Defined in

[Vector4.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L51)

___

### scale

▸ **scale**(`_scalar`): [`Vector4`](../wiki/Vector4)

Calcualte the scaled value of a Vector4 and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[scale](../wiki/Vector3#scale)

#### Defined in

[Vector4.ts:194](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L194)

___

### set

▸ **set**(`x`, `y`, `z`, `w?`): [`Vector4`](../wiki/Vector4)

Set this Vector4's x value to be the parameter's value and apply the values to this Vector4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x value to set |
| `y` | `number` | The y value to set |
| `z` | `number` | The z value to set |
| `w?` | `number` | The w value to set |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[set](../wiki/Vector3#set)

#### Defined in

[Vector4.ts:108](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L108)

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

[Vector3](../wiki/Vector3).[setVector2](../wiki/Vector3#setvector2)

#### Defined in

[Vector2.ts:128](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L128)

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

#### Inherited from

[Vector3](../wiki/Vector3).[setVector3](../wiki/Vector3#setvector3)

#### Defined in

[Vector3.ts:128](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector3.ts#L128)

___

### setVector4

▸ **setVector4**(`_vector`): ``null`` \| [`Vector4`](../wiki/Vector4)

Set this Vector4's values to be the parameter's values and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

``null`` \| [`Vector4`](../wiki/Vector4)

#### Defined in

[Vector4.ts:130](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L130)

___

### setW

▸ **setW**(`w`): [`Vector3`](../wiki/Vector3)

Set this Vector4's w value to be the parameter's value and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Defined in

[Vector4.ts:119](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L119)

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

[Vector3](../wiki/Vector3).[setX](../wiki/Vector3#setx)

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

#### Inherited from

[Vector3](../wiki/Vector3).[setY](../wiki/Vector3#sety)

#### Defined in

[Vector2.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector2.ts#L117)

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

#### Inherited from

[Vector3](../wiki/Vector3).[setZ](../wiki/Vector3#setz)

#### Defined in

[Vector3.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector3.ts#L117)

___

### subtract

▸ **subtract**(`_vector`): [`Vector4`](../wiki/Vector4)

Subract two Vector4's values and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[subtract](../wiki/Vector3#subtract)

#### Defined in

[Vector4.ts:172](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L172)

___

### vector2

▸ **vector2**(): [`Vector2`](../wiki/Vector2)

Returns a Vector2 version of this Vector3

#### Returns

[`Vector2`](../wiki/Vector2)

#### Inherited from

[Vector3](../wiki/Vector3).[vector2](../wiki/Vector3#vector2)

#### Defined in

[Vector3.ts:95](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector3.ts#L95)

___

### vector3

▸ **vector3**(): [`Vector3`](../wiki/Vector3)

Returns a Vector3 version of this Vector4

#### Returns

[`Vector3`](../wiki/Vector3)

#### Defined in

[Vector4.ts:96](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L96)

___

### NaN

▸ `Static` **NaN**(): [`Vector4`](../wiki/Vector4)

Create a Vector4 filled with NaN

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[NaN](../wiki/Vector3#nan)

#### Defined in

[Vector4.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L26)

___

### One

▸ `Static` **One**(): [`Vector4`](../wiki/Vector4)

Create a Vector4 filled with 1

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[One](../wiki/Vector3#one)

#### Defined in

[Vector4.ts:42](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L42)

___

### Zero

▸ `Static` **Zero**(): [`Vector4`](../wiki/Vector4)

Create a Vector4 filled with 0

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Zero](../wiki/Vector3#zero)

#### Defined in

[Vector4.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L34)

___

### hasNaN

▸ `Static` **hasNaN**(`o`): `boolean`

Returns if a Vector4 has a NaN value

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[hasNaN](../wiki/Vector3#hasnan)

#### Defined in

[Vector4.ts:87](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L87)

___

### isNaN

▸ `Static` **isNaN**(`o`): `boolean`

Returns if a Vector4 is all NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[isNaN](../wiki/Vector3#isnan)

#### Defined in

[Vector4.ts:77](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/41daecf/Code/src/cMaths/Vector4.ts#L77)
