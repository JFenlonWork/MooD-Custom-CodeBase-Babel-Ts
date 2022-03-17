# Class: Positioning

Class representing all position based functions needed for math calculations.

## Table of contents

### Constructors

- [constructor](../wiki/Positioning#constructor)

### Methods

- [applyPageViewportOffsetFromPage](../wiki/Positioning#applypageviewportoffsetfrompage)
- [getCoords](../wiki/Positioning#getcoords)
- [getPageViewportOffsetFromPage](../wiki/Positioning#getpageviewportoffsetfrompage)
- [translateCssSizes](../wiki/Positioning#translatecsssizes)

## Constructors

### constructor

• **new Positioning**()

## Methods

### applyPageViewportOffsetFromPage

▸ `Static` **applyPageViewportOffsetFromPage**(`_vector`): `void`

Apply viewport offset to a vector

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

Maths/Positioning.ts:24

___

### getCoords

▸ `Static` **getCoords**(`_object`, `_relativeTo?`): [`Vector2`](../wiki/Vector2)

Calculate coordinates of object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_object` | `HTMLElement` | `undefined` | The object to calculate the coordinates for |
| `_relativeTo` | `HTMLElement` \| `Document` | `document` | - |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

Maths/Positioning.ts:34

___

### getPageViewportOffsetFromPage

▸ `Static` **getPageViewportOffsetFromPage**(): [`Vector2`](../wiki/Vector2)

Calculate viewport offset from document origin

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

Maths/Positioning.ts:11

___

### translateCssSizes

▸ `Static` **translateCssSizes**(`_object`, `_css`, `_computedStyle?`): `number`

Calculate sizes of computed style

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_object` | `HTMLElement` | The object to calculate the size on |
| `_css` | `string` | The CSS attribute |
| `_computedStyle?` | `CSSStyleDeclaration` | - |

#### Returns

`number`

#### Defined in

Maths/Positioning.ts:76
