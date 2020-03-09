import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DependancyGraphService } from '../_common/services/dependancy-graph.service';
import { DependancyGraph } from '../_common/models/dependancy-graph.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return !!(control && control.invalid && (control.dirty || control.touched));
    }
}


/**
 * @whatItDoes Holds the Search Component of the App
 *
 * @Description On submit click, fetches the name of the artifact from the input box
 * and makes an API call to 'dependencyGraph/artifact' to get the components of the artifact.
 */
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    submitted: boolean = false;

    artifactFormControl = new FormControl('', [
        Validators.required
    ]);

    matcher = new MyErrorStateMatcher();

    constructor(private service: DependancyGraphService) {

    }

    ngOnInit() {
        // Reset form when data is recieved
        this.service.artifact.subscribe(() => this.artifactFormControl.reset());
    }

    onSubmit() {
        if (this.artifactFormControl.value) {
            this.submitted = true;
            this.service.formSubmitted.next(true);
            this.service.getComponents(this.artifactFormControl.value).subscribe((data: DependancyGraph) => {
                this.service.artifact.next(data);
            });
        }
        else {
            this.artifactFormControl.markAsTouched();
        }
    }
}


