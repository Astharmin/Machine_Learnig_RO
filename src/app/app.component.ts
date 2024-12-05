import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageControlComponent } from "./components/image-control/image-control.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPracticas';
}
