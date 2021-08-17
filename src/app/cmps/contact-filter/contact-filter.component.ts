import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  @Output() onSetFilter = new EventEmitter<string>();
  term: '';
  lala: string;
  private subscription = Subscription;
  constructor(private contactService: ContactService) {}
  // onSetFilter() {
  //   console.log(this.term);
  // }
  setFilter() {
    this.onSetFilter.emit(this.term);
  }

  ngOnInit(): void {}
}
