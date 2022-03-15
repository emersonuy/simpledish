const ScaleHelper = {
	scale: (scene_object, scaled_width, scaled_height) => {
		let scale = {
			x: scaled_width / scene_object.width,
			y: scaled_height / scene_object.height,
		};

		if (scale.x === 1 && scale.y === 1) return scene_object;

		scene_object.setScale(scale.x, scale.y);

		return scene_object;
	},
};

export default ScaleHelper;
