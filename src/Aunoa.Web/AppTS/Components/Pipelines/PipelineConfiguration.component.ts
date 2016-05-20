import { Component, Input } from "@angular/core";

import { Pipeline } from "../../Model/Pipeline";

@Component({
    selector: "PipelineConfiguration-Component",
    templateUrl: "templates/Pipelines/PipelineConfiguration.component.html"
})
export class PipelineConfigurationComponent {
    @Input() Pipeline : Pipeline;

    constructor() {
        
    }
}