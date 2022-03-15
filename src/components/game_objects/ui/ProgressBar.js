import UIObject from "./UIObject";

export default class ProgressBar extends UIObject {
	constructor(scene, x, y, w, h, fill, a) {
		super(scene, x, y, w, h, fill, a);

		this.scene_object = this.scene.add.rectangle(
			this.x,
			this.y,
			this.w,
			this.h,
			this.fill,
			this.alpha
		);

		this.track = this.scene.add.rectangle(
			this.x,
			this.y,
			this.w,
			this.h,
			~this.fill,
			this.alpha
		);

		this.initialize();
	}

	initialize() {
		super.initialize();

		this.track.setOrigin(0);
		this.track.setDepth(this.depth);
		this.track.setAlpha(this.alpha);
		this.track.setSize(this.w, this.h);

		this.progress = 0;

		this.setProgress(this.progress);
	}

	setProgress(progress) {
		let bar_width = this.getSize().w;
		let track_width = (progress / 100) * bar_width;
		this.track.width = track_width;
	}
}
