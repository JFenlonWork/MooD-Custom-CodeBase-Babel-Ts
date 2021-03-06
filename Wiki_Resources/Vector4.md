# Class: Vector4

Class representing a Vector3 which hold three floats.

## Hierarchy

- [`Vector3`](../wiki/Vector3)

  ↳ **`Vector4`**

## Table of contents

### Constructors

- [constructor](../wiki/Vector4#constructor)

### Properties

- [\_w](../wiki/Vector4#_w)

### Accessors

- [w](../wiki/Vector4#w)
- [x](../wiki/Vector4#x)
- [y](../wiki/Vector4#y)
- [z](../wiki/Vector4#z)

### Methods

- [Add](../wiki/Vector4#add)
- [Divide](../wiki/Vector4#divide)
- [DivideVector](../wiki/Vector4#dividevector)
- [HasNaN](../wiki/Vector4#hasnan)
- [IsNaN](../wiki/Vector4#isnan)
- [Multiply](../wiki/Vector4#multiply)
- [MultiplyVector](../wiki/Vector4#multiplyvector)
- [Subtract](../wiki/Vector4#subtract)
- [add](../wiki/Vector4#add)
- [clone](../wiki/Vector4#clone)
- [distance](../wiki/Vector4#distance)
- [distanceSqr](../wiki/Vector4#distancesqr)
- [divide](../wiki/Vector4#divide)
- [divideVector](../wiki/Vector4#dividevector)
- [equals](../wiki/Vector4#equals)
- [multiply](../wiki/Vector4#multiply)
- [multiplyVector](../wiki/Vector4#multiplyvector)
- [set](../wiki/Vector4#set)
- [setVector2](../wiki/Vector4#setvector2)
- [setVector3](../wiki/Vector4#setvector3)
- [setVector4](../wiki/Vector4#setvector4)
- [subtract](../wiki/Vector4#subtract)
- [toString](../wiki/Vector4#tostring)
- [vector2](../wiki/Vector4#vector2)
- [vector3](../wiki/Vector4#vector3)
- [NaN](../wiki/Vector4#nan)
- [One](../wiki/Vector4#one)
- [Zero](../wiki/Vector4#zero)
- [hasNaN](../wiki/Vector4#hasnan)
- [isNaN](../wiki/Vector4#isnan)
- [toString](../wiki/Vector4#tostring)

## Constructors

### constructor

• **new Vector4**(`x?`, `y?`, `z?`, `w?`)

Create a Vector3

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `NaN` | The x value to set |
| `y` | `number` | `NaN` | The y value to set |
| `z` | `number` | `NaN` | The z value to set |
| `w` | `number` | `NaN` | The w value to set |

#### Overrides

[Vector3](../wiki/Vector3).[constructor](../wiki/Vector3#constructor)

#### Defined in

[Maths/Vector4.ts:24](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L24)

## Properties

### \_w

• `Private` **\_w**: `number` = `NaN`

#### Defined in

[Maths/Vector4.ts:7](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L7)

## Accessors

### w

• `get` **w**(): `number`

#### Returns

`number`

#### Defined in

[Maths/Vector4.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L8)

• `set` **w**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[Maths/Vector4.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L12)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.x

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

Vector3.x

#### Defined in

[Maths/Vector2.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector2.ts#L10)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.y

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

Vector3.y

#### Defined in

[Maths/Vector2.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector2.ts#L20)

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.z

#### Defined in

[Maths/Vector3.ts:8](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L8)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector3.z

#### Defined in

[Maths/Vector3.ts:12](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L12)

## Methods

### Add

▸ **Add**(`_vector`): [`Vector4`](../wiki/Vector4)

Add two Vector4's values and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Add](../wiki/Vector3#add)

#### Defined in

[Maths/Vector4.ts:171](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L171)

___

### Divide

▸ **Divide**(`_scalar`): [`Vector4`](../wiki/Vector4)

Calcualte the divided value of a Vector4 and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Divide](../wiki/Vector3#divide)

#### Defined in

[Maths/Vector4.ts:259](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L259)

___

### DivideVector

▸ **DivideVector**(`_vector`): [`Vector4`](../wiki/Vector4)

Calcualte the divded value of two Vector2's and apply the values to this Vector2

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[DivideVector](../wiki/Vector3#dividevector)

#### Defined in

[Maths/Vector4.ts:281](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L281)

___

### HasNaN

▸ **HasNaN**(): `boolean`

Returns if this Vector4 has a NaN value

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[HasNaN](../wiki/Vector3#hasnan)

#### Defined in

[Maths/Vector4.ts:116](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L116)

___

### IsNaN

▸ **IsNaN**(): `boolean`

Returns if this Vector4 is all NaN

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[IsNaN](../wiki/Vector3#isnan)

#### Defined in

[Maths/Vector4.ts:108](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L108)

___

### Multiply

▸ **Multiply**(`_scalar`): [`Vector4`](../wiki/Vector4)

Calcualte the multiplied value of a Vector4 and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Multiply](../wiki/Vector3#multiply)

#### Defined in

[Maths/Vector4.ts:215](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L215)

___

### MultiplyVector

▸ **MultiplyVector**(`_vector`): [`Vector4`](../wiki/Vector4)

Calcualte the dot product of two Vector4's and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[MultiplyVector](../wiki/Vector3#multiplyvector)

#### Defined in

[Maths/Vector4.ts:237](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L237)

___

### Subtract

▸ **Subtract**(`_vector`): [`Vector4`](../wiki/Vector4)

Subract two Vector4's values and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Subtract](../wiki/Vector3#subtract)

#### Defined in

[Maths/Vector4.ts:193](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L193)

___

### add

▸ **add**(`_vector`): [`Vector4`](../wiki/Vector4)

Add two Vector4's values and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[add](../wiki/Vector3#add)

#### Defined in

[Maths/Vector4.ts:161](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L161)

___

### clone

▸ **clone**(): [`Vector4`](../wiki/Vector4)

Returns a new Vector4 with the same values as this Vector4

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[clone](../wiki/Vector3#clone)

#### Defined in

[Maths/Vector4.ts:152](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L152)

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

#### Inherited from

[Vector3](../wiki/Vector3).[distance](../wiki/Vector3#distance)

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

#### Inherited from

[Vector3](../wiki/Vector3).[distanceSqr](../wiki/Vector3#distancesqr)

#### Defined in

[Maths/Vector3.ts:301](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L301)

___

### divide

▸ **divide**(`_scalar`): [`Vector4`](../wiki/Vector4)

Calcualte the divided value of a Vector4 and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[divide](../wiki/Vector3#divide)

#### Defined in

[Maths/Vector4.ts:249](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L249)

___

### divideVector

▸ **divideVector**(`_vector`): [`Vector4`](../wiki/Vector4)

Calcualte the divided value of two Vector4's and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[divideVector](../wiki/Vector3#dividevector)

#### Defined in

[Maths/Vector4.ts:271](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L271)

___

### equals

▸ **equals**(`o`): `boolean`

Returns if an object is the same as this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[equals](../wiki/Vector3#equals)

#### Defined in

[Maths/Vector4.ts:99](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L99)

___

### multiply

▸ **multiply**(`_scalar`): [`Vector4`](../wiki/Vector4)

Calcualte the multiplied value of a Vector4 and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scalar` | `number` |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[multiply](../wiki/Vector3#multiply)

#### Defined in

[Maths/Vector4.ts:205](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L205)

___

### multiplyVector

▸ **multiplyVector**(`_vector`): [`Vector4`](../wiki/Vector4)

Calcualte the multiplied value of two Vector4's and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[multiplyVector](../wiki/Vector3#multiplyvector)

#### Defined in

[Maths/Vector4.ts:227](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L227)

___

### set

▸ **set**(`x`, `y`, `z?`, `w?`): [`Vector4`](../wiki/Vector4)

Set this Vector4's x value to be the parameter's value and apply the values to this Vector4

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `undefined` | The x value to set |
| `y` | `number` | `undefined` | The y value to set |
| `z` | `number` | `NaN` | The z value to set |
| `w` | `number` | `NaN` | The w value to set |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[set](../wiki/Vector3#set)

#### Defined in

[Maths/Vector4.ts:52](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L52)

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

[Vector3](../wiki/Vector3).[setVector2](../wiki/Vector3#setvector2)

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

#### Inherited from

[Vector3](../wiki/Vector3).[setVector3](../wiki/Vector3#setvector3)

#### Defined in

[Maths/Vector3.ts:61](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L61)

___

### setVector4

▸ **setVector4**(`_vector`): [`Vector4`](../wiki/Vector4)

Set this Vector4's values to be the parameter's values and apply the values to this Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Defined in

[Maths/Vector4.ts:63](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L63)

___

### subtract

▸ **subtract**(`_vector`): [`Vector4`](../wiki/Vector4)

Subract two Vector4's values and return the result in a new Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector4`](../wiki/Vector4) |

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[subtract](../wiki/Vector3#subtract)

#### Defined in

[Maths/Vector4.ts:183](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L183)

___

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Overrides

[Vector3](../wiki/Vector3).[toString](../wiki/Vector3#tostring)

#### Defined in

[Maths/Vector4.ts:33](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L33)

___

### vector2

▸ **vector2**(): [`Vector2`](../wiki/Vector2)

Returns a Vector2 version of this Vector3

#### Returns

[`Vector2`](../wiki/Vector2)

#### Inherited from

[Vector3](../wiki/Vector3).[vector2](../wiki/Vector3#vector2)

#### Defined in

[Maths/Vector3.ts:142](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector3.ts#L142)

___

### vector3

▸ **vector3**(): [`Vector3`](../wiki/Vector3)

Returns a Vector3 version of this Vector4

#### Returns

[`Vector3`](../wiki/Vector3)

#### Defined in

[Maths/Vector4.ts:144](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L144)

___

### NaN

▸ `Static` **NaN**(): [`Vector4`](../wiki/Vector4)

Create a Vector4 filled with NaN

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[NaN](../wiki/Vector3#nan)

#### Defined in

[Maths/Vector4.ts:74](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L74)

___

### One

▸ `Static` **One**(): [`Vector4`](../wiki/Vector4)

Create a Vector4 filled with 1

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[One](../wiki/Vector3#one)

#### Defined in

[Maths/Vector4.ts:90](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L90)

___

### Zero

▸ `Static` **Zero**(): [`Vector4`](../wiki/Vector4)

Create a Vector4 filled with 0

#### Returns

[`Vector4`](../wiki/Vector4)

#### Overrides

[Vector3](../wiki/Vector3).[Zero](../wiki/Vector3#zero)

#### Defined in

[Maths/Vector4.ts:82](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L82)

___

### hasNaN

▸ `Static` **hasNaN**(`o`): `boolean`

Returns if a Vector4 has a NaN value

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[hasNaN](../wiki/Vector3#hasnan)

#### Defined in

[Maths/Vector4.ts:135](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L135)

___

### isNaN

▸ `Static` **isNaN**(`o`): `boolean`

Returns if a Vector4 is all NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

`boolean`

#### Overrides

[Vector3](../wiki/Vector3).[isNaN](../wiki/Vector3#isnan)

#### Defined in

[Maths/Vector4.ts:125](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L125)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Overrides

[Vector3](../wiki/Vector3).[toString](../wiki/Vector3#tostring)

#### Defined in

[Maths/Vector4.ts:40](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Maths/Vector4.ts#L40)
