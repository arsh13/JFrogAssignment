import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComponentDetails, DependancyGraph } from './dependancy-graph.model';
import { Subject, BehaviorSubject } from 'rxjs';

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
