const ScaleHelper = {
	scaleGameObject: (game_object, scaled_width, scaled_height) => {
		let scale = { x: scaled_width / game_object.width, y: scaled_height / game_object.height };

		if (scale.x === 1 && scale.y === 1) return game_object;

		game_object.setScale(scale.x, scale.y);

		return game_object;
	},
};

export default ScaleHelper;
