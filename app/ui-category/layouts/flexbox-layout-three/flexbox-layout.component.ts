import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'flexbox-layout-three-component',
    templateUrl: 'ui-category/layouts/flexbox-layout-three/flexbox-layout.component.html'
})

export class FlexboxLayoutComponentThree implements OnInit {
    public desc: string;

    ngOnInit() {
        this.desc = "By default, flex items will all try to fit onto one line." +
                    "You can change that and allow the items to wrap as needed with this property." +
                    "Direction also plays a role here, determining the direction new lines are stacked in.";
    }
}
