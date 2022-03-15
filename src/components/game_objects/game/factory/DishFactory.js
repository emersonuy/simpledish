import ASSET_STRING from "../../../defines/AssetStrings";
import Dish from "../../../dishes/Dish";

const DishFactory = {
	create(asset_string) {
		let dish = null;

		switch (asset_string) {
			case ASSET_STRING.FISH_MAKI:
			case ASSET_STRING.SASHIMI:
				dish = new Dish(scene, 0, 0, 0, 0);
				break;
		}

		return dish;
	},
};

export default DishFactory;
