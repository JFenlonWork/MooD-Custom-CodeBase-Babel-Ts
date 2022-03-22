# Class: Bounds

Class representing a Bounds which hold two points and any extra variables from these points.

## Table of contents

### Constructors

- [constructor](../wiki/Bounds#constructor)

### Properties

- [\_bottomLeft](../wiki/Bounds#_bottomleft)
- [\_bottomRight](../wiki/Bounds#_bottomright)
- [\_size](../wiki/Bounds#_size)
- [\_topLeft](../wiki/Bounds#_topleft)
- [\_topRight](../wiki/Bounds#_topright)
- [\_x1](../wiki/Bounds#_x1)
- [\_x2](../wiki/Bounds#_x2)
- [\_y1](../wiki/Bounds#_y1)
- [\_y2](../wiki/Bounds#_y2)

### Accessors

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
- [HasNaN](../wiki/Bounds#hasnan)
- [IsNaN](../wiki/Bounds#isnan)
- [Scale](../wiki/Bounds#scale)
- [Subtract](../wiki/Bounds#subtract)
- [add](../wiki/Bounds#add)
- [clone](../wiki/Bounds#clone)
- [dot](../wiki/Bounds#dot)
- [equals](../wiki/Bounds#equals)
- [scale](../wiki/Bounds#scale)
- [set](../wiki/Bounds#set)
- [subtract](../wiki/Bounds#subtract)
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

[Maths/Bounds.ts:158](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L158)

## Properties

### \_bottomLeft

• **\_bottomLeft**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:132](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L132)

___

### \_bottomRight

• **\_bottomRight**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:122](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L122)

___

### \_size

• **\_size**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:142](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L142)

___

### \_topLeft

• `Private` **\_topLeft**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:102](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L102)

___

### \_topRight

• **\_topRight**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:112](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L112)

___

### \_x1

• `Private` **\_x1**: `number` = `NaN`

#### Defined in

[Maths/Bounds.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L9)

___

### \_x2

• `Private` **\_x2**: `number` = `NaN`

#### Defined in

[Maths/Bounds.ts:55](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L55)

___

### \_y1

• `Private` **\_y1**: `number` = `NaN`

#### Defined in

[Maths/Bounds.ts:32](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L32)

___

### \_y2

• `Private` **\_y2**: `number` = `NaN`

#### Defined in

[Maths/Bounds.ts:78](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L78)

## Accessors

### bottomLeft

• `get` **bottomLeft**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:133](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L133)

• `set` **bottomLeft**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:137](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L137)

___

### bottomRight

• `get` **bottomRight**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:123](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L123)

• `set` **bottomRight**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:127](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L127)

___

### size

• `get` **size**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:143](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L143)

• `set` **size**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:147](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L147)

___

### topLeft

• `get` **topLeft**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:103](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L103)

• `set` **topLeft**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:107](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L107)

___

### topRight

• `get` **topRight**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:113](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L113)

• `set` **topRight**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:117](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L117)

___

### x1

• `get` **x1**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Bounds.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L10)

• `set` **x1**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:14](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L14)

___

### x2

• `get` **x2**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Bounds.ts:56](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L56)

• `set` **x2**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L60)

___

### y1

• `get` **y1**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Bounds.ts:33](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L33)

• `set` **y1**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:37](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L37)

___

### y2

• `get` **y2**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Bounds.ts:79](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L79)

• `set` **y2**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:83](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L83)

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

[Maths/Bounds.ts:266](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L266)

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

[Maths/Bounds.ts:330](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L330)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Bounds has a NaN value

#### Returns

`boolean`

#### Defined in

[Maths/Bounds.ts:219](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L219)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Bounds is all NaN

#### Returns

`boolean`

#### Defined in

[Maths/Bounds.ts:211](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L211)

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

[Maths/Bounds.ts:308](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L308)

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

[Maths/Bounds.ts:287](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L287)

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

[Maths/Bounds.ts:256](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L256)

___

### clone

▸ **clone**(): [`Bounds`](../wiki/Bounds)

Returns a new Bounds with the same values as this Bounds

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:247](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L247)

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

[Maths/Bounds.ts:320](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L320)

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

[Maths/Bounds.ts:202](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L202)

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

[Maths/Bounds.ts:298](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L298)

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

[Maths/Bounds.ts:173](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L173)

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

[Maths/Bounds.ts:277](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L277)

___

### NaN

▸ `Static` **NaN**(): [`Bounds`](../wiki/Bounds)

Create a Bounds filled with NaN

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:185](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L185)

___

### Zero

▸ `Static` **Zero**(): [`Bounds`](../wiki/Bounds)

Create a Bounds filled with 0

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:193](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L193)

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

[Maths/Bounds.ts:366](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L366)

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

[Maths/Bounds.ts:343](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L343)

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

[Maths/Bounds.ts:354](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L354)

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

[Maths/Bounds.ts:238](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L238)

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

[Maths/Bounds.ts:228](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/a03acf3/Code/src/Maths/Bounds.ts#L228)
