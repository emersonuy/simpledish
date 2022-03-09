export default class SceneObject {
	constructor(asset_string) {
		this.asset_string = asset_string;
		this.scene_object = null;
	}

	on(event, callback) {
		this.scene_object.setInteractive();
		this.scene_object.on(event, callback);
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
}
