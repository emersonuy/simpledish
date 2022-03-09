import ScaleHelper from "../../helpers/ScaleHelper";

export default class SceneObject {
	constructor(asset_string) {
		this.asset_string = asset_string;
		this.scene_object = null;
	}

	on(event, callback) {
		this.scene_object.setInteractive();

		let context = this;
		this.scene_object.on(event, (e) => {
			callback(context);
		});
	}

	addToScene(scene, x, y) {
		this.safeDelete(this.scene_object);

		this.scene_object = scene.add.image(x, y, this.asset_string);
		this.scene_object.setOrigin(0);
	}

	safeDelete(obj) {
		if (obj !== null) {
			obj.destroy();
		}

		obj = null;
	}

	getSceneObject() {
		return this.scene_object;
	}

	getPosition() {
		return { x: this.scene_object.x, y: this.scene_object.y };
	}

	getDimension() {
		return { w: this.scene_object.width, h: this.scene_object.height };
	}

	setPosition(x, y) {
		this.scene_object.setPosition(x, y);
	}

	renderOnTop(scene, object, scale) {
		let x = this.scene_object.x;
		let y = this.scene_object.y;
		let dimension = this.getDimension();
		let scaled_dimension = { w: dimension.w * scale, h: dimension.h * scale };

		object.addToScene(scene, x, y);
		ScaleHelper.scaleObj(object.getSceneObject(), scaled_dimension.w, scaled_dimension.h);

		object.setPosition(
			x + (dimension.w / 2 - scaled_dimension.w / 2),
			y + (dimension.h / 2 - scaled_dimension.h / 2)
		);
	}
}
