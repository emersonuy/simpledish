import AbstractSceneObject from "../AbstractSceneObject";

export default class ImageObject extends AbstractSceneObject {
	constructor(scene, asset_string, x, y, w, h) {
		super(scene, x, y, w, h);

		this.asset_string = asset_string;
		this.scene_object = this.scene.add.image(x, y, asset_string);

		this.initialize();
	}
}
