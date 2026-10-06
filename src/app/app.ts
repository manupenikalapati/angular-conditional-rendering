import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  isLoggedin = false;
  age = 16;
  marks = 85;

  isLoading = false;
  isError = false;
  userName = "Manmohan";
}
