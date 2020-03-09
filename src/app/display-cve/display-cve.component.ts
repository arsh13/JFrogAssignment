import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CveDetails } from '../_common';

/**
 * @whatItDoes Shows the CVE Details of a component
 */
@Component({
    selector: 'app-display-cve',
    templateUrl: './display-cve.component.html',
    styleUrls: ['./display-cve.component.css']
})
export class DisplayCveComponent implements OnInit {
    details: CveDetails;
    constructor(private router: ActivatedRoute) { }

    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            this.details = {
                component: params.component,
                cves: params.cves === ' ' ? [] : JSON.parse(params.cves),
                error: params.error
            };
        });
    }

}
