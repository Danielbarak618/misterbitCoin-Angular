import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/services/contact.model';

@Component({
  selector: 'contact-preview',
  template: `<li class="contact-preview">
    <a [routerLink]="['/contact', contact._id]">Details</a>

    <p>{{ contact.name }}</p>
    <img src="https://robohash.org/+{{ contact._id }}" />
  </li>`,
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  constructor() {}

  ngOnInit(): void {}
}
