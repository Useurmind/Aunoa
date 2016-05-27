import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES, Router, Routes } from "@angular/router";
import { PipelinesOverviewComponent } from "./Components/Pipelines/PipelinesOverview.component"
import { PipelineEditComponent } from "./Components/Pipelines/PipelineEdit.component"

@Component({
    selector: "aunoa-app",
    templateUrl: "templates/app.component.html",
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
        { path: "/Pipelines", component: PipelinesOverviewComponent },
        { path: "/Pipeline/New", component: PipelineEditComponent },
        { path: "/Pipeline/:id", component: PipelineEditComponent },
        { path: "/*", component: PipelineEditComponent }
])
export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.navigate(["/Pipeline/New"]);
    }
}