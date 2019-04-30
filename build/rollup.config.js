    
import commonjs from "rollup-plugin-commonjs";

export default 
[
	{
		input: "src/main.js",
		output: {
			file: "dist/csgo-gamestate.js",
			name: "CSGOGamestate"
		},
		plugins: [
			commonjs(),
		]
	}
];