import ASSET_STRING from "../../../defines/AssetStrings";
import Ingredient from "../Ingredient";

const IngredientFactory = {
	create: (scene, asset_string) => {
		let ingredient = null;

		switch (asset_string) {
			case ASSET_STRING.FISH:
			case ASSET_STRING.RICE:
			case ASSET_STRING.NORI:
				ingredient = new Ingredient(scene, asset_string, 0, 0, 0, 0);
				break;
		}

		return ingredient;
	},
};

export default IngredientFactory;
