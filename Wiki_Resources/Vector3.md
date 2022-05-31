# Class: Vector3

Class representing a Vector3 which hold three floats.

## Hierarchy

- [`Vector2`](../wiki/Vector2)

  ↳ **`Vector3`**

  ↳↳ [`Vector4`](../wiki/Vector4)

## Table of contents

### Constructors

- [constructor](../wiki/Vector3#constructor)

### Properties

- [\_z](../wiki/Vector3#_z)

### Accessors

- [x](../wiki/Vector3#x)
- [y](../wiki/Vector3#y)
- [z](../wiki/Vector3#z)

### Methods

- [Add](../wiki/Vector3#add)
- [Divide](../wiki/Vector3#divide)
- [DivideVector](../wiki/Vector3#dividevector)
- [HasNaN](../wiki/Vector3#hasnan)
- [IsNaN](../wiki/Vector3#isnan)
- [Multiply](../wiki/Vector3#multiply)
- [MultiplyVector](../wiki/Vector3#multiplyvector)
- [Subtract](../wiki/Vector3#subtract)
- [add](../wiki/Vector3#add)
- [clone](../wiki/Vector3#clone)
- [distance](../wiki/Vector3#distance)
- [distanceSqr](../wiki/Vector3#distancesqr)
- [divide](../wiki/Vector3#divide)
- [divideVector](../wiki/Vector3#dividevector)
- [equals](../wiki/Vector3#equals)
- [multiply](../wiki/Vector3#multiply)
- [multiplyVector](../wiki/Vector3#multiplyvector)
- [set](../wiki/Vector3#set)
- [setVector2](../wiki/Vector3#setvector2)
- [setVector3](../wiki/Vector3#setvector3)
- [subtract](../wiki/Vector3#subtract)
- [toString](../wiki/Vector3#tostring)
- [vector2](../wiki/Vector3#vector2)
- [NaN](../wiki/Vector3#nan)
- [One](../wiki/Vector3#one)
- [Zero](../wiki/Vector3#zero)
- [hasNaN](../wiki/Vector3#hasnan)
- [isNaN](../wiki/Vector3#isnan)
- [toString](../wiki/Vector3#tostring)

## Constructors

### constructor

• **new Vector3**(`x?`, `y?`, `z?`)

Create a Vector3

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `NaN` | The x value to set |
| `y` | `number` | `NaN` | The y value to set |
| `z` | `number` | `NaN` | The z value to set |

#### Overrides

[Vector2](../wiki/Vector2).[constructor](../wiki/Vector2#constructor)

#### Defined in

[Maths/Vector3.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L23)

## Properties

### \_z

• `Private` **\_z**: `number` = `NaN`

#### Defined in

[Maths/Vector3.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L7)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Vector2.x

#### Defined in

[Maths/Vector2.ts:6](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector2.ts#L6)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector2.x

#### Defined in

[Maths/Vector2.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector2.ts#L10)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Vector2.y

#### Defined in

[Maths/Vector2.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector2.ts#L16)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector2.y

#### Defined in

[Maths/Vector2.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector2.ts#L20)

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Vector3.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L8)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Vector3.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L12)

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

[Maths/Vector3.ts:169](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L169)

___

### Divide

▸ **Divide**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the divided value of a Vector3 and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Divide](../wiki/Vector2#divide)

#### Defined in

[Maths/Vector3.ts:257](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L257)

___

### DivideVector

▸ **DivideVector**(`_vector`): [`Vector3`](../wiki/Vector3)

Calcualte the divded value of two Vector2's and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[DivideVector](../wiki/Vector2#dividevector)

#### Defined in

[Maths/Vector3.ts:279](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L279)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector3 has a NaN value

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[HasNaN](../wiki/Vector2#hasnan)

#### Defined in

[Maths/Vector3.ts:114](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L114)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector3 is all NaN

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[IsNaN](../wiki/Vector2#isnan)

#### Defined in

[Maths/Vector3.ts:106](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L106)

___

### Multiply

▸ **Multiply**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the multiplied value of a Vector3 and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Multiply](../wiki/Vector2#multiply)

#### Defined in

[Maths/Vector3.ts:213](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L213)

___

### MultiplyVector

▸ **MultiplyVector**(`_vector`): [`Vector3`](../wiki/Vector3)

Calcualte the multiplied value of two Vector3's and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[MultiplyVector](../wiki/Vector2#multiplyvector)

#### Defined in

[Maths/Vector3.ts:235](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L235)

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

[Maths/Vector3.ts:191](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L191)

___

### add

▸ **add**(`_vector`): [`Vector3`](../wiki/Vector3)

Add two Vector3's values and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[add](../wiki/Vector2#add)

#### Defined in

[Maths/Vector3.ts:159](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L159)

___

### clone

▸ **clone**(): [`Vector3`](../wiki/Vector3)

Returns a new Vector3 with the same values as this Vector3

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[clone](../wiki/Vector2#clone)

#### Defined in

[Maths/Vector3.ts:150](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L150)

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

[Maths/Vector3.ts:291](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L291)

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

[Maths/Vector3.ts:301](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L301)

___

### divide

▸ **divide**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the divided value of a Vector3 and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[divide](../wiki/Vector2#divide)

#### Defined in

[Maths/Vector3.ts:247](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L247)

___

### divideVector

▸ **divideVector**(`_vector`): [`Vector3`](../wiki/Vector3)

Calcualte the divided value of two Vector3's and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[divideVector](../wiki/Vector2#dividevector)

#### Defined in

[Maths/Vector3.ts:269](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L269)

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

[Maths/Vector3.ts:97](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L97)

___

### multiply

▸ **multiply**(`_scalar`): [`Vector3`](../wiki/Vector3)

Calcualte the multiplied value of a Vector3 and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[multiply](../wiki/Vector2#multiply)

#### Defined in

[Maths/Vector3.ts:203](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L203)

___

### multiplyVector

▸ **multiplyVector**(`_vector`): [`Vector3`](../wiki/Vector3)

Calcualte the multiplied value of two Vector3's and return the result in a new Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[multiplyVector](../wiki/Vector2#multiplyvector)

#### Defined in

[Maths/Vector3.ts:225](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L225)

___

### set

▸ **set**(`x`, `y`, `z?`): [`Vector3`](../wiki/Vector3)

Set this Vector3's x,y and z value to be the parameter's value and apply the values to this Vector3

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `undefined` | The x value to set |
| `y` | `number` | `undefined` | The y value to set |
| `z` | `number` | `0` | The z value to set |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[set](../wiki/Vector2#set)

#### Defined in

[Maths/Vector3.ts:50](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L50)

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

#### Inherited from

[Vector2](../wiki/Vector2).[setVector2](../wiki/Vector2#setvector2)

#### Defined in

[Maths/Vector2.ts:52](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector2.ts#L52)

___

### setVector3

▸ **setVector3**(`_vector`): [`Vector3`](../wiki/Vector3)

Set this Vector3's values to be the parameter's values and apply the values to this Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector3`](../wiki/Vector3) |

#### Returns

[`Vector3`](../wiki/Vector3)

#### Defined in

[Maths/Vector3.ts:61](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L61)

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

[Maths/Vector3.ts:181](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L181)

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Overrides

[Vector2](../wiki/Vector2).[toString](../wiki/Vector2#tostring)

#### Defined in

[Maths/Vector3.ts:32](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L32)

___

### vector2

▸ **vector2**(): [`Vector2`](../wiki/Vector2)

Returns a Vector2 version of this Vector3

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Vector3.ts:142](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L142)

___

### NaN

▸ `Static` **NaN**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with NaN

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[NaN](../wiki/Vector2#nan)

#### Defined in

[Maths/Vector3.ts:72](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L72)

___

### One

▸ `Static` **One**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with 1

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[One](../wiki/Vector2#one)

#### Defined in

[Maths/Vector3.ts:88](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L88)

___

### Zero

▸ `Static` **Zero**(): [`Vector3`](../wiki/Vector3)

Create a Vector3 filled with 0

#### Returns

[`Vector3`](../wiki/Vector3)

#### Overrides

[Vector2](../wiki/Vector2).[Zero](../wiki/Vector2#zero)

#### Defined in

[Maths/Vector3.ts:80](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L80)

___

### hasNaN

▸ `Static` **hasNaN**(`o`): `boolean`

Returns if a Vector3 has a NaN value

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[hasNaN](../wiki/Vector2#hasnan)

#### Defined in

[Maths/Vector3.ts:133](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L133)

___

### isNaN

▸ `Static` **isNaN**(`o`): `boolean`

Returns if a Vector3 is all NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector2](../wiki/Vector2).[isNaN](../wiki/Vector2#isnan)

#### Defined in

[Maths/Vector3.ts:123](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L123)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Overrides

[Vector2](../wiki/Vector2).[toString](../wiki/Vector2#tostring)

#### Defined in

[Maths/Vector3.ts:39](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L39)
