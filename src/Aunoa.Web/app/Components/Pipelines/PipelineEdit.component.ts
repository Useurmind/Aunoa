import { Component, Input } from "@angular/core";

import { Pipeline } from "../../Model/Pipeline";
import { PipelineService } from "../../Services/PipelineService";

@Component({
    selector: "PipelineEdit-Component",
    templateUrl: "templates/Pipelines/PipelineEdit.component.html",
    providers: [PipelineService]
})
export class PipelineEditComponent {
    @Input() Pipeline : Pipeline;

    constructor(private pipelineService: PipelineService) {
        this.Pipeline = new Pipeline();
    }

    public SavePipeline() {
        
    }
}