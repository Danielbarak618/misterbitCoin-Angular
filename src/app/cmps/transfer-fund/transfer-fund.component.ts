import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/services/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  amount = 0;
  constructor(private userService: UserService) {}
  transferMoney() {
    this.userService.addMove(this.contact, this.amount);
  }
  ngOnInit(): void {}
}
