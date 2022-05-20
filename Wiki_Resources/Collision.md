# Class: Collision

Class representing all collision based functions needed for math calculations.

## Table of contents

### Constructors

- [constructor](../wiki/Collision#constructor)

### Methods

- [checkAreaIntersectsArea](../wiki/Collision#checkareaintersectsarea)
- [checkAreaOverlapArea](../wiki/Collision#checkareaoverlaparea)
- [checkAreaWithinArea](../wiki/Collision#checkareawithinarea)
- [checkPointWithinArea](../wiki/Collision#checkpointwithinarea)
- [returnObjectsIntersectArea](../wiki/Collision#returnobjectsintersectarea)
- [returnObjectsOverlapArea](../wiki/Collision#returnobjectsoverlaparea)
- [returnObjectsWithinArea](../wiki/Collision#returnobjectswithinarea)

## Constructors

### constructor

• **new Collision**()

## Methods

### checkAreaIntersectsArea

▸ `Static` **checkAreaIntersectsArea**(`areaBounds`, `otherBounds`): `boolean`

Calculate if otherBounds is intersects areaBounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaBounds` | [`Bounds`](../wiki/Bounds) |
| `otherBounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

`boolean`

#### Defined in

[Maths/Collision.ts:65](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/64d10db/Code/src/Maths/Collision.ts#L65)

___

### checkAreaOverlapArea

▸ `Static` **checkAreaOverlapArea**(`areaBounds`, `otherBounds`): `boolean`

Calculate if otherBounds is overlapping areaBounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaBounds` | [`Bounds`](../wiki/Bounds) |
| `otherBounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

`boolean`

#### Defined in

[Maths/Collision.ts:50](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/64d10db/Code/src/Maths/Collision.ts#L50)

___

### checkAreaWithinArea

▸ `Static` **checkAreaWithinArea**(`areaBounds`, `otherBounds`): `boolean`

Calculate if otherBounds is within areaBounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaBounds` | [`Bounds`](../wiki/Bounds) |
| `otherBounds` | [`Bounds`](../wiki/Bounds) |

#### Returns

`boolean`

#### Defined in

[Maths/Collision.ts:32](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/64d10db/Code/src/Maths/Collision.ts#L32)

___

### checkPointWithinArea

▸ `Static` **checkPointWithinArea**(`areaBounds`, `point`): `boolean`

Calculate if a point is within an area bounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaBounds` | [`Bounds`](../wiki/Bounds) |
| `point` | [`Vector2`](../wiki/Vector2) |

#### Returns

`boolean`

#### Defined in

[Maths/Collision.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/64d10db/Code/src/Maths/Collision.ts#L15)

___

### returnObjectsIntersectArea

▸ `Static` **returnObjectsIntersectArea**(`areaBounds`, `objects`): `object`[]

Calculate if objects are intersecting areaBounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaBounds` | [`Bounds`](../wiki/Bounds) |
| `objects` | `HTMLElement` \| `HTMLElement`[] |

#### Returns

`object`[]

#### Defined in

[Maths/Collision.ts:175](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/64d10db/Code/src/Maths/Collision.ts#L175)

___

### returnObjectsOverlapArea

▸ `Static` **returnObjectsOverlapArea**(`areaBounds`, `objects`): `object`[]

Calculate if objects are overlapping areaBounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaBounds` | [`Bounds`](../wiki/Bounds) |
| `objects` | `HTMLElement` \| `HTMLElement`[] |

#### Returns

`object`[]

#### Defined in

[Maths/Collision.ts:147](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/64d10db/Code/src/Maths/Collision.ts#L147)

___

### returnObjectsWithinArea

▸ `Static` **returnObjectsWithinArea**(`areaBounds`, `objects`): `object`[]

Calculate if objects are within areaBounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaBounds` | [`Bounds`](../wiki/Bounds) |
| `objects` | `HTMLElement` \| `HTMLElement`[] |

#### Returns

`object`[]

#### Defined in

[Maths/Collision.ts:119](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/64d10db/Code/src/Maths/Collision.ts#L119)
