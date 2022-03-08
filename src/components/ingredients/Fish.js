import AbstractIngredient from "./AbstractIngredient";

export default class Fish extends AbstractIngredient {
    constructor(scene, asset_string, x, y) {
        super(scene, asset_string, x, y);

        this.setName("Fish");
    }
}
