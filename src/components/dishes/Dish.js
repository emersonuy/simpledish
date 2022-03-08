import SceneObject from "../SceneObject";

export default class Dish extends SceneObject {
    constructor(scene, asset_string, x, y) {
        super(scene, asset_string, x, y);

        this.name = "";
        this.ingredients = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}
