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

[Vector3.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L15)

## Properties

### x

• **x**: `number`

#### Inherited from

[Vector2](../wiki/Vector2).[x](../wiki/Vector2#x)

#### Defined in

[Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L5)

___

### y

• **y**: `number`

#### Inherited from

[Vector2](../wiki/Vector2).[y](../wiki/Vector2#y)

#### Defined in

[Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L6)

___

### z

• **z**: `number`

#### Defined in

[Vector3.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L7)

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

[Vector3.ts:98](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L98)

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

[Vector3.ts:164](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L164)

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

[Vector3.ts:142](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L142)

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

[Vector3.ts:120](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L120)

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

[Vector3.ts:88](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L88)

___

### clone

▸ **clone**(): [`Vector3`](../wiki/Vector3)

Returns a new Vector3 with the same values as this Vector3

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[clone](../wiki/Vector2#clone)

#### Defined in

[Vector3.ts:79](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L79)

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

[Vector3.ts:176](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L176)

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

[Vector3.ts:186](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L186)

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

[Vector3.ts:154](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L154)

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

[Vector3.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L26)

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

[Vector3.ts:132](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L132)

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

[Vector3.ts:46](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L46)

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

[Vector2.ts:68](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L68)

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

[Vector3.ts:68](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L68)

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

#### Inherited from

[Vector2](../wiki/Vector2).[setY](../wiki/Vector2#sety)

#### Defined in

[Vector2.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L57)

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

[Vector3.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L57)

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

[Vector3.ts:110](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L110)

___

### vector2

▸ **vector2**(): [`Vector2`](../wiki/Vector2)

Returns a Vector2 version of this Vector3

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Vector3.ts:35](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L35)
