import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { Weatherforecast } from './weatherforecast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
   ngOnInit() {
    
  }

}
