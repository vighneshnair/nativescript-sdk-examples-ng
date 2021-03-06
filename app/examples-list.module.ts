import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ExamplesListComponent } from "./examples-list.component";
import { TitleAndNavButtonModule } from "./directives/title-and-nav-button.module";

export const routerConfig = [{
    path: '',
    component: ExamplesListComponent
}];

@NgModule({
    imports: [TitleAndNavButtonModule, NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ExamplesListComponent]
})

export class ExamplesListModule {
    constructor() { }
}
