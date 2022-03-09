# Class: Bounds

Class representing a Bounds which hold two points and any extra variables from these points.

## Table of contents

### Constructors

- [constructor](../wiki/Bounds#constructor)

### Properties

- [bottomLeft](../wiki/Bounds#bottomleft)
- [bottomRight](../wiki/Bounds#bottomright)
- [size](../wiki/Bounds#size)
- [topLeft](../wiki/Bounds#topleft)
- [topRight](../wiki/Bounds#topright)
- [x1](../wiki/Bounds#x1)
- [x2](../wiki/Bounds#x2)
- [y1](../wiki/Bounds#y1)
- [y2](../wiki/Bounds#y2)

### Methods

- [Add](../wiki/Bounds#add)
- [Dot](../wiki/Bounds#dot)
- [Scale](../wiki/Bounds#scale)
- [Subtract](../wiki/Bounds#subtract)
- [add](../wiki/Bounds#add)
- [clone](../wiki/Bounds#clone)
- [dot](../wiki/Bounds#dot)
- [equals](../wiki/Bounds#equals)
- [hasNaN](../wiki/Bounds#hasnan)
- [isNaN](../wiki/Bounds#isnan)
- [scale](../wiki/Bounds#scale)
- [set](../wiki/Bounds#set)
- [setX1](../wiki/Bounds#setx1)
- [setX2](../wiki/Bounds#setx2)
- [setY1](../wiki/Bounds#sety1)
- [setY2](../wiki/Bounds#sety2)
- [subtract](../wiki/Bounds#subtract)
- [updateExtras](../wiki/Bounds#updateextras)
- [NaN](../wiki/Bounds#nan)
- [Zero](../wiki/Bounds#zero)
- [fromObject](../wiki/Bounds#fromobject)
- [fromVector2s](../wiki/Bounds#fromvector2s)
- [fromVector4](../wiki/Bounds#fromvector4)
- [hasNaN](../wiki/Bounds#hasnan)
- [isNaN](../wiki/Bounds#isnan)

## Constructors

### constructor

• **new Bounds**(`x1`, `y1`, `x2`, `y2`)

Create a Bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The first point x value to set |
| `y1` | `number` | The first point y value to set |
| `x2` | `number` | The second point x value to set |
| `y2` | `number` | The second point y value to set |

#### Defined in

[Bounds.ts:36](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L36)

## Properties

### bottomLeft

• **bottomLeft**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:24](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L24)

___

### bottomRight

• **bottomRight**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:21](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L21)

___

### size

• **size**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L27)

___

### topLeft

• **topLeft**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L15)

___

### topRight

• **topRight**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:18](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L18)

___

### x1

• **x1**: `number`

#### Defined in

[Bounds.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L9)

___

### x2

• **x2**: `number`

#### Defined in

[Bounds.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L11)

___

### y1

• **y1**: `number`

#### Defined in

[Bounds.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L10)

___

### y2

• **y2**: `number`

#### Defined in

[Bounds.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L12)

## Methods

### Add

▸ **Add**(`_bounds`): [`Bounds`](../wiki/Bounds)

Add two Bounds's values and apply the values to this Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:219](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L219)

___

### Dot

▸ **Dot**(`_bounds`): [`Bounds`](../wiki/Bounds)

Calcualte the dot product of two Bounds's and apply the values to this Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:289](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L289)

___

### Scale

▸ **Scale**(`_scalar`): [`Bounds`](../wiki/Bounds)

Calcualte the scaled value of a Bounds and apply the values to this Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:267](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L267)

___

### Subtract

▸ **Subtract**(`_bounds`): [`Bounds`](../wiki/Bounds)

Subtract two Bounds's values and apply the values to this Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:243](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L243)

___

### add

▸ **add**(`_bounds`): [`Bounds`](../wiki/Bounds)

Add two Bounds's values and return the result in a new Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:209](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L209)

___

### clone

▸ **clone**(): [`Bounds`](../wiki/Bounds)

Returns a new Bounds with the same values as this Bounds

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:200](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L200)

___

### dot

▸ **dot**(`_bounds`): [`Bounds`](../wiki/Bounds)

Calcualte the dot product of two Bounds's and return the result in a new Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:279](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L279)

___

### equals

▸ **equals**(`o`): `boolean`

Returns if an object is the same as this Bound

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Bounds.ts:91](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L91)

___

### hasNaN

▸ **hasNaN**(): `boolean`

Returns if this Bounds has a NaN value

#### Returns

`boolean`

#### Defined in

[Bounds.ts:108](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L108)

___

### isNaN

▸ **isNaN**(): `boolean`

Returns if this Bounds is all NaN

#### Returns

`boolean`

#### Defined in

[Bounds.ts:100](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L100)

___

### scale

▸ **scale**(`_scalar`): [`Bounds`](../wiki/Bounds)

Calcualte the scaled value of a Bounds and return the result in a new Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:257](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L257)

___

### set

▸ **set**(`x1`, `y1`, `x2`, `y2`): [`Bounds`](../wiki/Bounds)

Set this Bounds's values to be the parameter's values and apply the values to this Bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The x1 value to set |
| `y1` | `number` | The y1 value to set |
| `x2` | `number` | - |
| `y2` | `number` | The x2 value to set |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:140](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L140)

___

### setX1

▸ **setX1**(`x1`, `updateExtras?`): [`Bounds`](../wiki/Bounds)

Set this Bounds's x1 value to be the parameter's value and apply the values to this Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `updateExtras?` | `boolean` |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:153](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L153)

___

### setX2

▸ **setX2**(`x2`, `updateExtras?`): [`Bounds`](../wiki/Bounds)

Set this Bounds's x2 value to be the parameter's value and apply the values to this Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `x2` | `number` |
| `updateExtras?` | `boolean` |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:177](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L177)

___

### setY1

▸ **setY1**(`y1`, `updateExtras?`): [`Bounds`](../wiki/Bounds)

Set this Bounds's y1 value to be the parameter's value and apply the values to this Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `y1` | `number` |
| `updateExtras?` | `boolean` |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:165](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L165)

___

### setY2

▸ **setY2**(`y2`, `updateExtras?`): [`Bounds`](../wiki/Bounds)

Set this Bounds's y1 value to be the parameter's value and apply the values to this Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `y2` | `number` |
| `updateExtras?` | `boolean` |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:189](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L189)

___

### subtract

▸ **subtract**(`_bounds`): [`Bounds`](../wiki/Bounds)

Subtract two Bounds's values and return the result in a new Bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:233](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L233)

___

### updateExtras

▸ **updateExtras**(): `void`

Updates any extra variables that are calculated from x1/y1/x2/y2

#### Returns

`void`

#### Defined in

[Bounds.ts:70](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L70)

___

### NaN

▸ `Static` **NaN**(): [`Bounds`](../wiki/Bounds)

Create a Bounds filled with NaN

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:55](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L55)

___

### Zero

▸ `Static` **Zero**(): [`Bounds`](../wiki/Bounds)

Create a Bounds filled with 0

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:63](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L63)

___

### fromObject

▸ `Static` **fromObject**(`_object`, `_relative?`, `_includeChildren?`): [`Bounds`](../wiki/Bounds)

Create a bounds from a set of HTML DOMs

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_object` | `string` \| `HTMLElement` | `undefined` | - |
| `_relative` | `HTMLElement` \| `Document` | `document` | Determines if the Bounds should be created in relation to another object |
| `_includeChildren?` | `string`[] | `undefined` | An array of strings that are used to include children DOMs of the _objects |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:325](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L325)

___

### fromVector2s

▸ `Static` **fromVector2s**(`_pos1`, `_pos2`): [`Bounds`](../wiki/Bounds)

Create a bounds from two Vector2s

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pos1` | [`Vector2`](../wiki/Vector2) |
| `_pos2` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:302](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L302)

___

### fromVector4

▸ `Static` **fromVector4**(`_vector`): [`Bounds`](../wiki/Bounds)

Create a bounds from a Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:313](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L313)

___

### hasNaN

▸ `Static` **hasNaN**(`o`): `boolean`

Returns if a bounds has a NaN value

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Bounds.ts:127](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L127)

___

### isNaN

▸ `Static` **isNaN**(`o`): `boolean`

Returns if a bounds is all NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Defined in

[Bounds.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/7f467f2/Code/src/cMaths/Bounds.ts#L117)
