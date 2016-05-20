import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES, Router, Routes } from "@angular/router";
import { PipelinesOverviewComponent } from "./Components/Pipelines/PipelinesOverview.component"

@Component({
    selector: "aunoa-app",
    templateUrl: "templates/app.component.html",
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
        { path: "/Pipelines", component: PipelinesOverviewComponent },
        { path: "/*", component: PipelinesOverviewComponent }
])
export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.navigate(["/Pipelines"]);
    }
}