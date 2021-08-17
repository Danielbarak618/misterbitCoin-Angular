import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/services/user.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private userService: UserService
  ) {}
  contact: Contact;
  user: User;
  subscription: Subscription;
  getMovesToContact() {
    return this.user.moves.filter((move) => move.toId === this.contact._id);
  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.contactId);
    this.subscription = this.contactService
      .getContactById(this.activatedRoute.snapshot.params.contactId)
      .subscribe((contact) => {
        this.contact = contact;
      });

    this.user = this.userService.getUser();
  }
}
