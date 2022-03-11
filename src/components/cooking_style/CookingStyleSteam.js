import ASSET_STRING from "../defines/AssetStrings";
import CookingStyle from "./CookingStyle";

export default class CookingStyleSteam extends CookingStyle {
	constructor() {
		super(ASSET_STRING.STEAMER);
	}
}
