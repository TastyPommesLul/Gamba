import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EastahEggComponent} from '../eastah-egg/eastah-egg.component';

@Component({
  selector: 'app-gamba',
  imports: [
    FormsModule,
    EastahEggComponent
  ],
  templateUrl: './gamba.component.html',
  styleUrl: './gamba.component.scss'
})
export class GambaComponent {
  balance = 500;

  give = this.balance / 10;

  error = "";

  onGamble(): void {
    let chance = Math.random() * 10;
    if (this.give <= this.balance) {
      this.error = ""
      if (chance > 5) {
        console.log(chance.toPrecision(6));
        this.balance += this.give * 2;
        console.log(this.give);
      } else {
        console.log(chance.toPrecision(6));
        this.balance -= this.give / 2;
        console.log(this.give);
      }
    } else if (this.give > this.balance) {
      this.error = "Set Coins to your Balance or You Don't Have Enough Coins!"
      this.give = this.balance
    }
  }

  allIn(): void {
    this.give = this.balance
  }

  protected readonly document = document;
}
