import ASSET_STRING from "../defines/AssetStrings";
import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";

export default class Skillet extends Cookware {
    constructor(scene, x, y) {
        super(scene, ASSET_STRING.SKILLET, x, y);

        this.setCookingStyle(COOKING_STYLE.STIR_FRY);
    }
}
