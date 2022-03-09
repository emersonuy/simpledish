import ScaleHelper from "../helpers/ScaleHelper";
import SceneObject from "./SceneObject";

export default class SceneObjectHighlighter extends SceneObject {
    constructor(asset_string) {
        super(asset_string);
    }

    hide() {
        this.scene_object.setAlpha(0);
    }

    show() {
        this.scene_object.setAlpha(1);
    }

    highlight(scene_object) {
        if (scene_object === null) {
            this.hide();
            return;
        }

        this.highlighted_object = scene_object;

        let position = scene_object.getPosition();
        let dimension = scene_object.getDimension();

        ScaleHelper.scaleObj(this.scene_object, dimension.w, dimension.h);

        this.setPosition(position.x, position.y);
        this.show();
    }

    getHighlightedObject() {
        return this.highlighted_object;
    }
}
