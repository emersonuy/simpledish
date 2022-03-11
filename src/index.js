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
		this.japanese_stage = new JapaneseStage();
		this.japanese_stage.addToScene(this);

		this.highlighter = new WorldObjectHighlighter(ASSET_STRING.HIGHLIGHT);
		this.highlighter.addToScene(this, 0, 0);
		this.highlighter.highlight(null);

		let scene = this;
		let highlighter = this.highlighter;
		let hand = this.hand;
		this.japanese_stage.onCrateClick((crate) => {
			if (hand.empty()) {
				let ingredient = crate.getIngredient();
				crate.addOnTop(scene, ingredient, 0.8);
				crate.highlight(highlighter);
				hand.pick(ingredient);
			} else {
				if (crate.highlighted()) {
					crate.removeHighlight();
					hand.drop().safeDelete();
				}
			}
		});

		this.japanese_stage.onChoppingBoardClick((chopping_board) => {
			if (!hand.empty()) {
				if (hand.getWorldObject() instanceof AbstractIngredient) {
					let ingredient = hand.getWorldObject();
					if (!chopping_board.canPutIngredient(ingredient)) return;

					chopping_board.putIngredient(ingredient);
					chopping_board.addOnTop(scene, ingredient, 0.8);
					chopping_board.highlight(highlighter);
					chopping_board.removeHighlight();
					hand.drop();
				}
			} else {
				if (!chopping_board.empty()) {
					if (chopping_board.ingredientChopped()) {
						chopping_board.highlight(highlighter);
						hand.pick(chopping_board.removeIngredient());
					} else {
						chopping_board.chop();
					}
				}
			}
		});

		this.japanese_stage.onPlateClick((plate) => {
			if (!hand.empty()) {
				if (hand.holdingIngredient()) {
					let ingredient = hand.getWorldObject();

					if (ingredient.needsToBeChoppedButNotChoppedYet()) return;
					if (ingredient.needsToBeCookedButNotCookedYet()) return;

					plate.highlight(highlighter);
					plate.addIngredient(ingredient);
					plate.addOnTop(scene, ingredient, 0.8);

					hand.drop();
					plate.removeHighlight();
				}
			} else {
				// TODO: Pick up dish.
			}
		});

		this.japanese_stage.onCookwareClick((cookware) => {
			if (!hand.empty()) {
				if (hand.holdingIngredient()) {
					let ingredient = hand.getWorldObject();

					if (!cookware.canPutIngredient(ingredient)) return;

					cookware.highlight(highlighter);
					cookware.putIngredient(ingredient);
					cookware.addOnTop(scene, ingredient, 0.8);
					cookware.removeHighlight(highlighter);
					hand.drop();
					cookware.cook();
				}
			} else {
				if (cookware.ingredientCooked()) {
					cookware.highlight(highlighter);
					hand.pick(cookware.removeIngredient());
				}
			}
		});
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
