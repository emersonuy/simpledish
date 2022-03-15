import ScaleHelper from "../../helpers/ScaleHelper";

var world_object_id = 1;

export default class AbstractSceneObject {
	constructor(scene, x, y, w, h, a) {
		this.scene = scene;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.alpha = a === undefined ? 1 : a;
		this.depth = 0;

		this.id = world_object_id++;

		this.scene_object = null;
		this.child_scene_objects = [];
	}

	initialize() {
		this.scene_object.setOrigin(0);
		this.scene_object.setDepth(this.depth);
		this.scene_object.setAlpha(this.alpha);
		this.setSize(this.w, this.h);
	}

	setAlpha() {
		this.scene_object.setAlpha(this.alpha);
	}

	getAlpha() {
		return this.scene_object.alpha;
	}

	setDepth() {
		this.scene_object.setDepth(this.depth);
	}

	getDepth() {
		return this.scene_object.depth;
	}

	setPosition(x, y) {
		this.scene_object.setPosition(x, y);
	}

	getPosition() {
		return { x: this.scene_object.x, y: this.scene_object.y };
	}

	setSize(w, h) {
		ScaleHelper.scale(this.scene_object, w, h);
	}

	getSize() {
		return {
			w: this.scene_object.width * this.scene_object.scaleX,
			h: this.scene_object.height * this.scene_object.scaleY,
		};
	}

	addSceneObject(scene_object) {
		this.child_scene_objects.push(scene_object);
	}

	removeSceneObject(scene_object) {
		for (let i = 0; i < this.child_scene_objects.length; i++) {
			let child = this.child_scene_objects[i];

			if (child.id === scene_object.id) {
				this.child_scene_objects.splice(i, 1);
				break;
			}
		}
	}
}
