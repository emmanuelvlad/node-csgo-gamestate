# CSGO Gamestate

A CS:GO Gamestate integration in NodeJS

### Example

```javascript
const CSGOClient = require("csgo-gamestate");

const client = new CSGOClient().start();

client.player.on("burning", health => {
    console.log(`Player is burning. ${health}HP remaining`);
});
```

### Events

[Player](events/player.md)

### Types

[Weapon](types/weapon.md)

