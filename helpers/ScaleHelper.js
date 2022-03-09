const ScaleHelper = {
	scaleObj: (object, scaled_width, scaled_height) => {
		let scale = { x: scaled_width / object.width, y: scaled_height / object.height };

		if (scale.x === 1 && scale.y === 1) return object;

		object.setScale(scale.x, scale.y);

		return object;
	},
};

export default ScaleHelper;
