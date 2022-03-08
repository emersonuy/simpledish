import Dish from "./Dish";
import Fish from "../ingredients/Fish";

export default class Sashimi extends Dish {
    constructor(scene, asset_string, x, y) {
        super(scene, asset_string, x, y);

        this.setName("Sashimi");

        let fish = new Fish();
        fish.setNeedToChop(true);

        this.addRequiredIngredients(fish);
    }
}
