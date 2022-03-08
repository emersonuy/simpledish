import ASSET_STRING from "../defines/AssetStrings";
import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";

export default class DeepFryer extends Cookware {
    constructor(scene, x, y) {
        super(scene, ASSET_STRING.DEEP_FRYER, x, y);

        this.setCookingStyle(COOKING_STYLE.DEEP_FRY);
    }
}
