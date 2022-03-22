# Class: Line

Class representing a Line which hold two points.

## Table of contents

### Constructors

- [constructor](../wiki/Line#constructor)

### Properties

- [\_x1](../wiki/Line#_x1)
- [\_x2](../wiki/Line#_x2)
- [\_y1](../wiki/Line#_y1)
- [\_y2](../wiki/Line#_y2)

### Accessors

- [x1](../wiki/Line#x1)
- [x2](../wiki/Line#x2)
- [y1](../wiki/Line#y1)
- [y2](../wiki/Line#y2)

### Methods

- [HasNaN](../wiki/Line#hasnan)
- [IsNaN](../wiki/Line#isnan)
- [clone](../wiki/Line#clone)
- [distance](../wiki/Line#distance)
- [distanceSqr](../wiki/Line#distancesqr)
- [equals](../wiki/Line#equals)
- [set](../wiki/Line#set)
- [NaN](../wiki/Line#nan)
- [Zero](../wiki/Line#zero)
- [fromVector2s](../wiki/Line#fromvector2s)
- [fromVector4](../wiki/Line#fromvector4)
- [hasNaN](../wiki/Line#hasnan)
- [isNaN](../wiki/Line#isnan)
- [lineIntersection](../wiki/Line#lineintersection)
- [lineIntersectionWithin](../wiki/Line#lineintersectionwithin)

## Constructors

### constructor

• **new Line**(`x1`, `y1`, `x2`, `y2`)

Create a Bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The first point x value to set |
| `y1` | `number` | The first point y value to set |
| `x2` | `number` | The second point x value to set |
| `y2` | `number` | The second point y value to set |

#### Defined in

[Maths/Line.ts:56](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L56)

## Properties

### \_x1

• `Private` **\_x1**: `number` = `0`

#### Defined in

[Maths/Line.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L9)

___

### \_x2

• `Private` **\_x2**: `number` = `0`

#### Defined in

[Maths/Line.ts:29](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L29)

___

### \_y1

• `Private` **\_y1**: `number` = `0`

#### Defined in

[Maths/Line.ts:19](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L19)

___

### \_y2

• `Private` **\_y2**: `number` = `0`

#### Defined in

[Maths/Line.ts:39](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L39)

## Accessors

### x1

• `get` **x1**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Line.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L10)

• `set` **x1**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Line.ts:14](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L14)

___

### x2

• `get` **x2**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Line.ts:30](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L30)

• `set` **x2**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Line.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L34)

___

### y1

• `get` **y1**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Line.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L20)

• `set` **y1**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Line.ts:24](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L24)

___

### y2

• `get` **y2**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Line.ts:40](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L40)

• `set` **y2**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Line.ts:44](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L44)

## Methods

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Line has a NaN value

#### Returns

`boolean`

#### Defined in

[Maths/Line.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L117)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Line is all NaN

#### Returns

`boolean`

#### Defined in

[Maths/Line.ts:109](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L109)

___

### clone

▸ **clone**(): [`Line`](../wiki/Line)

Returns a new Line with the same values as this Line

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Maths/Line.ts:145](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L145)

___

### distance

▸ **distance**(): `number`

Calculate the distance the Line's two points

#### Returns

`number`

#### Defined in

[Maths/Line.ts:175](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L175)

___

### distanceSqr

▸ **distanceSqr**(): `number`

Calculate the squared distance the Line's two points

#### Returns

`number`

#### Defined in

[Maths/Line.ts:183](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L183)

___

### equals

▸ **equals**(`o`): `boolean`

Returns if an object is the same as this line

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Maths/Line.ts:100](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L100)

___

### set

▸ **set**(`x1`, `y1`, `x2`, `y2`): [`Line`](../wiki/Line)

Set this Line's values to be the parameter's values and apply the values to this Line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The x1 value to set |
| `y1` | `number` | The y1 value to set |
| `x2` | `number` | - |
| `y2` | `number` | The x2 value to set |

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Maths/Line.ts:71](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L71)

___

### NaN

▸ `Static` **NaN**(): [`Line`](../wiki/Line)

Create a Line filled with NaN

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Maths/Line.ts:83](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L83)

___

### Zero

▸ `Static` **Zero**(): [`Line`](../wiki/Line)

Create a Line filled with 0

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Maths/Line.ts:91](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L91)

___

### fromVector2s

▸ `Static` **fromVector2s**(`_pos1`, `_pos2`): [`Line`](../wiki/Line)

Create a Line from two Vector2s

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pos1` | [`Vector2`](../wiki/Vector2) |
| `_pos2` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Maths/Line.ts:155](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L155)

___

### fromVector4

▸ `Static` **fromVector4**(`_vector`): [`Line`](../wiki/Line)

Create a Line from a Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Maths/Line.ts:166](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L166)

___

### hasNaN

▸ `Static` **hasNaN**(`o`): `boolean`

Returns if a line has a NaN value

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Maths/Line.ts:136](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L136)

___

### isNaN

▸ `Static` **isNaN**(`o`): `boolean`

Returns if a line is all NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Maths/Line.ts:126](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L126)

___

### lineIntersection

▸ `Static` **lineIntersection**(`_line1`, `_line2`): [`Vector2`](../wiki/Vector2)

Calculate the intersection point of two Lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `_line1` | [`Line`](../wiki/Line) |
| `_line2` | [`Line`](../wiki/Line) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Line.ts:193](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L193)

___

### lineIntersectionWithin

▸ `Static` **lineIntersectionWithin**(`_line1`, `_line2`): [`Vector2`](../wiki/Vector2)

Calculate the intersection point of two Lines if it is within the line

#### Parameters

| Name | Type |
| :------ | :------ |
| `_line1` | [`Line`](../wiki/Line) |
| `_line2` | [`Line`](../wiki/Line) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Line.ts:223](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/96bdea7/Code/src/Maths/Line.ts#L223)
