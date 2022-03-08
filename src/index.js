import Phaser from "phaser";
import logoImg from "./assets/logo.png";

import Fish from "./components/ingredients/Fish";
import ChoppingBoard from "./components/utensils/ChoppingBoard";
import Skillet from "./components/utensils/Skillet";

class MyGame extends Phaser.Scene {
	constructor() {
		super();
	}

	preload() {
		this.load.image("logo", logoImg);
	}

	create() {
		this.fish = new Fish();
		this.fish.setNeedToChop(true);
		this.fish.setNeedToCook(true);

		this.chopping_board = new ChoppingBoard();
		this.chopping_board.setIngredient(this.fish);

		this.skillet = new Skillet();
		this.skillet.setIngredient(this.fish);
	}

	update() {
		this.chopping_board.update();
		this.skillet.update();
	}
}

const config = {
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: 400,
	height: 600,
	scene: MyGame,
};

const game = new Phaser.Game(config);
