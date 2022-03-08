import ASSET_STRING from "../defines/AssetStrings";
import SceneObject from "../SceneObject";

export default class ChoppingBoard extends SceneObject {
    constructor(scene, x, y) {
        super(scene, ASSET_STRING.CHOPPING_BOARD, x, y);

        this.ingredient = null;
    }

    setIngredient(ingredient) {
        if (ingredient.isChopped()) return;
        if (ingredient.needsToBeChopped() === false) return;

        this.ingredient = ingredient;
        ingredient.startChopping();
    }

    clearIngredient() {
        if (this.ingredient === null) return;

        this.ingredient.stopChopping();
        this.ingredient = null;
    }

    update() {}
}
