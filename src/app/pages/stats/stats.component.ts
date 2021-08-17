import { compileFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  marketPrice: any = null;
  transactions: any = null;
  type: any = 'LineChart';
  title: string = 'Price chart USD';
  dailyPrice: any = null;
  dailyTransactions: any = null;
  width = 550;
  height = 400;
  myOptions = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  };

  constructor(private bitcoinService: BitcoinService) {}

  isChartLoading() {
    return (
      !this.marketPrice ||
      !this.marketPrice.values ||
      !this.transactions ||
      this.transactions.values
    );
  }

  async ngOnInit(): Promise<void> {
    this.marketPrice = await this.bitcoinService.getMarketPrice();
    this.transactions = await this.bitcoinService.getConfirmedTransactions();
    this.dailyPrice = this.marketPrice.values.map(
      (coord: { x: number; y: number }) => [
        new Date(coord.x).toLocaleString().split(',')[1],
        coord.y,
      ]
    );
    this.dailyTransactions = this.transactions.values.map(
      (coord: { x: number; y: number }) => [
        new Date(coord.x).toLocaleString().split(',')[1],
        coord.y,
      ]
    );
  }
}
