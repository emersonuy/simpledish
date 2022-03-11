import Phaser from "phaser";
import ScaleHelper from "../../helpers/ScaleHelper";

export default class ProgressBar {
	constructor(scene, x, y, width) {
		this.scene = scene;
		this.progress = 0;

		this.bg = scene.add.rectangle(x, y, width, width / 5, 0xff0000, 0.8).setOrigin(0);
		this.track = scene.add.rectangle(x, y, width, width / 5, 0x00ff00, 0.8).setOrigin(0);

		this.x = x;
		this.y = y;
		this.setPosition(x, y);
	}

	hide() {
		this.bg.setAlpha(0);
		this.track.setAlpha(0);
	}

	show() {
		this.bg.setAlpha(0.8);
		this.track.setAlpha(0.8);
	}

	setProgress(progress) {
		this.progress = progress;
		this.update();
	}

	setDimension(w, h) {}

	setPosition(x, y) {
		let bg_w = this.bg.width;
		let bg_h = this.bg.height;

		this.bg.setPosition(this.x, this.y);

		let bg_padding = bg_h / 5;
		let track_h = bg_h - bg_padding;
		let max_track_w = bg_w - bg_padding;
		let track_w = (max_track_w * this.progress) / 100;

		ScaleHelper.scaleGameObject(this.track, track_w, track_h);
		this.track.setPosition(this.x + bg_padding / 2, this.y + bg_padding / 2);
	}

	update() {
		let bg_w = this.bg.width;
		let bg_h = this.bg.height;

		let bg_padding = bg_h / 5;
		let track_h = bg_h - bg_padding;
		let max_track_w = bg_w - bg_padding;
		let track_w = (max_track_w * this.progress) / 100;

		ScaleHelper.scaleGameObject(this.track, track_w, track_h);
	}
}
