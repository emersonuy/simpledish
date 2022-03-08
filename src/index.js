import Phaser from "phaser";

class MyGame extends Phaser.Scene {
	constructor() {
		super();
	}

	preload() {}

	create() {}

	update() {}
}

const config = {
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: 400,
	height: 600,
	scene: MyGame,
};

const game = new Phaser.Game(config);
