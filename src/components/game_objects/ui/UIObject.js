import AbstractSceneObject from "../AbstractSceneObject";

export default class UIObject extends AbstractSceneObject {
	constructor(scene, x, y, w, h, fill, a) {
		super(scene, x, y, w, h, a);

		this.fill = fill === undefined ? 0 : fill;
	}
}
