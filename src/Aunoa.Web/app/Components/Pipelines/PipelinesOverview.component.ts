import { Component } from "@angular/core";
import { Pipeline } from "../../Model/Pipeline";
import { PipelineConfigurationComponent } from "./PipelineConfiguration.component";
import { PipelineService } from "../../Services/PipelineService";

@Component({
    selector: "PipelinesOverview-Component",
    templateUrl: "templates/Pipelines/PipelinesOverview.component.html",
    directives: [PipelineConfigurationComponent],
    providers: [PipelineService]
})
export class PipelinesOverviewComponent {
    private Pipelines : Pipeline[];

    constructor(private pipelineService: PipelineService) {
        this.Pipelines = this.pipelineService.GetPipelines();
    }
}