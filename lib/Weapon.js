class Weapon {

	constructor (data) {
		this.code = data.name;
		this.name = Weapon.codeToName(data.name);
		this.paintkit = data.paintkit;
		this.type = data.type;
		this.ammo_clip = data.ammo_clip;
		this.ammo_clip_max = data.ammo_clip_max;
		this.ammo_reserve = data.ammo_reserve;
		this.state = data.state;
	}

	static codeToName(code) {
		return this.list[code] || "unknown";
	}

	hasSkin() { 
		return this.paintkit !== "default";
	}

	isGrenade() {
		return this.type === "Grenade";
	}

	isPistol() {
		return this.type === "Pistol";
	}

	isRifle() {
		return this.type === "Rifle";
	}
}

Weapon.list = {
	// Rifles
	"weapon_m4a1": "M4A4",
	"weapon_m4a1_silencer": "M4A1-S",
	"weapon_ak47": "AK47",
	"weapon_aug": "AUG",
	"weapon_awp": "AWP",
	"weapon_famas": "Famas",
	"weapon_gs3sg1": "GS3SG1",
	"weapon_galilar": "Galil",
	"weapon_scar20": "Scar-20",
	"weapon_sg556": "SG-556",
	"weapon_ssg08": "Scout",
	"weapon_hkp2000": "P2000",
	// SMGs
	"weapon_bizon": "PP-Bizon",
	"weapon_mac10": "Mac-10",
	"weapon_mp7": "MP7",
	"weapon_mp9": "MP9",
	"weapon_p90": "P90",
	"weapon_ump45": "UMP-45",
	"weapon_mp5sd": "MP5-SD",
	// Heavy
	"weapon_m249": "M249",
	"weapon_mag7": "Mag7",
	"weapon_negev": "Negev",
	"weapon_nova": "Nova",
	"weapon_sawedoff": "Sawed-off",
	"weapon_xm1014": "XM1014",
	// Pistols
	"weapon_usp_silencer": "USP-S",
	"weapon_deagle": "Desert Eagle",
	"weapon_elite": "Dual Berettas",
	"weapon_fiveseven": "Fiveseven",
	"weapon_glock": "Glock-18",
	"weapon_hkp2000": "P2000",
	"weapon_p250": "P250",
	"weapon_tec9": "Tec-9",
	"weapon_cz75a": "CZ75-Auto",
	"weapon_revolver": "R8 Revolver",
	// Grenades
	"weapon_flashbang": "Flashbang",
	"weapon_decoy": "Decoy",
	"weapon_hegrenade": "HE Grenade",
	"weapon_incgrenade": "Incendiary Grenade",
	"weapon_molotov": "Molotov",
	"weapon_smokegrenade": "Smoke",
	"weapon_tagrenade": "Tactical Awereness Grenade",
	"weapon_healthshot": "Medi-Shot",
	// Knives
	"weapon_knife_ct": "Default CT knife",
	"weapon_knife_t": "Default T knife",
	"weapon_bayonet": "Bayonet",
	"weapon_knife_flip": "Flip knife",
	"weapon_knife_gut": "Gut knife",
	"weapon_knife_karambit": "Karambit",
	"weapon_knife_m9_bayonet": "M9 Bayonet",
	"weapon_knife_tactical": "Huntsman knife",
	"weapon_knife_butterfly": "Butterfly knife",
	"weapon_knife_push": "Shadow daggers",
	"weapon_knife_falchion": "Falchion",
	"weapon_knifegg": "Golden knife",
	"weapon_knife_survival_bowie": "Bowie knife",
	"weapon_knife_ursus": "Ursus",
	"weapon_knife_gypsy_jackknife": "Navaja",
	"weapon_knife_stiletto": "Stiletto",
	"weapon_knife_widowmaker": "Talon",
	// Other
	"weapon_c4": "C4",
	"weapon_taser": "Zeus",
	"weapon_breachcharge": "Breach charge",
	"weapon_snowball": "Snowball",
	"weapon_axe": "Axe",
	"weapon_hammer": "Hammer",
	"weapon_spanner": "Spanner",
	"weapon_tablet": "Tablet",
}

module.exports = Weapon;