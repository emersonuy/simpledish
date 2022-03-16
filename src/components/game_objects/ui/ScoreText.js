import Text from "./Text";

export default class ScoreText extends Text {
	constructor(scene, x, y, text) {
		super(scene, x, y, text, {
			fontSize: "80px",
			fontStyle: "bold",
			fontFamily: "Arial",
			color: "#0",
		});
	}
}
