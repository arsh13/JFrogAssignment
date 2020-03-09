import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DependancyGraph } from '../models/dependancy-graph.model';
import { Subject, BehaviorSubject } from 'rxjs';

/**
 * @WhatItDoes Common Service for Dependancy Graph
 * 
 * @description Contains API call services for fetching component details and CVE Details
 * Contains subjects so that common data state is maintained throughout the app
 */
@Injectable({
    providedIn: 'root'
})
export class DependancyGraphService {
    artifact = new Subject<DependancyGraph>();
    formSubmitted = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    getComponents(artifactName: string) {
        return this.http.post(
            '/api/v1/dependencyGraph/artifact',
            { path: artifactName },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('admin:x88FwTzaNV')
                })
            });
    }

    showCveDetails(id: string[]) {
        return this.http.post(
            '/api/v1/component/searchCvesByComponents',
            { components_id: id },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('admin:x88FwTzaNV')
                })
            });
    }
}
