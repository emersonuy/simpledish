import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";
import ASSET_STRING from "../defines/AssetStrings";

export default class BoilingPot extends Cookware {
    constructor(scene, x, y) {
        super(scene, ASSET_STRING.BOILING_POT, x, y);

        this.setCookingStyle(COOKING_STYLE.BOIL);
    }
}
