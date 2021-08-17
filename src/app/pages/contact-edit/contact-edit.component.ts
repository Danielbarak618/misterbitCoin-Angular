import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contact: Contact;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  onRemoveContact() {
    this.contactService.deleteContact(this.contact._id);
    this.router.navigateByUrl('/contact');
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const { contactId } = params;
      this.contact = contactId
        ? await this.contactService.getContactById(contactId).toPromise()
        : this.contactService.getEmptyContact();
    });
  }

  async onSaveContact() {
    try {
      await this.contactService.saveContact(this.contact);
      this.router.navigateByUrl('/contact');
    } catch (err) {
      console.log(err);
    }
  }
}
