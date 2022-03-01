# Class: Vector3

Class representing a Vector3 which hold three floats.

## Hierarchy

- [`Vector2`](../wiki/Vector2)

  ↳ **`Vector3`**

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

[Vector3.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L15)

## Properties

### x

• **x**: `number`

#### Inherited from

[Vector2](../wiki/Vector2).[x](../wiki/Vector2#x)

#### Defined in

[Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector2.ts#L5)

___

### y

• **y**: `number`

#### Inherited from

[Vector2](../wiki/Vector2).[y](../wiki/Vector2#y)

#### Defined in

[Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector2.ts#L6)

___

### z

• **z**: `number`

#### Defined in

[Vector3.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L7)

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

[Vector3.ts:90](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L90)

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

[Vector3.ts:156](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L156)

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

[Vector3.ts:134](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L134)

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

[Vector3.ts:112](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L112)

___

### add

▸ **add**(`_vector`): [`Vector3`](../wiki/Vector3)

Add two Vector2's values and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[add](../wiki/Vector2#add)

#### Defined in

[Vector3.ts:80](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L80)

___

### clone

▸ **clone**(): [`Vector3`](../wiki/Vector3)

Returns a new Vector3 with the same values as this Vector3

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[clone](../wiki/Vector2#clone)

#### Defined in

[Vector3.ts:71](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L71)

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

[Vector3.ts:168](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L168)

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

[Vector3.ts:178](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L178)

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

[Vector3.ts:146](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L146)

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

[Vector3.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L26)

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

[Vector3.ts:124](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L124)

___

### set

▸ **set**(`x`, `y`, `z?`): [`Vector3`](../wiki/Vector3)

Set this Vector3's x value to be the parameter's value and apply the values to this Vector3

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

[Vector3.ts:38](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L38)

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

[Vector2.ts:69](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector2.ts#L69)

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

[Vector3.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L60)

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

[Vector2.ts:47](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector2.ts#L47)

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

[Vector2.ts:58](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector2.ts#L58)

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

[Vector3.ts:49](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L49)

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

[Vector3.ts:102](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/ee5fe57/Code/src/cMaths/Vector3.ts#L102)
