import ScaleHelper from "../../helpers/ScaleHelper";
import UIElement from "./UIElement";

export default class ProgressBar extends UIElement {
	constructor(scene, x, y, width, height) {
		super(scene, x, y, width, height);

		this.progress = 0;
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

		let bg_padding = 0;
		let track_h = bg_h - bg_padding;
		let max_track_w = bg_w - bg_padding;
		let track_w = (max_track_w * this.progress) / 100;

		ScaleHelper.scaleGameObject(this.track, track_w, track_h);
		this.track.setPosition(this.x + bg_padding / 2, this.y + bg_padding / 2);
	}

	update() {
		let bg_w = this.bg.width;
		let bg_h = this.bg.height;

		let bg_padding = 0;
		let track_h = bg_h - bg_padding;
		let max_track_w = bg_w - bg_padding;
		let track_w = (max_track_w * this.progress) / 100;

		ScaleHelper.scaleGameObject(this.track, track_w, track_h);
	}
}
