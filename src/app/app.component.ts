import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListViewComponent } from "./views/list-view/list-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-custom-tooltip';
}
