# Class: TooltipManager

Class representing a any utility functions or variables that help Tooltips.

## Table of contents

### Constructors

- [constructor](../wiki/TooltipManager#constructor)

### Properties

- [\_TooltipTypes](../wiki/TooltipManager#_tooltiptypes)
- [\_tooltips](../wiki/TooltipManager#_tooltips)
- [\_uniqueID](../wiki/TooltipManager#_uniqueid)
- [\_instance](../wiki/TooltipManager#_instance)

### Accessors

- [TooltipTypes](../wiki/TooltipManager#tooltiptypes)
- [tooltips](../wiki/TooltipManager#tooltips)
- [uniqueID](../wiki/TooltipManager#uniqueid)
- [Instance](../wiki/TooltipManager#instance)

### Methods

- [addTooltip](../wiki/TooltipManager#addtooltip)
- [addTooltipType](../wiki/TooltipManager#addtooltiptype)
- [getTooltip](../wiki/TooltipManager#gettooltip)
- [getTooltipType](../wiki/TooltipManager#gettooltiptype)
- [removeTooltip](../wiki/TooltipManager#removetooltip)
- [removeTooltipType](../wiki/TooltipManager#removetooltiptype)

## Constructors

### constructor

• `Private` **new TooltipManager**()

Return this or singleton instance of TooltipManager

#### Defined in

[Tooltips/TooltipManager.ts:23](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L23)

## Properties

### \_TooltipTypes

• `Private` **\_TooltipTypes**: `Map`<`String`, [`TooltipType`](../wiki/TooltipType)\>

#### Defined in

[Tooltips/TooltipManager.ts:63](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L63)

___

### \_tooltips

• `Private` **\_tooltips**: [`ReversibleMap`](../wiki/ReversibleMap)<`Number`, [`Tooltip`](../wiki/Tooltip)\>

#### Defined in

[Tooltips/TooltipManager.ts:56](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L56)

___

### \_uniqueID

• `Private` **\_uniqueID**: [`UniqueID`](../wiki/UniqueID)

#### Defined in

[Tooltips/TooltipManager.ts:49](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L49)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`TooltipManager`](../wiki/TooltipManager)

#### Defined in

[Tooltips/TooltipManager.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L15)

## Accessors

### TooltipTypes

• `get` **TooltipTypes**(): `Map`<`String`, [`TooltipType`](../wiki/TooltipType)\>

#### Returns

`Map`<`String`, [`TooltipType`](../wiki/TooltipType)\>

#### Defined in

[Tooltips/TooltipManager.ts:64](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L64)

___

### tooltips

• `get` **tooltips**(): [`ReversibleMap`](../wiki/ReversibleMap)<`Number`, [`Tooltip`](../wiki/Tooltip)\>

#### Returns

[`ReversibleMap`](../wiki/ReversibleMap)<`Number`, [`Tooltip`](../wiki/Tooltip)\>

#### Defined in

[Tooltips/TooltipManager.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L57)

___

### uniqueID

• `get` **uniqueID**(): [`UniqueID`](../wiki/UniqueID)

#### Returns

[`UniqueID`](../wiki/UniqueID)

#### Defined in

[Tooltips/TooltipManager.ts:50](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L50)

___

### Instance

• `Static` `get` **Instance**(): [`TooltipManager`](../wiki/TooltipManager)

#### Returns

[`TooltipManager`](../wiki/TooltipManager)

#### Defined in

[Tooltips/TooltipManager.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L16)

## Methods

### addTooltip

▸ `Static` **addTooltip**(`tooltip`): `boolean`

Adds a Tooltip to the list of Tooltips

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tooltip` | [`Tooltip`](../wiki/Tooltip) | The Tooltip to add |

#### Returns

`boolean`

#### Defined in

[Tooltips/TooltipManager.ts:82](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L82)

___

### addTooltipType

▸ `Static` **addTooltipType**(`tooltipType`): `boolean`

Adds a TooltipType to the list of TooltipTypes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tooltipType` | [`TooltipType`](../wiki/TooltipType) | The TooltipType to add |

#### Returns

`boolean`

#### Defined in

[Tooltips/TooltipManager.ts:112](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L112)

___

### getTooltip

▸ `Static` **getTooltip**(`id`): `undefined` \| [`Tooltip`](../wiki/Tooltip)

Searches for and returns a Tooltip with a id parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The Tooltip to return |

#### Returns

`undefined` \| [`Tooltip`](../wiki/Tooltip)

#### Defined in

[Tooltips/TooltipManager.ts:73](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L73)

___

### getTooltipType

▸ `Static` **getTooltipType**(`name`): `undefined` \| [`TooltipType`](../wiki/TooltipType)

Searches for and returns a Tooltip Type with a id parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The Tooltip Type name to return |

#### Returns

`undefined` \| [`TooltipType`](../wiki/TooltipType)

#### Defined in

[Tooltips/TooltipManager.ts:103](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L103)

___

### removeTooltip

▸ `Static` **removeTooltip**(`tooltip`): `boolean`

Remove a Tooltip to the list of Tooltips

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tooltip` | [`Tooltip`](../wiki/Tooltip) | The Tooltip to add |

#### Returns

`boolean`

#### Defined in

[Tooltips/TooltipManager.ts:92](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L92)

___

### removeTooltipType

▸ `Static` **removeTooltipType**(`tooltipType`): `boolean`

Remove a TooltipType from the list of TooltipTypes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tooltipType` | [`TooltipType`](../wiki/TooltipType) | The TooltipType to remove |

#### Returns

`boolean`

#### Defined in

[Tooltips/TooltipManager.ts:122](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/6fa2b8b/Code/src/Tooltips/TooltipManager.ts#L122)
