import ScaleHelper from "../helpers/ScaleHelper";
import ProgressBar from "./ui/ProgressBar";

export default class WorldObject {
    constructor(scene, asset_string, x, y, w, h) {
        this.scene = scene;
        this.asset_string = asset_string;
        this.game_object = null;
        this.alpha = 1;
        this.depth = 0;
        this.highlighter = null;

        this.child_world_objects = [];
        this.initialize(x, y, w, h);
    }

    initialize(x, y, w, h) {
        this.game_object = this.scene.add.image(0, 0, this.asset_string).setOrigin(0);
        this.game_object.setAlpha(this.alpha);
        this.game_object.setDepth(this.depth);
        this.game_object.setPosition(x, y);
        ScaleHelper.scaleGameObject(this.game_object, w, h);
    }

    setAssetString(asset_string) {
        this.asset_string = asset_string;
    }

    on(event, callback) {
        this.game_object.setInteractive();

        let context = this;
        this.game_object.on(event, (e) => {
            callback(context);
        });
    }

    show() {
        if (this.game_object === null) return;
        this.game_object.setAlpha(this.alpha);
    }

    hide() {
        if (this.game_object === null) return;
        this.game_object.setAlpha(0);
    }

    getGameObject() {
        return this.game_object;
    }

    addProgressBar(scene) {
        let position = this.getPosition();
        let size = this.getSize();

        position.y += size.h - size.w / 5;
        this.progress_bar = new ProgressBar(scene, position.x, position.y, size.w);
        this.progress_bar.hide();
    }

    getProgressBar() {
        return this.progress_bar;
    }

    destroy() {
        if (this.game_object !== null) {
            this.game_object.destroy();
        }

        this.game_object = null;
    }

    setPosition(x, y) {
        let x_diff = x - this.game_object.x;
        let y_diff = y - this.game_object.y;
        this.game_object.setPosition(x, y);

        this.child_world_objects.forEach((object) => {
            let child_pos = object.getPosition();
            child_pos.x += x_diff;
            child_pos.y += y_diff;
            object.setPosition(child_pos.x, child_pos.y);
        });
    }

    getPosition() {
        return { x: this.game_object.x, y: this.game_object.y };
    }

    setSize(w, h) {
        ScaleHelper.scaleGameObject(this.game_object, w, h);
    }

    getSize() {
        return {
            w: this.game_object.width * this.game_object.scaleX,
            h: this.game_object.height * this.game_object.scaleY,
        };
    }

    addWorldObject(world_object) {
        this.child_world_objects.push(world_object);
    }
}
