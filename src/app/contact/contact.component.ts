import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  constructor(private snackBar: MatSnackBar) {}

  submitted = false;

  onSubmit(contactForm: NgForm) {
    console.log('Contact Form Submitted', this.contact);
    this.submitted = true;
    // Réinitialisez le formulaire après l'envoi
    this.contact = { name: '', email: '', message: '' };
    contactForm.resetForm();
    this.openSnackBar();


  }

  openSnackBar() {
    this.snackBar.open('Merci de nous avoir contactés ! Nous vous répondrons sous peu.', 'Fermer', {
      duration: 3000, // Durée en millisecondes
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
