# Class: TooltipController

Class representing a any utility functions or variables that help Tooltips.

## Table of contents

### Constructors

- [constructor](../wiki/TooltipController#constructor)

### Properties

- [\_tooltips](../wiki/TooltipController#_tooltips)
- [\_uniqueID](../wiki/TooltipController#_uniqueid)
- [\_instance](../wiki/TooltipController#_instance)

### Accessors

- [tooltips](../wiki/TooltipController#tooltips)
- [uniqueID](../wiki/TooltipController#uniqueid)
- [Instance](../wiki/TooltipController#instance)

### Methods

- [getTooltip](../wiki/TooltipController#gettooltip)
- [getTooltipFromID](../wiki/TooltipController#gettooltipfromid)

## Constructors

### constructor

• `Private` **new TooltipController**()

Return this or singleton instance of TooltipController

#### Defined in

Tooltips/TooltipController.ts:19

## Properties

### \_tooltips

• `Private` **\_tooltips**: [`MultiKeyMap`](../wiki/MultiKeyMap)<`String` \| `Number`, [`Tooltip`](../wiki/Tooltip)\>

#### Defined in

Tooltips/TooltipController.ts:32

___

### \_uniqueID

• `Private` **\_uniqueID**: [`UniqueID`](../wiki/UniqueID)

#### Defined in

Tooltips/TooltipController.ts:25

___

### \_instance

▪ `Static` `Private` **\_instance**: [`TooltipController`](../wiki/TooltipController)

#### Defined in

Tooltips/TooltipController.ts:10

## Accessors

### tooltips

• `get` **tooltips**(): [`MultiKeyMap`](../wiki/MultiKeyMap)<`String` \| `Number`, [`Tooltip`](../wiki/Tooltip)\>

#### Returns

[`MultiKeyMap`](../wiki/MultiKeyMap)<`String` \| `Number`, [`Tooltip`](../wiki/Tooltip)\>

#### Defined in

Tooltips/TooltipController.ts:33

___

### uniqueID

• `get` **uniqueID**(): [`UniqueID`](../wiki/UniqueID)

#### Returns

[`UniqueID`](../wiki/UniqueID)

#### Defined in

Tooltips/TooltipController.ts:26

___

### Instance

• `Static` `get` **Instance**(): [`TooltipController`](../wiki/TooltipController)

#### Returns

[`TooltipController`](../wiki/TooltipController)

#### Defined in

Tooltips/TooltipController.ts:11

## Methods

### getTooltip

▸ `Static` **getTooltip**(`name`): `undefined` \| [`Tooltip`](../wiki/Tooltip)

Searches for and returns a Tooltip with a name parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The Tooltip to return |

#### Returns

`undefined` \| [`Tooltip`](../wiki/Tooltip)

#### Defined in

Tooltips/TooltipController.ts:44

___

### getTooltipFromID

▸ `Static` **getTooltipFromID**(`id`): `undefined` \| [`Tooltip`](../wiki/Tooltip)

Searches for and returns a Tooltip with a id parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The Tooltip to return |

#### Returns

`undefined` \| [`Tooltip`](../wiki/Tooltip)

#### Defined in

Tooltips/TooltipController.ts:53
