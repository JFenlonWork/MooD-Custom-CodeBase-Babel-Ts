# Class: Tooltip

Class representing a Tooltip that can be added to pre-existing HTML.
The constructor for Tooltips also adds the resulting tooltip to Tooltip Manager

## Table of contents

### Constructors

- [constructor](../wiki/Tooltip#constructor)

### Properties

- [\_TooltipTypeName](../wiki/Tooltip#_tooltiptypename)
- [\_tooltipCSS](../wiki/Tooltip#_tooltipcss)
- [\_tooltipID](../wiki/Tooltip#_tooltipid)
- [\_tooltipObject](../wiki/Tooltip#_tooltipobject)
- [\_tooltipParentCSS](../wiki/Tooltip#_tooltipparentcss)
- [\_tooltipText](../wiki/Tooltip#_tooltiptext)

### Accessors

- [TooltipTypeName](../wiki/Tooltip#tooltiptypename)
- [tooltipCSS](../wiki/Tooltip#tooltipcss)
- [tooltipID](../wiki/Tooltip#tooltipid)
- [tooltipObject](../wiki/Tooltip#tooltipobject)
- [tooltipParentCSS](../wiki/Tooltip#tooltipparentcss)
- [tooltipText](../wiki/Tooltip#tooltiptext)

### Methods

- [toString](../wiki/Tooltip#tostring)
- [toString](../wiki/Tooltip#tostring)

## Constructors

### constructor

• **new Tooltip**(`tooltipText?`, `TooltipTypeName?`, `tooltipCSS?`, `tooltipParentCSS?`, `tooltipObject?`, ...`args`)

Create a tooltip

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tooltipText` | `string` | `""` | The text to display within this Tooltip |
| `TooltipTypeName` | `string` | `"GenericTooltipSetup"` | The Tooltip creation function type to run using this Tooltip |
| `tooltipCSS` | `string` | `"GenericTooltip"` | The CSS to apply to this Tooltip |
| `tooltipParentCSS` | `string` | `"GenericTooltipParent"` | The CSS to apply to this Tooltip's parent |
| `tooltipObject` | ``null`` \| `HTMLElement` | `null` | The DOM object of this Tooltip |
| `...args` | `any`[] | `undefined` | - |

#### Defined in

[Tooltips/Tooltip.ts:73](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L73)

## Properties

### \_TooltipTypeName

• `Private` **\_TooltipTypeName**: `string`

#### Defined in

[Tooltips/Tooltip.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L26)

___

### \_tooltipCSS

• `Private` **\_tooltipCSS**: `string`

#### Defined in

[Tooltips/Tooltip.ts:36](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L36)

___

### \_tooltipID

• `Private` **\_tooltipID**: `number` = `-1`

#### Defined in

[Tooltips/Tooltip.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L10)

___

### \_tooltipObject

• `Private` **\_tooltipObject**: ``null`` \| `HTMLElement`

#### Defined in

[Tooltips/Tooltip.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L16)

___

### \_tooltipParentCSS

• `Private` **\_tooltipParentCSS**: `string`

#### Defined in

[Tooltips/Tooltip.ts:46](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L46)

___

### \_tooltipText

• `Private` **\_tooltipText**: `string`

#### Defined in

[Tooltips/Tooltip.ts:56](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L56)

## Accessors

### TooltipTypeName

• `get` **TooltipTypeName**(): `string`

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:27](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L27)

• `set` **TooltipTypeName**(`TooltipTypeName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `TooltipTypeName` | `string` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:31](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L31)

___

### tooltipCSS

• `get` **tooltipCSS**(): `string`

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:37](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L37)

• `set` **tooltipCSS**(`tooltipCSS`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipCSS` | `string` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:41](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L41)

___

### tooltipID

• `get` **tooltipID**(): `number`

#### Returns

`number`

#### Defined in

[Tooltips/Tooltip.ts:11](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L11)

___

### tooltipObject

• `get` **tooltipObject**(): ``null`` \| `HTMLElement`

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[Tooltips/Tooltip.ts:17](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L17)

• `set` **tooltipObject**(`tooltipObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipObject` | ``null`` \| `HTMLElement` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:21](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L21)

___

### tooltipParentCSS

• `get` **tooltipParentCSS**(): `string`

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:47](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L47)

• `set` **tooltipParentCSS**(`tooltipParentCSS`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipParentCSS` | `string` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:51](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L51)

___

### tooltipText

• `get` **tooltipText**(): `string`

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:57](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L57)

• `set` **tooltipText**(`tooltipText`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipText` | `string` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:61](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L61)

## Methods

### toString

▸ **toString**(): `string`

Returns the class type of this object

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:94](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L94)

___

### toString

▸ `Static` **toString**(): `string`

Returns the type of this class

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:101](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/e465d8d/Code/src/Tooltips/Tooltip.ts#L101)
