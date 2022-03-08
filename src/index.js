import Phaser from "phaser";
import boiling_pot_img from "./assets/boiling_pot.jpg";
import skillet_img from "./assets/skillet.jpg";
import deep_fryer_img from "./assets/deep_fryer.jpg";
import steamer_img from "./assets/steamer.jpg";

import BoilingPot from "./components/utensils/BoilingPot";
import Skillet from "./components/utensils/Skillet";
import Steamer from "./components/utensils/Steamer";
import DeepFryer from "./components/utensils/DeepFryer";

import ASSET_STRING from "./components/defines/AssetStrings";

class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image(ASSET_STRING.BOILING_POT, boiling_pot_img);
        this.load.image(ASSET_STRING.SKILLET, skillet_img);
        this.load.image(ASSET_STRING.DEEP_FRYER, deep_fryer_img);
        this.load.image(ASSET_STRING.STEAMER, steamer_img);
    }

    create() {
        this.boiling_pot = new BoilingPot(this, 0, 1650);
        this.skillet = new Skillet(this, 270, 1650);
        this.deep_fryer = new DeepFryer(this, 540, 1650);
        this.steamer = new Steamer(this, 810, 1650);

        this.steamer.on("pointerup", (e) => {
            console.log(e);
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
