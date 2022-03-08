import AbstractStage from "./AbstractStage";
import FishMaki from "../dishes/FishMaki";
import Sashimi from "../dishes/Sashimi";

export default class JapaneseStage extends AbstractStage {
    constructor() {
        super();

        this.addDish(new FishMaki(), TimeHelper.minToMsec(2));
        this.addDish(new Sashimi(), TimeHelper.minToMsec(2));

        this.setStageTimeLimit(TimeHelper.minToMsec(5));
    }
}
