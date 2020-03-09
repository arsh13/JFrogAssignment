import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComponentDetails } from './dependancy-graph.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DependancyGraphService {
    artifact = new Subject<ComponentDetails[]>();

    constructor(private http: HttpClient) { }

    getComponents() {
        return this.http.post(
            '/api/v1/dependencyGraph/artifact',
            '{"path": "artifactory-ha/docker-prod-local/docker-app/66"}',
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('admin:x88FwTzaNV')
                })
            });
    }

    showCveDetails(id){
        return this.http.post(
            '/api/v1/component/searchCvesByComponents',
            {"components_id": id},
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('admin:x88FwTzaNV')
                })
            });
    }
}
