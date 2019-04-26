const EventEmitter 	= require("events").EventEmitter;
const Weapon 				= require("./Weapon");

class Player extends EventEmitter {
	constructor() {
		super();
		this._current = {};
		this._old = {};

		// Accessible vars
		this.isBurning = false;
		this.isDead = false;
		this.activeWeapon = {};
	}

	eventManager(current, old) {
		// Setting current and old.
		this._current = current;
		this._old = old;

		// Checking activity
		switch (this._current.activity) {
			// Menu browsing
			case "menu":
				break;
			// In game
			default:
				// If the player is in free spec
				if (!this._current.team) return;
				this.deathEvent();
				this.burningEvent();
				this.weaponEvents();
				break;
		}
	}

	burningEvent() {
		if (this.isBurning = this._current.state.burning === 255 && !this.isDead) {
			this.emit("burning", this._current.state.health);
		}
	}

	deathEvent() {
		if ((this.isDead = this._current.state.health === 0) && this._old.state.health > 0) {
			this.emit("death");
		}
	}

	weaponEvents() {
		const findActive = (weapons) => Object.entries(weapons).find(w => w[1].state === "active" || w[1].state === "reloading");

		const weapons = this._current.weapons;
		const oldWeapons = this._old.weapons || {};

		const active = findActive(weapons);
		const oldActive = findActive(oldWeapons);

		// Throwing grenade
		if (active[1] && active[1].type === "Grenade" &&
				oldActive[1] && oldActive[1].type === "Grenade" &&
				active[1].ammo_reserve < oldActive[1].ammo_reserve) {
			this.emit("grenadeThrow", new Weapon(active[1]));
		}
		// Pick up
		else if (Object.keys(weapons).length > Object.keys(oldWeapons).length) {
			// TODO: send the weapon wich was picked up
			this.emit("weaponPickedUp");
		}
		// Drop
		else if (oldActive[0] && oldActive[1].type !== "Grenade" &&
				(!weapons[oldActive[0]] || weapons[oldActive[0]].name !== oldWeapons[oldActive[0]].name)) {
			this.emit("weaponDrop", new Weapon(oldActive[1]));
		}
		// Reload
		else if (active[1].state === "reloading" && oldActive[1].state !== "reloading") {
			this.emit("weaponReload", new Weapon(active[1]));
		}
		// Shoot
		else if ((active[1].name === oldActive[1].name) && active[1].ammo_clip < oldActive[1].ammo_clip) {
			this.emit("weaponShoot", new Weapon(active[1]));
		}
		// Switch
		else if (active[1].name !== oldActive[1].name) {
			this.emit("weaponSwitch", new Weapon(active[1]));
		}
	}
	// spawnEvent()
}

module.exports = Player;