import { Injectable } from "@angular/core";
import { Pipeline } from "../Model/Pipeline";
import { Enumerable } from "typescript-dotnet/source/System.Linq/Linq";

export class PipelineService {
    private pipelines: Pipeline[];

    constructor() {
        this.pipelines = [
            { Id: "1", Name: "Pipeline1", Description: "This is my first pipeline" },
            { Id: "2", Name: "Pipeline2", Description: "This is my second pipeline" }
        ];
    }

    public GetPipelines(): Pipeline[] {
        return this.pipelines;
    }

    public GetPipeline(id: string): Pipeline {
        var pipelineEnum = Enumerable.from<Pipeline>(this.pipelines);
        
        return pipelineEnum.where(p => p.Id == id).first();
    }
}