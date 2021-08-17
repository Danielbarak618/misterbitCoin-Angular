import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs';
import { Contact } from '../../services/contact.model';

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss'],
})
export class ContactAppComponent implements OnInit {
  contacts: Contact[];
  subscription: Subscription;
  term = '';

  constructor(private contactService: ContactService) {}
  setFilter(e: any) {
    this.term = e;
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.loadContacts({ term: this.term });
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  ngOnInit(): void {
    this.loadContacts();
  }
}
