import DISH from "../defines/DishNames";
import FishMaki from "./FishMaki";

const DishFactory = {
	create: (name) => {
		let dish = null;

		switch (name) {
			case DISH.FISH_MAKI:
				dish = new FishMaki();
				break;

			case DISH.SASHIMI:
				dish = new SASHIMI();
				break;
		}

		return dish;
	},
};

export default DishFactory;
