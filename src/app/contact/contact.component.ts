import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
  this.myForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    message:  ['', [Validators.required, Validators.minLength(20)]]
  });
  }

  async sendMail(){

    emailjs.init('vekpfPMGlhYsqFPJ8');
    let response = await emailjs.send("service_cayy47x","template_590udva",{
      from_name: this.myForm.value.firstName+' '+this.myForm.value.lastName,
      message: this.myForm.value.message,
      from_number: this.myForm.value.mobileNumber,
      from_email: this.myForm.value.email
      });
      this.myForm.reset();
      alert("Message Sent")

  }
  submit(){

    console.log(this.myForm);
    this.sendMail();
  }

}
