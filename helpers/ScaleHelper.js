const ScaleHelper = {
	scaleObj: (object, scaled_width, scaled_height) => {
		let scale = { x: scaled_width / object.width, y: scaled_height / object.height };

		object.setScale(scale.x, scale.y);

		return object;
	},
};

export default ScaleHelper;
