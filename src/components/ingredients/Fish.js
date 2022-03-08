import AbstractIngredient from "./AbstractIngredient";
import COOKING_STYLE from "../defines/CookingStyles";

export default class Fish extends AbstractIngredient {
	constructor() {
		super();

		this.setName("Fish");
	}
}
