import Text from "./Text";

export default class ScoreText extends Text {
	constructor(scene, x, y, text) {
		super(scene, x, y, text, {
			fontSize: "40px",
			color: "#FFF",
			stroke: "#000",
			strokeThickness: 3,
		});
	}
}
