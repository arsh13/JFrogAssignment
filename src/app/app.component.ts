import { Component } from '@angular/core';


/**
 * @whatItDoes Root Component of the App
 * 
 * @Description Holds the toolbar of the app and a router-outlet where either the graph of CVE details
 * are displayed based on the current route
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DependancyGraph';
}
