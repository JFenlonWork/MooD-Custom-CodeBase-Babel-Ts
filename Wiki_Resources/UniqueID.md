# Class: UniqueID

Holds any properties and methods for generating Unique IDs.

## Table of contents

### Constructors

- [constructor](../wiki/UniqueID#constructor)

### Properties

- [\_uniqueID](../wiki/UniqueID#_uniqueid)

### Accessors

- [uniqueID](../wiki/UniqueID#uniqueid)

### Methods

- [generateUID](../wiki/UniqueID#generateuid)

## Constructors

### constructor

• **new UniqueID**()

## Properties

### \_uniqueID

• `Private` **\_uniqueID**: `number` = `0`

#### Defined in

Utilities/UniqueID.ts:6

## Accessors

### uniqueID

• `get` **uniqueID**(): `number`

#### Returns

`number`

#### Defined in

Utilities/UniqueID.ts:7

• `set` **uniqueID**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Utilities/UniqueID.ts:11

## Methods

### generateUID

▸ **generateUID**(): `number`

Return and increment a value to fake uniqueness

#### Returns

`number`

#### Defined in

Utilities/UniqueID.ts:19
