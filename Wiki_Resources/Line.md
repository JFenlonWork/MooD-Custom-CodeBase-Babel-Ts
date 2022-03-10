# Class: Line

Class representing a Line which hold two points.

## Table of contents

### Constructors

- [constructor](../wiki/Line#constructor)

### Properties

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
- [setX1](../wiki/Line#setx1)
- [setX2](../wiki/Line#setx2)
- [setY1](../wiki/Line#sety1)
- [setY2](../wiki/Line#sety2)
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

[Line.ts:21](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L21)

## Properties

### x1

• **x1**: `number`

#### Defined in

[Line.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L9)

___

### x2

• **x2**: `number`

#### Defined in

[Line.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L11)

___

### y1

• **y1**: `number`

#### Defined in

[Line.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L10)

___

### y2

• **y2**: `number`

#### Defined in

[Line.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L12)

## Methods

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Line has a NaN value

#### Returns

`boolean`

#### Defined in

[Line.ts:68](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L68)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Line is all NaN

#### Returns

`boolean`

#### Defined in

[Line.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L60)

___

### clone

▸ **clone**(): [`Line`](../wiki/Line)

Returns a new Line with the same values as this Line

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Line.ts:156](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L156)

___

### distance

▸ **distance**(): `number`

Calculate the distance the Line's two points

#### Returns

`number`

#### Defined in

[Line.ts:186](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L186)

___

### distanceSqr

▸ **distanceSqr**(): `number`

Calculate the squared distance the Line's two points

#### Returns

`number`

#### Defined in

[Line.ts:194](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L194)

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

[Line.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L51)

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

[Line.ts:100](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L100)

___

### setX1

▸ **setX1**(`x1`): [`Line`](../wiki/Line)

Set this Line's x1 value to be the parameter's value and apply the values to this Line

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Line.ts:113](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L113)

___

### setX2

▸ **setX2**(`x2`): [`Line`](../wiki/Line)

Set this Line's x2 value to be the parameter's value and apply the values to this Line

#### Parameters

| Name | Type |
| :------ | :------ |
| `x2` | `number` |

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Line.ts:135](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L135)

___

### setY1

▸ **setY1**(`y1`): [`Line`](../wiki/Line)

Set this Bounds's y1 value to be the parameter's value and apply the values to this Line

#### Parameters

| Name | Type |
| :------ | :------ |
| `y1` | `number` |

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Line.ts:124](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L124)

___

### setY2

▸ **setY2**(`y2`): [`Line`](../wiki/Line)

Set this Bounds's y2 value to be the parameter's value and apply the values to this Line

#### Parameters

| Name | Type |
| :------ | :------ |
| `y2` | `number` |

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Line.ts:146](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L146)

___

### NaN

▸ `Static` **NaN**(): [`Line`](../wiki/Line)

Create a Line filled with NaN

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Line.ts:34](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L34)

___

### Zero

▸ `Static` **Zero**(): [`Line`](../wiki/Line)

Create a Line filled with 0

#### Returns

[`Line`](../wiki/Line)

#### Defined in

[Line.ts:42](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L42)

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

[Line.ts:166](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L166)

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

[Line.ts:177](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L177)

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

[Line.ts:87](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L87)

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

[Line.ts:77](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L77)

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

[Line.ts:204](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L204)

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

[Line.ts:234](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Line.ts#L234)
