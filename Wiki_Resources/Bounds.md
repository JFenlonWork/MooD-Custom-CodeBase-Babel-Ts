# Class: Bounds

Class representing a Bounds which hold two points and any.

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
- [fromVector2s](../wiki/Bounds#fromvector2s)
- [fromVector4](../wiki/Bounds#fromvector4)
- [scale](../wiki/Bounds#scale)
- [set](../wiki/Bounds#set)
- [setX1](../wiki/Bounds#setx1)
- [setX2](../wiki/Bounds#setx2)
- [setY1](../wiki/Bounds#sety1)
- [setY2](../wiki/Bounds#sety2)
- [subtract](../wiki/Bounds#subtract)
- [updateExtras](../wiki/Bounds#updateextras)

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

[Bounds.ts:25](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L25)

## Properties

### bottomLeft

• **bottomLeft**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L15)

___

### bottomRight

• **bottomRight**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:14](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L14)

___

### size

• **size**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L16)

___

### topLeft

• **topLeft**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L12)

___

### topRight

• **topRight**: [`Vector2`](../wiki/Vector2)

#### Defined in

[Bounds.ts:13](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L13)

___

### x1

• **x1**: `number`

#### Defined in

[Bounds.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L8)

___

### x2

• **x2**: `number`

#### Defined in

[Bounds.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L10)

___

### y1

• **y1**: `number`

#### Defined in

[Bounds.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L9)

___

### y2

• **y2**: `number`

#### Defined in

[Bounds.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L11)

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

[Bounds.ts:156](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L156)

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

[Bounds.ts:226](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L226)

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

[Bounds.ts:204](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L204)

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

[Bounds.ts:180](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L180)

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

[Bounds.ts:146](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L146)

___

### clone

▸ **clone**(): [`Bounds`](../wiki/Bounds)

Returns a new Bounds with the same values as this Bounds

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:137](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L137)

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

[Bounds.ts:216](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L216)

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

[Bounds.ts:64](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L64)

___

### fromVector2s

▸ **fromVector2s**(`_pos1`, `_pos2`): [`Bounds`](../wiki/Bounds)

Create a bounds from two Vector2s

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pos1` | [`Vector2`](../wiki/Vector2) |
| `_pos2` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:239](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L239)

___

### fromVector4

▸ **fromVector4**(`_vector`): [`Bounds`](../wiki/Bounds)

Create a bounds from a Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Bounds`](../wiki/Bounds)

#### Defined in

[Bounds.ts:250](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L250)

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

[Bounds.ts:194](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L194)

___

### set

▸ **set**(`x1`, `y1`, `x2`, `y2`): [`Bounds`](../wiki/Bounds)

Set this Bounds's x value to be the parameter's value and apply the values to this Bounds

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

[Bounds.ts:77](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L77)

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

[Bounds.ts:90](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L90)

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

[Bounds.ts:114](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L114)

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

[Bounds.ts:102](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L102)

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

[Bounds.ts:126](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L126)

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

[Bounds.ts:170](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L170)

___

### updateExtras

▸ **updateExtras**(): `void`

Updates any extra variables that are calculated from x1/y1/x2/y2

#### Returns

`void`

#### Defined in

[Bounds.ts:43](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e642cee/Code/src/cMaths/Bounds.ts#L43)
