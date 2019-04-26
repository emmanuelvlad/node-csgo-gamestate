const http 					= require("http");
const EventEmitter 	= require("events").EventEmitter;
const Player				= require("./Player");

class CSGOClient extends EventEmitter {

	constructor(host = "127.0.0.1", port = 3000) {
		super();
		this._host = host;
		this._port = port;
		this._server = this.newServer();
		this._old = {};
		this.player = new Player();
	}

	newServer() {
		return http.createServer((req, res) => {

			if (req.method == "POST") {
				res.writeHead(200, {"Content-Type": "text/html"});
		
				let body = "";
				req.on("data", data => {
					body += data;
				});
				req.on("end", () => {
					this.dispatchEvents(JSON.parse(body));
					res.end("");
				});
			} else {
				res.writeHead(200, {"Content-Type": "text/html"});
				res.end("<html><body>HTTP Server at http://" + this._host + ":" + this._port + "</body></html>");
			}
		
		});
	}

	start() {
		this._server.listen(this._port, this._host);
		console.log('Listening at http://' + this._host + ':' + this._port);
		return this;
	}

	dispatchEvents(data) {
		if (this._old.player) {
			this.player.eventManager(data.player, this._old.player);
		}
		this._old = data;
	}

}


// const client = new CSGOClient().start();

// client.player.on("burning", health => {
// 	console.log(`Player is burning ${health}hp`);
// })

// client.player.on("death", () => {
// 	console.log(client.player.isDead);
// })

// client.player.on("weaponReload", () => {
// 	console.log("reloading ...");
// })

// client.player.on("weaponSwitch", () => {
// 	console.log("switch ...");
// })

// client.player.on("weaponShoot", () => {
// 	console.log("shoot ...");
// })

// client.player.on("weaponDrop", weapon => {
// 	console.log(`${weapon.name} was dropped!`);
// })

// client.player.on("grenadeThrow", weapon => {
// 	console.log(`${weapon.name} was thrown!`);
// })
// client.player.on("healthChange", ())