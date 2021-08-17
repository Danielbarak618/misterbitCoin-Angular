import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../services/user.model';

@Component({
  selector: 'home',

  template: ` <section>
    <section class="home">
      <h2>Mister BitCoin</h2>
      <section class="user-details">
        <p>Name:{{ user.name }}</p>
        <p>
          <img src="./assets/imgs/coins.png" class="home-icons" />
          {{ user.coins }}
        </p>
        <p>
          <img
            class="home-icons"
            src="./assets/imgs/bitcoin.png"
            class="home-icons"
          />
          {{ rate }}
        </p>
      </section>
    </section>
    <app-move-list class="moves" [moves]="getRecentMoves()"></app-move-list>
  </section>`,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User = null;
  rate: Number = 0;
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}
  getRecentMoves() {
    return this.user.moves.slice(0, 3);
  }
  async ngOnInit(): Promise<void> {
    this.user = this.userService.getUser();
    this.rate = await this.bitcoinService.getRate(this.user.coins);
  }
}
