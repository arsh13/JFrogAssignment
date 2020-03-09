import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ComponentDetails, DependancyGraph } from '../_common/models/dependancy-graph.model';
import { DependancyGraphService } from '../_common/services/dependancy-graph.service';
import { Router } from '@angular/router';
import { CveDetails } from '../_common/models/cve-details.model';


/**
 * @WhatItDoes Displays the dependancy graph of the Artifact Components
 *
 * @description Subscribes to the result of the API call, as soon as data is recieved, displays it in tree structure
 * On click of any component, a new tab is opened displaying it's CVE Details
 *
 * Also, subscribes to the button form submit, as soon as form is submitted, starts showing the spinner and 
 * stops when API data is recieved
 */
@Component({
    selector: 'app-display-tree',
    templateUrl: './display-tree.component.html',
    styleUrls: ['./display-tree.component.css']
})
export class DisplayTreeComponent implements OnInit {
    treeControl = new NestedTreeControl<ComponentDetails>(node => node.components);
    dataSource = new MatTreeNestedDataSource<ComponentDetails>();
    displayTree = false;
    artifactName;
    showSpinner = false;

    constructor(private service: DependancyGraphService, private router: Router) {
    }

    hasChild = (_: number, node: ComponentDetails) => !!node.components && node.components.length > 0;

    ngOnInit() {
        this.service.artifact.subscribe(data => {
            this.artifactName = data.artifact.name;
            this.dataSource.data = data.components;
        });

        this.service.formSubmitted.subscribe(submitted => this.displayTree = submitted);
    }

    showCveDetails(id) {
        this.showSpinner = true;
        const arr = [];
        arr.push(id);
        this.service.showCveDetails(arr).subscribe((data: CveDetails[]) => {
            this.showSpinner = false;
            data.map(details => {
                window.open('/cve-details?component=' + details.component
                    + '&cves=' + JSON.stringify(details.cves)
                    + '&error=' + details.error,
                    '_blank');
            });
        });
    }

}
