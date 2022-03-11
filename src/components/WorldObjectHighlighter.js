import ScaleHelper from "../helpers/ScaleHelper";
import WorldObject from "./WorldObject";

export default class WorldObjectHighlighter extends WorldObject {
	constructor(asset_string) {
		super(asset_string);
	}

	hide() {
		this.getGameObject().setAlpha(0);
	}

	show() {
		this.getGameObject().setAlpha(1);
	}

	highlight(scene_object) {
		if (scene_object === null) {
			this.hide();
			return;
		}

		this.highlighted_object = scene_object;

		let position = scene_object.getPosition();
		let size = scene_object.getSize();

		ScaleHelper.scaleGameObject(this.getGameObject(), size.w, size.h);

		this.setPosition(position.x, position.y);
		this.show();
	}

	getHighlightedObject() {
		return this.highlighted_object;
	}
}
