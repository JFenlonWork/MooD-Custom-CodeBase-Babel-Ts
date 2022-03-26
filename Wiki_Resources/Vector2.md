# Class: Vector2

Class representing a Vector2 which hold two floats.

## Hierarchy

- **`Vector2`**

  ↳ [`Vector3`](../wiki/Vector3)

## Table of contents

### Constructors

- [constructor](../wiki/Vector2#constructor)

### Properties

- [\_x](../wiki/Vector2#_x)
- [\_y](../wiki/Vector2#_y)

### Accessors

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

[Maths/Vector2.ts:30](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L30)

## Properties

### \_x

• `Private` **\_x**: `number` = `NaN`

#### Defined in

[Maths/Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L5)

___

### \_y

• `Private` **\_y**: `number` = `NaN`

#### Defined in

[Maths/Vector2.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L15)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L6)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Vector2.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L10)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Vector2.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L16)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Vector2.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L20)

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

[Maths/Vector2.ts:152](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L152)

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

[Maths/Vector2.ts:218](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L218)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector2 has a NaN value

#### Returns

`boolean`

#### Defined in

[Maths/Vector2.ts:93](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L93)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector2 is all NaN

#### Returns

`boolean`

#### Defined in

[Maths/Vector2.ts:85](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L85)

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

[Maths/Vector2.ts:196](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L196)

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

[Maths/Vector2.ts:174](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L174)

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

[Maths/Vector2.ts:142](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L142)

___

### clone

▸ **clone**(): [`Vector2`](../wiki/Vector2)

Returns a new Vector2 with the same values as this Vector2

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:133](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L133)

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

[Maths/Vector2.ts:230](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L230)

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

[Maths/Vector2.ts:240](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L240)

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

[Maths/Vector2.ts:208](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L208)

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

[Maths/Vector2.ts:76](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L76)

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

[Maths/Vector2.ts:186](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L186)

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

[Maths/Vector2.ts:41](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L41)

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

[Maths/Vector2.ts:122](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L122)

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

[Maths/Vector2.ts:164](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L164)

___

### NaN

▸ `Static` **NaN**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with NaN

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L51)

___

### One

▸ `Static` **One**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with 1

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:67](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L67)

___

### Zero

▸ `Static` **Zero**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with 0

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:59](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L59)

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

[Maths/Vector2.ts:112](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L112)

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

[Maths/Vector2.ts:102](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Maths/Vector2.ts#L102)
