import Text from "./Text";

export default class TimerText extends Text {
	constructor(scene, x, y, text) {
		super(scene, x, y, text, {
			fontSize: "60px",
			fontStyle: "bold",
			color: "#0",
		});
	}
}
