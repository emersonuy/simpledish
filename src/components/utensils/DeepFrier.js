import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";

export default class DeepFrier extends Cookware {
	constructor() {
		super();

		this.setCookingStyle(COOKING_STYLE.DEEP_FRY);
	}
}
