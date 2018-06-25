import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loadedFeature = 'recipe';

  public onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

// ts lint really doesn't like using accesss modifiers...
