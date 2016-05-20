import { Component } from "@angular/core";
import { Pipeline } from "../../Model/Pipeline";
import { PipelineConfigurationComponent } from "./PipelineConfiguration.component"

@Component({
    selector: "PipelinesOverview-Component",
    templateUrl: "templates/Pipelines/PipelinesOverview.component.html",
    directives: [PipelineConfigurationComponent]
})
export class PipelinesOverviewComponent {
    private Pipelines : Pipeline[];

    constructor() {
        this.Pipelines = [
            { Id: "1", Name: "Pipeline1", Description: "This is my first pipeline" },
            { Id: "2", Name: "Pipeline2", Description: "This is my second pipeline" }
        ];
    }
}