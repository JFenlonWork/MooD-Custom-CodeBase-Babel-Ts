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

[Maths/Collision.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fc52f80/Code/src/Maths/Collision.ts#L60)

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

[Maths/Collision.ts:47](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fc52f80/Code/src/Maths/Collision.ts#L47)

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

[Maths/Collision.ts:31](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fc52f80/Code/src/Maths/Collision.ts#L31)

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

[Maths/Collision.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fc52f80/Code/src/Maths/Collision.ts#L15)

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

[Maths/Collision.ts:164](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fc52f80/Code/src/Maths/Collision.ts#L164)

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

[Maths/Collision.ts:138](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fc52f80/Code/src/Maths/Collision.ts#L138)

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

[Maths/Collision.ts:112](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/fc52f80/Code/src/Maths/Collision.ts#L112)
