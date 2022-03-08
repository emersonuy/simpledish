import SceneObject from "./SceneObject";

export default class Plate extends SceneObject {
    constructor(scene, asset_string, x, y) {
        super(scene, asset_string, x, y);
        this.ingredients = [];
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}
