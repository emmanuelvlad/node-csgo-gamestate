const CSGOClient = require("../lib/main");

const client = new CSGOClient().start();

client.player.on("burning", health => {
	console.log(`Player is burning ${health}hp`);
});

client.player.on("death", () => {
	console.log(client.player.isDead);
});

client.player.on("weaponReload", () => {
	console.log("reloading ...");
});

client.player.on("weaponSwitch", () => {
	console.log("switch ...");
});

client.player.on("weaponShoot", () => {
	console.log("shoot ...");
});;

client.player.on("weaponDrop", weapon => {
	console.log(`${weapon.name} was dropped!`);
});

client.player.on("grenadeThrow", weapon => {
	console.log(`${weapon.name} was thrown!`);
});