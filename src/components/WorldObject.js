import ScaleHelper from "../helpers/ScaleHelper";

var world_object_id = 1;

export default class WorldObject {
	constructor(scene, asset_string, x, y, w, h) {
		this.scene = scene;
		this.asset_string = asset_string;
		this.game_object = null;
		this.alpha = 1;
		this.depth = 0;
		this.highlighter = null;
		this.id = world_object_id++;
		this.child_world_objects = [];
		this.initialize(x, y, w, h);
	}

	initialize(x, y, w, h) {
		this.game_object = this.scene.add.image(0, 0, this.asset_string).setOrigin(0);
		this.game_object.setAlpha(this.alpha);
		this.game_object.setDepth(this.depth);
		this.game_object.setPosition(x, y);
		ScaleHelper.scaleGameObject(this.game_object, w, h);
	}

	setAssetString(asset_string) {
		this.asset_string = asset_string;
	}

	on(event, callback) {
		this.game_object.setInteractive();

		let context = this;
		this.game_object.on(event, (e) => {
			callback(context);
		});
	}

	show() {
		if (this.game_object === null) return;
		this.game_object.setAlpha(this.alpha);
	}

	hide() {
		if (this.game_object === null) return;
		this.game_object.setAlpha(0);
	}

	getGameObject() {
		return this.game_object;
	}

	destroy() {
		if (this.game_object !== null) {
			this.game_object.destroy();
		}

		this.game_object = null;
	}

	setPosition(x, y) {
		let x_diff = x - this.game_object.x;
		let y_diff = y - this.game_object.y;
		this.game_object.setPosition(x, y);

		this.child_world_objects.forEach((object) => {
			let child_pos = object.getPosition();
			child_pos.x += x_diff;
			child_pos.y += y_diff;
			object.setPosition(child_pos.x, child_pos.y);
		});
	}

	getPosition() {
		return { x: this.game_object.x, y: this.game_object.y };
	}

	setSize(w, h) {
		ScaleHelper.scaleGameObject(this.game_object, w, h);
	}

	getSize() {
		return {
			w: this.game_object.width * this.game_object.scaleX,
			h: this.game_object.height * this.game_object.scaleY,
		};
	}

	addWorldObject(world_object) {
		this.child_world_objects.push(world_object);
	}

	removeWorldObject(world_object) {
		for (let i = 0; i < this.child_world_objects.length; i++) {
			let child = this.child_world_objects[i];

			if (child.id === world_object.id) {
				this.child_world_objects.splice(i, 1);
				break;
			}
		}
	}
}
