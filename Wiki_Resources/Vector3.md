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

- [\_z](../wiki/Vector3#_z)

### Accessors

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

[Maths/Vector3.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L23)

## Properties

### \_z

• `Private` **\_z**: `number` = `NaN`

#### Defined in

[Maths/Vector3.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L7)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Vector2.x

#### Defined in

[Maths/Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector2.ts#L6)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector2.x

#### Defined in

[Maths/Vector2.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector2.ts#L10)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Vector2.y

#### Defined in

[Maths/Vector2.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector2.ts#L16)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector2.y

#### Defined in

[Maths/Vector2.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector2.ts#L20)

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Vector3.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L8)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Vector3.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L12)

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

[Maths/Vector3.ts:154](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L154)

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

[Maths/Vector3.ts:220](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L220)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector3 has a NaN value

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[HasNaN](../wiki/Vector2#hasnan)

#### Defined in

[Maths/Vector3.ts:87](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L87)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector3 is all NaN

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[IsNaN](../wiki/Vector2#isnan)

#### Defined in

[Maths/Vector3.ts:79](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L79)

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

[Maths/Vector3.ts:198](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L198)

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

[Maths/Vector3.ts:176](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L176)

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

[Maths/Vector3.ts:144](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L144)

___

### clone

▸ **clone**(): [`Vector3`](../wiki/Vector3)

Returns a new Vector3 with the same values as this Vector3

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[clone](../wiki/Vector2#clone)

#### Defined in

[Maths/Vector3.ts:135](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L135)

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

[Maths/Vector3.ts:232](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L232)

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

[Maths/Vector3.ts:242](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L242)

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

[Maths/Vector3.ts:210](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L210)

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

[Maths/Vector3.ts:70](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L70)

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

[Maths/Vector3.ts:188](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L188)

___

### set

▸ **set**(`x`, `y`, `z?`): [`Vector3`](../wiki/Vector3)

Set this Vector3's x,y and z value to be the parameter's value and apply the values to this Vector3

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `undefined` | The x value to set |
| `y` | `number` | `undefined` | The y value to set |
| `z` | `number` | `0` | The z value to set |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[set](../wiki/Vector2#set)

#### Defined in

[Maths/Vector3.ts:35](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L35)

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

[Maths/Vector2.ts:122](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector2.ts#L122)

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

[Maths/Vector3.ts:124](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L124)

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

[Maths/Vector3.ts:166](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L166)

___

### vector2

▸ **vector2**(): [`Vector2`](../wiki/Vector2)

Returns a Vector2 version of this Vector3

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector3.ts:115](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L115)

___

### NaN

▸ `Static` **NaN**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with NaN

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[NaN](../wiki/Vector2#nan)

#### Defined in

[Maths/Vector3.ts:45](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L45)

___

### One

▸ `Static` **One**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with 1

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[One](../wiki/Vector2#one)

#### Defined in

[Maths/Vector3.ts:61](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L61)

___

### Zero

▸ `Static` **Zero**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with 0

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Zero](../wiki/Vector2#zero)

#### Defined in

[Maths/Vector3.ts:53](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L53)

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

[Maths/Vector3.ts:106](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L106)

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

[Maths/Vector3.ts:96](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/d57657b/Code/src/Maths/Vector3.ts#L96)
