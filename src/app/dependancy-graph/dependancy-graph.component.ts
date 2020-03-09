import { Component, OnInit } from '@angular/core';
import { DependancyGraphService } from './dependancy-graph.service';
import { DependancyGraph } from './dependancy-graph.model';

@Component({
    selector: 'app-dependancy-graph',
    templateUrl: './dependancy-graph.component.html',
    styleUrls: ['./dependancy-graph.component.css']
})
export class DependancyGraphComponent implements OnInit {

    constructor(private service: DependancyGraphService) { }

    ngOnInit() {
        this.service.getComponents().subscribe((data: DependancyGraph) => {
            console.log(data);
            console.log('Name:' + data.components[0].component_name);
            console.log('Children:' + data.components[0].components);
            this.service.artifact.next(data.components);
        });
    }

}
