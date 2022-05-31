# Class: Positioning

Class representing all position based functions needed for math calculations.

## Table of contents

### Constructors

- [constructor](../wiki/Positioning#constructor)

### Methods

- [addPageViewportOffsetFromPage](../wiki/Positioning#addpageviewportoffsetfrompage)
- [getCoords](../wiki/Positioning#getcoords)
- [getPageViewportOffsetFromPage](../wiki/Positioning#getpageviewportoffsetfrompage)
- [subtractPageViewportOffsetFromPage](../wiki/Positioning#subtractpageviewportoffsetfrompage)
- [translateCssSizes](../wiki/Positioning#translatecsssizes)

## Constructors

### constructor

• **new Positioning**()

## Methods

### addPageViewportOffsetFromPage

▸ `Static` **addPageViewportOffsetFromPage**(`_vector`): `void`

Apply viewport offset to a vector to return coordinates in viewport space

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Positioning.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Positioning.ts#L23)

___

### getCoords

▸ `Static` **getCoords**(`_object`, `_relativeTo?`): [`Vector2`](../wiki/Vector2)

Calculate coordinates of object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_object` | `HTMLElement` | `undefined` | The object to calculate the coordinates for |
| `_relativeTo` | ``null`` \| `HTMLElement` \| `Document` | `document` | - |

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Positioning.ts:41](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Positioning.ts#L41)

___

### getPageViewportOffsetFromPage

▸ `Static` **getPageViewportOffsetFromPage**(): [`Vector2`](../wiki/Vector2)

Calculate viewport offset from document origin

#### Returns

[`Vector2`](../wiki/Vector2)

#### Defined in

[Maths/Positioning.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Positioning.ts#L11)

___

### subtractPageViewportOffsetFromPage

▸ `Static` **subtractPageViewportOffsetFromPage**(`_vector`): `void`

Subtract viewport offset to a vector to return relative coordinates to the document origin

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vector` | [`Vector2`](../wiki/Vector2) |

#### Returns

`void`

#### Defined in

[Maths/Positioning.ts:31](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Positioning.ts#L31)

___

### translateCssSizes

▸ `Static` **translateCssSizes**(`_object`, `_css`, `_computedStyle?`): `number`

Calculate sizes of computed style

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_object` | `HTMLElement` | The object to calculate the size on |
| `_css` | `string` | The CSS attribute |
| `_computedStyle?` | `CSSStyleDeclaration` | The style of the DOM element |

#### Returns

`number`

#### Defined in

[Maths/Positioning.ts:84](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/028c608/Code/src/Maths/Positioning.ts#L84)
