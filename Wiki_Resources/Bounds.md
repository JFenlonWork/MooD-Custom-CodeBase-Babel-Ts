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
- [\_webFormat](../wiki/Bounds#_webformat)
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
- [webFormat](../wiki/Bounds#webformat)
- [x1](../wiki/Bounds#x1)
- [x2](../wiki/Bounds#x2)
- [y1](../wiki/Bounds#y1)
- [y2](../wiki/Bounds#y2)

### Methods

- [Add](../wiki/Bounds#add)
- [ConvertFromWeb](../wiki/Bounds#convertfromweb)
- [ConvertToWeb](../wiki/Bounds#converttoweb)
- [Dot](../wiki/Bounds#dot)
- [HasNaN](../wiki/Bounds#hasnan)
- [IsNaN](../wiki/Bounds#isnan)
- [Scale](../wiki/Bounds#scale)
- [Subtract](../wiki/Bounds#subtract)
- [add](../wiki/Bounds#add)
- [clone](../wiki/Bounds#clone)
- [convertFromWeb](../wiki/Bounds#convertfromweb)
- [convertToWeb](../wiki/Bounds#converttoweb)
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

• **new Bounds**(`x1`, `y1`, `x2`, `y2`, `isWebFormat?`)

Create a Bounds

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x1` | `number` | `undefined` | The first point x value to set |
| `y1` | `number` | `undefined` | The first point y value to set |
| `x2` | `number` | `undefined` | The second point x value to set |
| `y2` | `number` | `undefined` | The second point y value to set |
| `isWebFormat` | `boolean` | `false` | If this bounds is in web format (Y's are flipped) |

#### Defined in

[Maths/Bounds.ts:165](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L165)

## Properties

### \_bottomLeft

• **\_bottomLeft**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:138](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L138)

___

### \_bottomRight

• **\_bottomRight**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:128](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L128)

___

### \_size

• **\_size**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:148](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L148)

___

### \_topLeft

• `Private` **\_topLeft**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:108](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L108)

___

### \_topRight

• **\_topRight**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:118](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L118)

___

### \_webFormat

• `Private` **\_webFormat**: `boolean` = `false`

#### Defined in

[Maths/Bounds.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L10)

___

### \_x1

• `Private` **\_x1**: `number` = `NaN`

#### Defined in

[Maths/Bounds.ts:19](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L19)

___

### \_x2

• `Private` **\_x2**: `number` = `NaN`

#### Defined in

[Maths/Bounds.ts:63](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L63)

___

### \_y1

• `Private` **\_y1**: `number` = `NaN`

#### Defined in

[Maths/Bounds.ts:41](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L41)

___

### \_y2

• `Private` **\_y2**: `number` = `NaN`

#### Defined in

[Maths/Bounds.ts:85](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L85)

## Accessors

### bottomLeft

• `get` **bottomLeft**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:139](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L139)

• `set` **bottomLeft**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:143](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L143)

___

### bottomRight

• `get` **bottomRight**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:129](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L129)

• `set` **bottomRight**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:133](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L133)

___

### size

• `get` **size**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:149](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L149)

• `set` **size**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:153](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L153)

___

### topLeft

• `get` **topLeft**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:109](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L109)

• `set` **topLeft**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:113](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L113)

___

### topRight

• `get` **topRight**(): [`Vector2`](../wiki/Vector2)

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Bounds.ts:119](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L119)

• `set` **topRight**(`vector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:123](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L123)

___

### webFormat

• `get` **webFormat**(): `boolean`

#### Returns

`boolean`

#### Defined in

[Maths/Bounds.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L11)

• `set` **webFormat**(`isWebFormat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isWebFormat` | `boolean` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L15)

___

### x1

• `get` **x1**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Bounds.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L20)

• `set` **x1**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:24](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L24)

___

### x2

• `get` **x2**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Bounds.ts:64](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L64)

• `set` **x2**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:68](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L68)

___

### y1

• `get` **y1**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Bounds.ts:42](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L42)

• `set` **y1**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:46](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L46)

___

### y2

• `get` **y2**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Bounds.ts:86](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L86)

• `set` **y2**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Bounds.ts:90](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L90)

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

[Maths/Bounds.ts:277](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L277)

___

### ConvertFromWeb

▸ **ConvertFromWeb**(): [`Bounds`](../wiki/Bounds)

Returns a this bound with it's Y's respective of origin in bottom left

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:388](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L388)

___

### ConvertToWeb

▸ **ConvertToWeb**(): [`Bounds`](../wiki/Bounds)

Returns this bound with it's Y's respective of origin in top left

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:407](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L407)

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

[Maths/Bounds.ts:345](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L345)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Bounds has a NaN value

#### Returns

`boolean`

#### Defined in

[Maths/Bounds.ts:229](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L229)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Bounds is all NaN

#### Returns

`boolean`

#### Defined in

[Maths/Bounds.ts:221](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L221)

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

[Maths/Bounds.ts:322](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L322)

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

[Maths/Bounds.ts:300](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L300)

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

[Maths/Bounds.ts:266](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L266)

___

### clone

▸ **clone**(): [`Bounds`](../wiki/Bounds)

Returns a new Bounds with the same values as this Bounds

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:257](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L257)

___

### convertFromWeb

▸ **convertFromWeb**(): [`Bounds`](../wiki/Bounds)

Returns a new Bounds that has it's Y's respective of origin in bottom left

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:379](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L379)

___

### convertToWeb

▸ **convertToWeb**(): [`Bounds`](../wiki/Bounds)

Returns a new Bounds that has it's Y's respective of origin in top left

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:398](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L398)

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

[Maths/Bounds.ts:334](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L334)

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

[Maths/Bounds.ts:212](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L212)

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

[Maths/Bounds.ts:312](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L312)

___

### set

▸ **set**(`x1`, `y1`, `x2`, `y2`, `isWebFormat?`): [`Bounds`](../wiki/Bounds)

Set this Bounds's values to be the parameter's values and apply the values to this Bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The x1 value to set |
| `y1` | `number` | The y1 value to set |
| `x2` | `number` | - |
| `y2` | `number` | The x2 value to set |
| `isWebFormat` | `boolean` | If this bounds is in web format (Y's are flipped) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:182](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L182)

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

[Maths/Bounds.ts:289](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L289)

___

### NaN

▸ `Static` **NaN**(): [`Bounds`](../wiki/Bounds)

Create a Bounds filled with NaN

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:195](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L195)

___

### Zero

▸ `Static` **Zero**(): [`Bounds`](../wiki/Bounds)

Create a Bounds filled with 0

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:203](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L203)

___

### fromObject

▸ `Static` **fromObject**(`_object`, `_relative?`, `_includeChildren?`): [`Bounds`](../wiki/Bounds)

Create a bounds from a set of HTML DOMs

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_object` | `String` \| `HTMLElement` | `undefined` | - |
| `_relative` | ``null`` \| `HTMLElement` \| `Document` | `document` | Determines if the Bounds should be created in relation to another object |
| `_includeChildren?` | `string`[] | `undefined` | An array of strings that are used to include children DOMs of the _objects |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Maths/Bounds.ts:420](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L420)

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

[Maths/Bounds.ts:359](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L359)

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

[Maths/Bounds.ts:370](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L370)

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

[Maths/Bounds.ts:248](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L248)

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

[Maths/Bounds.ts:238](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/88a4aaa/Code/src/Maths/Bounds.ts#L238)
