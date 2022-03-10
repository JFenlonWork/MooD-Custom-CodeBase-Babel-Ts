# Class: Collision

Class representing all collision based functions needed for math calculations.

## Table of contents

### Constructors

- [constructor](../wiki/Collision#constructor)

### Methods

- [checkAreaIntersectsArea](../wiki/Collision#checkareaintersectsarea)
- [checkAreaWithinArea](../wiki/Collision#checkareawithinarea)
- [checkPointWithinArea](../wiki/Collision#checkpointwithinarea)
- [returnObjectsIntersectArea](../wiki/Collision#returnobjectsintersectarea)
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

[Collision.ts:47](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Collision.ts#L47)

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

[Collision.ts:31](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Collision.ts#L31)

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

[Collision.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Collision.ts#L15)

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

[Collision.ts:116](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Collision.ts#L116)

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

[Collision.ts:90](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/06f4940/Code/src/cMaths/Collision.ts#L90)
