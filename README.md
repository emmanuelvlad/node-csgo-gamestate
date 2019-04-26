# CSGO-Gamestate 

A CS:GO Gamestate integration in NodeJS


## Example

```js
const CSGOClient = require("../lib/main");

const client = new CSGOClient().start();

client.player.on("burning", health => {
	console.log(`Player is burning. ${health}HP remaining`);
});
```