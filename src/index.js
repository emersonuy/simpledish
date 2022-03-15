import Phaser from "phaser";
import boiling_pot_img from "./assets/boiling_pot.jpg";
import skillet_img from "./assets/skillet.jpg";
import deep_fryer_img from "./assets/deep_fryer.jpg";
import steamer_img from "./assets/steamer.jpg";
import crate_img from "./assets/crate.jpg";
import chopping_board_img from "./assets/chopping_board.jpg";
import plate_img from "./assets/plate.jpg";
import fish_maki_img from "./assets/fish_maki.jpg";

import bg_120x120_img from "./assets/120x120_bg.jpg";
import bg_270x270_img from "./assets/270x270_bg.jpg";
import boil_cooking_style_img from "./assets/boil_cooking_style.jpg";
import fish_img from "./assets/fish.png";
import rice_img from "./assets/rice.png";
import nori_img from "./assets/nori.png";
import highlight_img from "./assets/highlight.png";

import ASSET_STRING from "./components/defines/AssetStrings";
import JapaneseStage from "./components/stages/JapaneseStage";
import AbstractIngredient from "./components/ingredients/AbstractIngredient";
import WorldObjectHighlighter from "./components/WorldObjectHighlighter";
import Hand from "./components/Hand";
import WorldObject from "./components/WorldObject";
import AlignHelper from "./helpers/AlignHelper";
import ImageObject from "./components/game_objects/game/ImageObject";
import ProgressBar from "./components/game_objects/ui/ProgressBar";
import ScoreText from "./components/game_objects/ui/ScoreText";

class MyGame extends Phaser.Scene {
	constructor() {
		super();

		this.hand = new Hand();
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

		this.load.image(ASSET_STRING.FISH_MAKI, fish_maki_img);

		this.load.spritesheet(ASSET_STRING.RAW_FISH, fish_img, {
			frameWidth: 270,
			frameHeight: 270,
		});
		this.load.spritesheet(ASSET_STRING.RAW_RICE, rice_img, {
			frameWidth: 270,
			frameHeight: 270,
		});
		this.load.spritesheet(ASSET_STRING.NORI, nori_img, {
			frameWidth: 270,
			frameHeight: 270,
		});
	}

	create() {
		let fish_maki_obj = new ImageObject(this, ASSET_STRING.FISH_MAKI, 0, 0, 100, 100);

		let progress_bar = new ProgressBar(this, 100, 100, 150, 50, 0x00ff00, 1);

		let score_text = new ScoreText(this, 500, 500, "Score: 10");
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
