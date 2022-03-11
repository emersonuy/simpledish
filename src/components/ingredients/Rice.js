import CookingStyleBoil from "../cooking_style/CookingStyleBoil";
import ASSET_STRING from "../defines/AssetStrings";
import COOKING_STYLE from "../defines/CookingStyles";
import INGREDIENT from "../defines/IngredientNames";
import AbstractIngredient from "./AbstractIngredient";

export default class Rice extends AbstractIngredient {
	constructor() {
		super(ASSET_STRING.RAW_RICE);

		this.setCookedAssetString(ASSET_STRING.STEAMED_RICE);
		this.setCookingStyle(new CookingStyleBoil());

		this.setName(INGREDIENT.RICE);

		this.depth = 4;
	}
}
