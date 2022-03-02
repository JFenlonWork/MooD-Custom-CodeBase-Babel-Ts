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

[Vector4.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L16)

## Properties

### w

• **w**: `number`

#### Defined in

[Vector4.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L7)

___

### x

• **x**: `number`

#### Inherited from

[Vector3](../wiki/Vector3).[x](../wiki/Vector3#x)

#### Defined in

[Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L5)

___

### y

• **y**: `number`

#### Inherited from

[Vector3](../wiki/Vector3).[y](../wiki/Vector3#y)

#### Defined in

[Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector2.ts#L6)

___

### z

• **z**: `number`

#### Inherited from

[Vector3](../wiki/Vector3).[z](../wiki/Vector3#z)

#### Defined in

[Vector3.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L7)

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

[Vector4.ts:100](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L100)

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

[Vector4.ts:166](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L166)

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

[Vector4.ts:144](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L144)

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

[Vector4.ts:122](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L122)

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

[Vector4.ts:90](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L90)

___

### clone

▸ **clone**(): [`Vector4`](../wiki/Vector4)

Returns a new Vector4 with the same values as this Vector4

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[clone](../wiki/Vector3#clone)

#### Defined in

[Vector4.ts:81](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L81)

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

#### Inherited from

[Vector3](../wiki/Vector3).[distanceSqr](../wiki/Vector3#distancesqr)

#### Defined in

[Vector3.ts:186](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L186)

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

[Vector4.ts:156](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L156)

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

[Vector4.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L27)

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

[Vector4.ts:134](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L134)

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

[Vector4.ts:48](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L48)

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

#### Inherited from

[Vector3](../wiki/Vector3).[setVector3](../wiki/Vector3#setvector3)

#### Defined in

[Vector3.ts:68](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L68)

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

[Vector4.ts:70](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L70)

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

[Vector4.ts:59](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L59)

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

[Vector3](../wiki/Vector3).[setY](../wiki/Vector3#sety)

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

#### Inherited from

[Vector3](../wiki/Vector3).[setZ](../wiki/Vector3#setz)

#### Defined in

[Vector3.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L57)

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

[Vector4.ts:112](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L112)

___

### vector2

▸ **vector2**(): [`Vector2`](../wiki/Vector2)

Returns a Vector2 version of this Vector3

#### Returns

[`Vector2`](../wiki/Vector2)

#### Inherited from

[Vector3](../wiki/Vector3).[vector2](../wiki/Vector3#vector2)

#### Defined in

[Vector3.ts:35](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector3.ts#L35)

___

### vector3

▸ **vector3**(): [`Vector3`](../wiki/Vector3)

Returns a Vector3 version of this Vector4

#### Returns

[`Vector3`](../wiki/Vector3)

#### Defined in

[Vector4.ts:36](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Vector4.ts#L36)
