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
- [Divide](../wiki/Vector2#divide)
- [DivideVector](../wiki/Vector2#dividevector)
- [HasNaN](../wiki/Vector2#hasnan)
- [IsNaN](../wiki/Vector2#isnan)
- [Multiply](../wiki/Vector2#multiply)
- [MultiplyVector](../wiki/Vector2#multiplyvector)
- [Subtract](../wiki/Vector2#subtract)
- [add](../wiki/Vector2#add)
- [clone](../wiki/Vector2#clone)
- [distance](../wiki/Vector2#distance)
- [distanceSqr](../wiki/Vector2#distancesqr)
- [divide](../wiki/Vector2#divide)
- [divideVector](../wiki/Vector2#dividevector)
- [equals](../wiki/Vector2#equals)
- [multiply](../wiki/Vector2#multiply)
- [multiplyVector](../wiki/Vector2#multiplyvector)
- [set](../wiki/Vector2#set)
- [setVector2](../wiki/Vector2#setvector2)
- [subtract](../wiki/Vector2#subtract)
- [toString](../wiki/Vector2#tostring)
- [NaN](../wiki/Vector2#nan)
- [One](../wiki/Vector2#one)
- [Zero](../wiki/Vector2#zero)
- [hasNaN](../wiki/Vector2#hasnan)
- [isNaN](../wiki/Vector2#isnan)
- [toString](../wiki/Vector2#tostring)

## Constructors

### constructor

• **new Vector2**(`x?`, `y?`)

Create a Vector2

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `NaN` | The x value to set |
| `y` | `number` | `NaN` | The y value to set |

#### Defined in

[Maths/Vector2.ts:30](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L30)

## Properties

### \_x

• `Private` **\_x**: `number` = `NaN`

#### Defined in

[Maths/Vector2.ts:5](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L5)

___

### \_y

• `Private` **\_y**: `number` = `NaN`

#### Defined in

[Maths/Vector2.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L15)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L6)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Vector2.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L10)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Vector2.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L16)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Vector2.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L20)

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

[Maths/Vector2.ts:167](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L167)

___

### Divide

▸ **Divide**(`_scalar`): [`Vector2`](../wiki/Vector2)

Calcualte the divided value of a Vector2 and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:255](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L255)

___

### DivideVector

▸ **DivideVector**(`_vector`): [`Vector2`](../wiki/Vector2)

Calcualte the divded value of two Vector2's and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:277](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L277)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector2 has a NaN value

#### Returns

`boolean`

#### Defined in

[Maths/Vector2.ts:120](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L120)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector2 is all NaN

#### Returns

`boolean`

#### Defined in

[Maths/Vector2.ts:112](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L112)

___

### Multiply

▸ **Multiply**(`_scalar`): [`Vector2`](../wiki/Vector2)

Calcualte the multiplied value of a Vector2 and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:211](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L211)

___

### MultiplyVector

▸ **MultiplyVector**(`_vector`): [`Vector2`](../wiki/Vector2)

Calcualte the multiplied value of two Vector2's and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:233](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L233)

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

[Maths/Vector2.ts:189](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L189)

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

[Maths/Vector2.ts:157](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L157)

___

### clone

▸ **clone**(): [`Vector2`](../wiki/Vector2)

Returns a new Vector2 with the same values as this Vector2

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:148](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L148)

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

[Maths/Vector2.ts:289](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L289)

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

[Maths/Vector2.ts:299](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L299)

___

### divide

▸ **divide**(`_scalar`): [`Vector2`](../wiki/Vector2)

Calcualte the divided value of a Vector2 and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:245](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L245)

___

### divideVector

▸ **divideVector**(`_vector`): [`Vector2`](../wiki/Vector2)

Calcualte the divided value of two Vector2's and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:267](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L267)

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

[Maths/Vector2.ts:88](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L88)

___

### multiply

▸ **multiply**(`_scalar`): [`Vector2`](../wiki/Vector2)

Calcualte the multiplied value of a Vector2 and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:201](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L201)

___

### multiplyVector

▸ **multiplyVector**(`_vector`): [`Vector2`](../wiki/Vector2)

Calcualte the multiplied value of two Vector2's and return the result in a new Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:223](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L223)

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

[Maths/Vector2.ts:41](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L41)

___

### setVector2

▸ **setVector2**(`_vector`): [`Vector2`](../wiki/Vector2)

Set this Vector2's values to be the parameter's values and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:52](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L52)

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

[Maths/Vector2.ts:179](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L179)

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Defined in

[Maths/Vector2.ts:97](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L97)

___

### NaN

▸ `Static` **NaN**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with NaN

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:63](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L63)

___

### One

▸ `Static` **One**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with 1

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:79](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L79)

___

### Zero

▸ `Static` **Zero**(): [`Vector2`](../wiki/Vector2)

Create a Vector2 filled with 0

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector2.ts:71](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L71)

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

[Maths/Vector2.ts:139](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L139)

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

[Maths/Vector2.ts:129](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L129)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Defined in

[Maths/Vector2.ts:104](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Vector2.ts#L104)
