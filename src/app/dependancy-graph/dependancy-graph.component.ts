import { Component, OnInit } from '@angular/core';
import { DependancyGraphService } from './dependancy-graph.service';
import { DependancyGraph } from './dependancy-graph.model';

@Component({
    selector: 'app-dependancy-graph',
    templateUrl: './dependancy-graph.component.html',
    styleUrls: ['./dependancy-graph.component.css']
})
export class DependancyGraphComponent implements OnInit {
    displayTree = false;
    constructor(private service: DependancyGraphService) { }

    ngOnInit() {
        // this.service.formSubmitted.subscribe(submitted => {
        //     this.displayTree = true;
        // });
    }

}
