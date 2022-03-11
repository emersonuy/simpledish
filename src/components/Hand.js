import AbstractIngredient from "./ingredients/AbstractIngredient";

export default class Hand {
	constructor() {
		this.world_object = null;
	}

	pick(world_object) {
		this.world_object = world_object;
	}

	drop() {
		let world_object = this.world_object;
		this.world_object = null;
		return world_object;
	}

	getWorldObject() {
		return this.world_object;
	}

	holdingIngredient() {
		return this.world_object instanceof AbstractIngredient;
	}

	empty() {
		return this.world_object === null;
	}
}
