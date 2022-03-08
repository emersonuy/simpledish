import COOKING_STYLE from "../defines/CookingStyles";
import SceneObject from "../SceneObject";

export default class Cookware extends SceneObject {
    constructor(scene, asset_string, x, y) {
        super(scene, asset_string, x, y);

        this.ingredient = null;
        this.cooking_style = COOKING_STYLE.BOIL;
    }

    setCookingStyle(style) {
        this.cooking_style = style;
    }

    canCookIngredient(ingredient) {
        return ingredient.getCookingStyle() === this.cooking_style;
    }

    setIngredient(ingredient) {
        if (ingredient.needsToBeChopped() && !ingredient.isChopped()) return;
        if (ingredient.isCooked()) return;
        if (ingredient.needsToBeCooked() === false) return;

        this.ingredient = ingredient;
        ingredient.startCooking();
    }

    clearIngredient() {
        if (this.ingredient === null) return;

        this.ingredient.stopCooking();
        this.ingredient = null;
    }

    update() {}
}
