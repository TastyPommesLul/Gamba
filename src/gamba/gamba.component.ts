import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EastahEggComponent} from '../eastah-egg/eastah-egg.component';
import {Utils} from '../Utils';

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
  step = 50;


  error = "";

  async onGamble(): Promise<void> {
    let chance = Math.ceil(Math.random() * 100);
    await Utils.delay(500);
    if (this.give <= this.balance) {
      if (chance > 95) {
        console.log(chance);
        this.balance += this.give * 10;
        this.error = "You Hit The JackPot!"
      } else if (chance > 60) {
        this.error = ""
        console.log(chance);
        this.balance += this.give * 2;
      } else {
        console.log(chance);
        this.balance -= this.give / 2;
      }
    } else if (this.give > this.balance) {
      this.error = "Coins Have been set to your Balance Because You Can't Gamble More Than You Have!";
      this.give = this.balance
      await this.onGamble();
    }
  }

  allIn(): void {
    this.give = this.balance
  }

  addCoins(): void {
    this.give += this.step;
  }

  removeCoins(): void {
    this.give -= this.step;
  }

  addStep(): void {
    this.step += 25;
  }

  removeStep(): void {
    this.step -= 25;
  }

}
