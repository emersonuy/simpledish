import Phaser from "phaser";
import boiling_pot_img from "./assets/boiling_pot.jpg";
import skillet_img from "./assets/skillet.jpg";
import deep_fryer_img from "./assets/deep_fryer.jpg";
import steamer_img from "./assets/steamer.jpg";
import crate_img from "./assets/crate.jpg";
import chopping_board_img from "./assets/chopping_board.jpg";
import plate_img from "./assets/plate.jpg";
import fish_maki_img from "./assets/fish_maki.png";

import bg_120x120_img from "./assets/120x120_bg.jpg";
import bg_270x270_img from "./assets/270x270_bg.jpg";
import boil_cooking_style_img from "./assets/boil_cooking_style.jpg";
import fish_img from "./assets/fish.png";
import rice_img from "./assets/rice.png";
import nori_img from "./assets/nori.png";
import highlight_img from "./assets/highlight.png";

import ASSET_STRING from "./components/defines/AssetStrings";
import ImageObject from "./components/game_objects/game/ImageObject";
import IngredientFactory from "./components/game_objects/game/factory/IngredientFactory";
import ScoreText from "./components/game_objects/ui/ScoreText";
import TimeText from "./components/game_objects/ui/TimeText";

class MyGame extends Phaser.Scene {
	constructor() {
		super();
	}

	preload() {
		this.load.image(ASSET_STRING.BOILING_POT, boiling_pot_img);
		this.load.image(ASSET_STRING.SKILLET, skillet_img);
		this.load.image(ASSET_STRING.DEEP_FRYER, deep_fryer_img);
		this.load.image(ASSET_STRING.STEAMER, steamer_img);
		this.load.image(ASSET_STRING.CRATE, crate_img);
		this.load.image(ASSET_STRING.CHOPPING_BOARD, chopping_board_img);
		this.load.image(ASSET_STRING.PLATE, plate_img);
		this.load.image(ASSET_STRING.BG_120X120, bg_120x120_img);
		this.load.image(ASSET_STRING.BG_270X270, bg_270x270_img);
		this.load.image(ASSET_STRING.BOIL_COOKING_STYLE, boil_cooking_style_img);
		this.load.image(ASSET_STRING.HIGHLIGHT, highlight_img);

		this.load.spritesheet(ASSET_STRING.FISH_MAKI, fish_maki_img, {
			frameWidth: 270,
			frameHeight: 270,
		});

		this.load.spritesheet(ASSET_STRING.FISH, fish_img, {
			frameWidth: 270,
			frameHeight: 270,
		});
		this.load.spritesheet(ASSET_STRING.RICE, rice_img, {
			frameWidth: 270,
			frameHeight: 270,
		});
		this.load.spritesheet(ASSET_STRING.NORI, nori_img, {
			frameWidth: 270,
			frameHeight: 270,
		});
	}

	create() {
		let fish_maki_obj = new ImageObject(this, ASSET_STRING.FISH_MAKI, 120, 0, 120, 120);
		let fish = IngredientFactory.create(this, ASSET_STRING.FISH, 0, 120, 100, 100);
		let rice = IngredientFactory.create(this, ASSET_STRING.RICE, 130, 120, 100, 100);
		let nori = IngredientFactory.create(this, ASSET_STRING.NORI, 250, 120, 100, 100);

		let crate = new ImageObject(this, ASSET_STRING.CRATE, 500, 500, 120, 120);

		// let progress_bar = new ProgressBar(this, 100, 100, 150, 50, 0x00ff00, 1);

		let score_text = new ScoreText(this, 100, 1700, "1000");
		let time_text = new TimeText(this, 800, 1700, "05:00");
	}

	update() {}
}

const GAME_WIDTH = 1080;
const GAME_HEIGHT = 1920;

const config = {
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: GAME_WIDTH,
	height: GAME_HEIGHT,
	scale: { mode: Phaser.Scale.FIT },
	backgroundColor: "0xEEEEEE",
	scene: MyGame,
};

const game = new Phaser.Game(config);
