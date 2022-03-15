import UIObject from "./UIObject";

export default class Text extends UIObject {
	constructor(scene, x, y, text, style) {
		super(scene, x, y, 0, 0);

		this.scene_object = this.scene.add.text(x, y, text, style);
		this.scene_object.setOrigin(0);
	}
}
