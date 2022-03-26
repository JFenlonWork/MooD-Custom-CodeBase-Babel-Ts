# Class: Tooltip

Class representing a Tooltip that can be added to pre-existing HTML.

## Table of contents

### Constructors

- [constructor](../wiki/Tooltip#constructor)

### Properties

- [\_TooltipTypeType](../wiki/Tooltip#_tooltiptypetype)
- [\_tooltipCSS](../wiki/Tooltip#_tooltipcss)
- [\_tooltipID](../wiki/Tooltip#_tooltipid)
- [\_tooltipObject](../wiki/Tooltip#_tooltipobject)
- [\_tooltipParentCSS](../wiki/Tooltip#_tooltipparentcss)
- [\_tooltipText](../wiki/Tooltip#_tooltiptext)

### Accessors

- [TooltipTypeType](../wiki/Tooltip#tooltiptypetype)
- [tooltipCSS](../wiki/Tooltip#tooltipcss)
- [tooltipID](../wiki/Tooltip#tooltipid)
- [tooltipObject](../wiki/Tooltip#tooltipobject)
- [tooltipParentCSS](../wiki/Tooltip#tooltipparentcss)
- [tooltipText](../wiki/Tooltip#tooltiptext)

## Constructors

### constructor

• **new Tooltip**(`tooltipText?`, `TooltipTypeType?`, `tooltipCSS?`, `tooltipParentCSS?`, `tooltipObject?`, ...`args`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tooltipText` | `string` | `""` |
| `TooltipTypeType` | `string` | `"GenericTooltipSetup"` |
| `tooltipCSS` | `string` | `"GenericTooltip"` |
| `tooltipParentCSS` | `string` | `"GenericTooltipParent"` |
| `tooltipObject` | ``null`` \| `HTMLElement` | `null` |
| `...args` | `any`[] | `undefined` |

#### Defined in

[Tooltips/Tooltip.ts:65](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L65)

## Properties

### \_TooltipTypeType

• `Private` **\_TooltipTypeType**: `string`

#### Defined in

[Tooltips/Tooltip.ts:25](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L25)

___

### \_tooltipCSS

• `Private` **\_tooltipCSS**: `string`

#### Defined in

[Tooltips/Tooltip.ts:35](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L35)

___

### \_tooltipID

• `Private` **\_tooltipID**: `number` = `-1`

#### Defined in

[Tooltips/Tooltip.ts:9](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L9)

___

### \_tooltipObject

• `Private` **\_tooltipObject**: ``null`` \| `HTMLElement`

#### Defined in

[Tooltips/Tooltip.ts:15](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L15)

___

### \_tooltipParentCSS

• `Private` **\_tooltipParentCSS**: `string`

#### Defined in

[Tooltips/Tooltip.ts:45](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L45)

___

### \_tooltipText

• `Private` **\_tooltipText**: `string`

#### Defined in

[Tooltips/Tooltip.ts:55](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L55)

## Accessors

### TooltipTypeType

• `get` **TooltipTypeType**(): `string`

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:26](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L26)

• `set` **TooltipTypeType**(`TooltipTypeType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `TooltipTypeType` | `string` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:30](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L30)

___

### tooltipCSS

• `get` **tooltipCSS**(): `string`

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:36](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L36)

• `set` **tooltipCSS**(`tooltipCSS`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipCSS` | `string` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:40](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L40)

___

### tooltipID

• `get` **tooltipID**(): `number`

#### Returns

`number`

#### Defined in

[Tooltips/Tooltip.ts:10](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L10)

___

### tooltipObject

• `get` **tooltipObject**(): ``null`` \| `HTMLElement`

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[Tooltips/Tooltip.ts:16](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L16)

• `set` **tooltipObject**(`tooltipObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipObject` | ``null`` \| `HTMLElement` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:20](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L20)

___

### tooltipParentCSS

• `get` **tooltipParentCSS**(): `string`

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:46](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L46)

• `set` **tooltipParentCSS**(`tooltipParentCSS`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipParentCSS` | `string` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:50](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L50)

___

### tooltipText

• `get` **tooltipText**(): `string`

#### Returns

`string`

#### Defined in

[Tooltips/Tooltip.ts:56](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L56)

• `set` **tooltipText**(`tooltipText`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tooltipText` | `string` |

#### Returns

`void`

#### Defined in

[Tooltips/Tooltip.ts:60](https://github.com/JFenlonWork/MooD-Custom-CodeBase-Babel-Ts/blob/12477d4/Code/src/Tooltips/Tooltip.ts#L60)
