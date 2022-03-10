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
import raw_fish_img from "./assets/raw_fish.jpg";
import raw_rice_img from "./assets/raw_rice.jpg";
import highlight_img from "./assets/highlight.png";

import ASSET_STRING from "./components/defines/AssetStrings";
import JapaneseStage from "./components/stages/JapaneseStage";
import ScaleHelper from "./helpers/ScaleHelper";
import AbstractIngredient from "./components/ingredients/AbstractIngredient";
import SceneObjectHighlighter from "./components/SceneObjectHighlighter";
import ProgressBar from "./components/ui/ProgressBar";

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
		this.load.spritesheet(ASSET_STRING.RAW_FISH, raw_fish_img, {
			frameWidth: 270,
			frameHeight: 270,
		});
		this.load.image(ASSET_STRING.RAW_RICE, raw_rice_img);
		this.load.image(ASSET_STRING.HIGHLIGHT, highlight_img);
	}

	handEmpty() {
		return this.hand === null;
	}

	pickSceneObject(scene_object) {
		this.hand = scene_object;
	}

	dropSceneObject() {
		if (!this.handEmpty()) {
			this.hand = null;
		}
	}

	create() {
		this.japanese_stage = new JapaneseStage();
		this.japanese_stage.addToScene(this);
		this.hand = null;

		this.highlighter = new SceneObjectHighlighter(ASSET_STRING.HIGHLIGHT);
		this.highlighter.addToScene(this, 0, 0);
		this.highlighter.highlight(null);

		let context = this;
		this.japanese_stage.onCrateClick((crate) => {
			if (context.handEmpty()) {
				let ingredient = crate.getIngredient();
				crate.renderOnTop(context, ingredient, 0.8);
				context.highlighter.highlight(crate);
				context.pickSceneObject(ingredient);
			} else {
				if (crate === context.highlighter.getHighlightedObject()) {
					context.hand.safeDelete();
					context.hand = null;
					context.highlighter.highlight(null);
				}
			}
		});

		this.japanese_stage.onChoppingBoardClick((chopping_board) => {
			if (!context.handEmpty() && chopping_board.empty()) {
				let setOk = chopping_board.setIngredient(context.hand);

				if (setOk) {
					chopping_board.renderOnTop(context, context.hand, 0.8);
					context.highlighter.highlight(chopping_board);
					context.highlighter.hide();
					context.dropSceneObject();
				}
			} else if (context.handEmpty() && !chopping_board.empty()) {
				if (!chopping_board.ingredientChopped()) {
					chopping_board.chop();
				} else {
					context.highlighter.highlight(chopping_board);
					context.pickSceneObject(chopping_board.getChoppedIngredient());
				}
			}
		});

		this.japanese_stage.onPlateClick((plate) => {
			if (!context.handEmpty()) {
				if (context.hand instanceof AbstractIngredient) {
					if (context.hand.needsToBeChopped() && !context.hand.isChopped()) return;
					if (context.hand.needsToBeCooked() && !context.hand.isCooked()) return;

					plate.addIngredient(context.hand);
					plate.renderOnTop(context, context.hand, 0.8);
					context.dropSceneObject();

					console.log(plate.dishReady());
				}
			} else {
				// TODO: Pick up dish.
			}
		});

		this.japanese_stage.onCookwareClick((cookware) => {});

		this.highlight = this.add.rectangle(0, 0, 100, 100, 0, 0);
		this.highlight.setOrigin(0);
		this.highlight.setStrokeStyle(10, 0, 0);
		this.highlight.setPosition(500, 500);

		let progress_bar = new ProgressBar(this, 0, 0, 150, 20);
		let progress = 0;

		setInterval(() => {
			progress_bar.setProgress(progress++);
		}, 500);
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
