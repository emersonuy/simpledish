import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import COOKING_STYLE from "./components/defines/CookingStyles";

import Fish from "./components/ingredients/Fish";
import Rice from "./components/ingredients/Rice";

class MyGame extends Phaser.Scene {
	constructor() {
		super();
	}

	preload() {
		this.load.image("logo", logoImg);
	}

	create() {
		this.rice = new Rice();
		this.rice.setNeedToCook(true);

		this.fish = new Fish();
		this.fish.setNeedToChop(true);
		this.fish.setNeedToCook(true);
		this.fish.setCookingStyle(COOKING_STYLE.STIR_FRY);

		this.rice.startCooking();
		this.fish.startCooking();
		this.fish.startChopping();
	}

	update() {
		// if (this.rice.isCooked() === false) {
		// 	console.log("Cooking " + this.rice.getName());
		// }
		// if (this.fish.isCooked() === false) {
		// 	console.log("Cooking " + this.fish.getName());
		// }
		// if (this.fish.isChopped() === false) {
		// 	console.log("Chopping " + this.fish.getName());
		// }
	}
}

const config = {
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: 800,
	height: 600,
	scene: MyGame,
};

const game = new Phaser.Game(config);
