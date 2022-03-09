import Phaser from "phaser";
import boiling_pot_img from "./assets/boiling_pot.jpg";
import skillet_img from "./assets/skillet.jpg";
import deep_fryer_img from "./assets/deep_fryer.jpg";
import steamer_img from "./assets/steamer.jpg";
import crate_img from "./assets/crate.jpg";
import chopping_board_img from "./assets/chopping_board.jpg";
import plate_img from "./assets/plate.jpg";
import fish_maki_img from "./assets/fish_maki.jpg";
import nori_img from "./assets/nori.jpg";
import bg_120x120_img from "./assets/120x120_bg.jpg";
import bg_270x270_img from "./assets/270x270_bg.jpg";
import boil_cooking_style_img from "./assets/boil_cooking_style.jpg";

import ASSET_STRING from "./components/defines/AssetStrings";
import JapaneseStage from "./components/stages/JapaneseStage";
import ScaleHelper from "../helpers/ScaleHelper";

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
		this.load.image(ASSET_STRING.FISH_MAKI, fish_maki_img);
		this.load.image(ASSET_STRING.NORI, nori_img);

		this.load.image(ASSET_STRING.BG_120X120, bg_120x120_img);
		this.load.image(ASSET_STRING.BG_270X270, bg_270x270_img);

		this.load.image(ASSET_STRING.BOIL_COOKING_STYLE, boil_cooking_style_img);
	}

	create() {
		this.japanese_stage = new JapaneseStage();
		this.japanese_stage.addToScene(this);

		this.order_bg = this.add.image(0, 0, ASSET_STRING.BG_270X270).setOrigin(0);
		this.order_bg2 = this.add.image(270, 0, ASSET_STRING.BG_270X270).setOrigin(0);
		this.order_bg3 = this.add.image(540, 0, ASSET_STRING.BG_270X270).setOrigin(0);
		this.order_bg4 = this.add.image(810, 0, ASSET_STRING.BG_270X270).setOrigin(0);

		this.fish_maki = this.add.image(0, 0, ASSET_STRING.FISH_MAKI);
		this.fish_maki.setOrigin(0);

		ScaleHelper.scaleObj(this.fish_maki, 200, 200);
		this.fish_maki.setPosition(35, 35);

		this.nori = this.add.image(0, 270, ASSET_STRING.NORI);
		this.nori.setOrigin(0);
		ScaleHelper.scaleObj(this.nori, 90, 90);

		this.boil = this.add.image(0, 360, ASSET_STRING.BOIL_COOKING_STYLE);
		ScaleHelper.scaleObj(this.boil, 90, 90);
		this.boil.setOrigin(0);
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
	scene: MyGame,
};

const game = new Phaser.Game(config);
