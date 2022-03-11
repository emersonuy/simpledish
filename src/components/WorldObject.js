import { Tilemaps } from "phaser";
import ScaleHelper from "../helpers/ScaleHelper";
import ProgressBar from "./ui/ProgressBar";

export default class WorldObject {
	constructor(asset_string) {
		this.asset_string = asset_string;
		this.game_object = null;
		this.highlighter = null;
		this.alpha = 1;
		this.depth = 0;
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

	addToScene(scene, x, y, alpha) {
		this.safeDelete();

		this.game_object = scene.add.image(x, y, this.asset_string);
		this.game_object.setOrigin(0);
		this.game_object.setFrame(this.frame_index);
		this.game_object.setAlpha(alpha);
		this.game_object.setDepth(this.depth);

		this.alpha = alpha;
	}

	getGameObject() {
		return this.game_object;
	}

	addProgressBar(scene) {
		let position = this.getPosition();
		let size = this.getSize();

		position.y += size.h - size.w / 5;
		this.progress_bar = new ProgressBar(scene, position.x, position.y, size.w);
		this.progress_bar.hide();
	}

	getProgressBar() {
		return this.progress_bar;
	}

	safeDelete() {
		if (this.game_object !== null) {
			this.game_object.destroy();
		}

		this.game_object = null;
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

	setPosition(x, y) {
		this.game_object.setPosition(x, y);
	}

	highlight(highlighter) {
		this.highlighter = highlighter;

		let position = this.getPosition();
		let size = this.getSize();

		this.highlighter.setPosition(position.x, position.y);
		this.highlighter.setSize(size.w, size.h);
		this.highlighter.show();
	}

	highlighted() {
		return this.highlighter !== null;
	}

	removeHighlight() {
		if (!this.highlighted()) return;

		this.highlighter.hide();
		this.highlighter = null;
	}

	addOnTop(scene, world_object, scale) {
		let position = this.getPosition();
		let size = this.getSize();
		let scaled_size = { w: size.w * scale, h: size.h * scale };

		world_object.addToScene(scene, position.x, position.y);
		ScaleHelper.scaleGameObject(world_object.getGameObject(), scaled_size.w, scaled_size.h);

		world_object.setPosition(
			position.x + (size.w / 2 - scaled_size.w / 2),
			position.y + (size.h / 2 - scaled_size.h / 2)
		);
	}
}
