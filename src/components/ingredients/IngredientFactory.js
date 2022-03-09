import ASSET_STRING from "../defines/AssetStrings";
import Fish from "./Fish";
import Nori from "./Nori";
import Rice from "./Rice";

const IngredientFactory = {
	create: (asset_string_id) => {
		let ingredient = null;

		switch (asset_string_id) {
			case ASSET_STRING.RAW_FISH:
				ingredient = new Fish();
				break;

			case ASSET_STRING.RAW_RICE:
				ingredient = new Rice();
				break;

			case ASSET_STRING.NORI:
				ingredient = new Nori();
				break;
		}

		return ingredient;
	},
};

export default IngredientFactory;
