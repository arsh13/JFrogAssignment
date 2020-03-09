import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ComponentDetails } from '../dependancy-graph/dependancy-graph.model';
import { DependancyGraphService } from '../dependancy-graph/dependancy-graph.service';
import { Router } from '@angular/router';

export class CveDetails {
    component: string;
    cves: string[];
    error?: string;
}

@Component({
    selector: 'app-display-tree',
    templateUrl: './display-tree.component.html',
    styleUrls: ['./display-tree.component.css']
})
export class DisplayTreeComponent implements OnInit {
    treeControl = new NestedTreeControl<ComponentDetails>(node => node.components);
    dataSource = new MatTreeNestedDataSource<ComponentDetails>();

    constructor(private service: DependancyGraphService, private router: Router) {
    }

    hasChild = (_: number, node: ComponentDetails) => !!node.components && node.components.length > 0;

    ngOnInit() {
        this.service.artifact.subscribe(components => this.dataSource.data = components);
    }

    showCveDetails(id) {
        const arr = [];
        arr.push(id);
        this.service.showCveDetails(arr).subscribe((data: CveDetails[]) => {
            data.map(details => {
                window.open('/cve-details?component=' + details.component
                    + '&cves=' + JSON.stringify(details.cves)
                    + '&error=' + details.error,
                    '_blank');
            });
        });
    }

}
