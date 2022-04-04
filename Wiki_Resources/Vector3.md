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
- [Divide](../wiki/Vector3#divide)
- [Dot](../wiki/Vector3#dot)
- [HasNaN](../wiki/Vector3#hasnan)
- [IsNaN](../wiki/Vector3#isnan)
- [Multiply](../wiki/Vector3#multiply)
- [Subtract](../wiki/Vector3#subtract)
- [add](../wiki/Vector3#add)
- [clone](../wiki/Vector3#clone)
- [distance](../wiki/Vector3#distance)
- [distanceSqr](../wiki/Vector3#distancesqr)
- [divide](../wiki/Vector3#divide)
- [dot](../wiki/Vector3#dot)
- [equals](../wiki/Vector3#equals)
- [multiply](../wiki/Vector3#multiply)
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

• **new Vector3**(`x?`, `y?`, `z?`)

Create a Vector3

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `NaN` | The x value to set |
| `y` | `number` | `NaN` | The y value to set |
| `z` | `number` | `NaN` | The z value to set |

#### Overrides

[Vector2](../wiki/Vector2).[constructor](../wiki/Vector2#constructor)

#### Defined in

[Maths/Vector3.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L23)

## Properties

### \_z

• `Private` **\_z**: `number` = `NaN`

#### Defined in

[Maths/Vector3.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L7)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Vector2.x

#### Defined in

[Maths/Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector2.ts#L6)

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

[Maths/Vector2.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector2.ts#L10)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Vector2.y

#### Defined in

[Maths/Vector2.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector2.ts#L16)

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

[Maths/Vector2.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector2.ts#L20)

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Vector3.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L8)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Vector3.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L12)

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

[Maths/Vector3.ts:154](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L154)

___

### Divide

▸ **Divide**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the divided value of a Vector3 and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Divide](../wiki/Vector2#divide)

#### Defined in

[Maths/Vector3.ts:220](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L220)

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

[Maths/Vector3.ts:242](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L242)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector3 has a NaN value

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[HasNaN](../wiki/Vector2#hasnan)

#### Defined in

[Maths/Vector3.ts:99](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L99)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector3 is all NaN

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[IsNaN](../wiki/Vector2#isnan)

#### Defined in

[Maths/Vector3.ts:91](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L91)

___

### Multiply

▸ **Multiply**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the multiplied value of a Vector3 and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Multiply](../wiki/Vector2#multiply)

#### Defined in

[Maths/Vector3.ts:198](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L198)

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

[Maths/Vector3.ts:176](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L176)

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

[Maths/Vector3.ts:144](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L144)

___

### clone

▸ **clone**(): [`Vector3`](../wiki/Vector3)

Returns a new Vector3 with the same values as this Vector3

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[clone](../wiki/Vector2#clone)

#### Defined in

[Maths/Vector3.ts:135](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L135)

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

[Maths/Vector3.ts:254](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L254)

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

[Maths/Vector3.ts:264](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L264)

___

### divide

▸ **divide**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the divided value of a Vector3 and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[divide](../wiki/Vector2#divide)

#### Defined in

[Maths/Vector3.ts:210](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L210)

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

[Maths/Vector3.ts:232](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L232)

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

[Maths/Vector3.ts:82](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L82)

___

### multiply

▸ **multiply**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the multiplied value of a Vector3 and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[multiply](../wiki/Vector2#multiply)

#### Defined in

[Maths/Vector3.ts:188](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L188)

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

[Maths/Vector3.ts:35](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L35)

___

### setVector2

▸ **setVector2**(`_vector`): [`Vector2`](../wiki/Vector2)

Set this Vector2's values to be the parameter's values and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Inherited from

[Vector2](../wiki/Vector2).[setVector2](../wiki/Vector2#setvector2)

#### Defined in

[Maths/Vector2.ts:52](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector2.ts#L52)

___

### setVector3

▸ **setVector3**(`_vector`): [`Vector3`](../wiki/Vector3)

Set this Vector3's values to be the parameter's values and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Defined in

[Maths/Vector3.ts:46](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L46)

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

[Maths/Vector3.ts:166](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L166)

___

### vector2

▸ **vector2**(): [`Vector2`](../wiki/Vector2)

Returns a Vector2 version of this Vector3

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector3.ts:127](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L127)

___

### NaN

▸ `Static` **NaN**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with NaN

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[NaN](../wiki/Vector2#nan)

#### Defined in

[Maths/Vector3.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L57)

___

### One

▸ `Static` **One**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with 1

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[One](../wiki/Vector2#one)

#### Defined in

[Maths/Vector3.ts:73](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L73)

___

### Zero

▸ `Static` **Zero**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with 0

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Zero](../wiki/Vector2#zero)

#### Defined in

[Maths/Vector3.ts:65](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L65)

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

[Maths/Vector3.ts:118](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L118)

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

[Maths/Vector3.ts:108](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/19d4fab/Code/src/Maths/Vector3.ts#L108)
