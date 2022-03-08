export default class SceneObject {
    constructor(scene, asset_string, x, y) {
        this.scene_object = scene.add.image(x, y, asset_string);
        this.scene_object.setOrigin(0);
    }

    on(event, callback) {
        this.scene_object.setInteractive();
        this.scene_object.on(event, callback);
    }

    getSceneObject() {
        return this.scene_object;
    }
}
