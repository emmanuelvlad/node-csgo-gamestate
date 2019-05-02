# CSGO-Gamestate 

A CS:GO Gamestate integration in NodeJS


## Example

```js
const CSGOClient = require("csgo-gamestate");

const client = new CSGOClient().start();

client.player.on("burning", health => {
	console.log(`Player is burning. ${health}HP remaining`);
});
```

## Events

### Player

#### death
When player dies

&nbsp;

#### burning
When player is burning

**Params**

| | Name | Type |
|-|-|-|
| 1 | health | Number |

&nbsp;

#### weaponReload
When player is reloading

**Params**

| | Name | Type |
|-|-|-|
| 1 | weapon | [Weapon](#Weapon) |

&nbsp;

#### weaponSwitch
On weapon switch

**Params**

| | Name | Type |
|-|-|-|
| 1 | weapon | [Weapon](#Weapon) |

&nbsp;

#### weaponShoot
On weapon shoot

**Params**

| | Name | Type |
|-|-|-|
| 1 | weapon | [Weapon](#Weapon) |

&nbsp;

#### weaponDrop
On weapon drop
**Params**
| | Name | Type |
|-|-|-|
| 1 | weapon | [Weapon](#Weapon) |

&nbsp;

#### weaponPickedUp
When a weapon was picked up

&nbsp;

#### grenadeThrow
When throwing a grenade
**Params**
| | Name | Type |
|-|-|-|
| 1 | weapon | [Weapon](#Weapon) |


## Types

### Weapon

| Name | Type | Info |
|-|-|-|
| code | String | Weapon code name |
| name | String | Weapon's name |
| paintkit | String | Weapon's skin | 
| type | String | Weapon type |
| ammo_clip | Number | Ammo remaining in clip |
| ammo_clip_max | Number | Maximum ammo available in clip |
| ammo_reserve | Number | Ammo in reserve |
| state | String | either `active`, `holstered` or `reloading` |
