import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import {Storage,getDownloadURL,ref,uploadBytesResumable} from '@angular/fire/storage'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  States=['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Delhi','Daman and Diu','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Jammu and Kashmir','Karnataka','Kerala','Ladakh','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Puducherry','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']
  downloadurl: any;
  constructor(private formBuilder: FormBuilder,public storage: Storage) {}


  // States=['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']
  file: any;
  data=[1,2,3,4]
  ngOnInit(){
  this.myForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    location: ['',Validators.required],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    youtube: ['',Validators.required],
    photo: [null, Validators.required],
  });
  }
  

  async sendMail(){

    emailjs.init('vekpfPMGlhYsqFPJ8');
    let response = await emailjs.send("service_cayy47x","template_590udva",{
      from_name: this.myForm.value.firstName,
      from_message: this.myForm.value.message,
      from_number: this.myForm.value.mobileNumber,
      from_email: this.myForm.value.email,
      from_location: this.myForm.value.location,
      from_youtube: this.myForm.value.youtube?this.myForm.value.youtube:'Nil',
      from_image: this.downloadurl
      });
  }

  async sendGreetingsMail(){
    // emailjs.init('vekpfPMGlhYsqFPJ8');
    let response = await emailjs.send("service_cayy47x","template_vz1r6nn",{
      to_name: this.myForm.value.firstName,
      to_email: this.myForm.value.email,
      });
      this.myForm.reset();
      alert("Message Sent")
  }
  submit(){
    this.onSubmit();
    this.sendMail();
    this.sendGreetingsMail();
  }

  onSubmit() {
    if (this.myForm.valid) {
      const username = this.myForm.value.firstName; 
      const folderRef = ref(this.storage, username);//foldername

      const userDetails = {
        name: this.myForm.value.firstName,
        message: this.myForm.value.message,
        number: this.myForm.value.mobileNumber,
        email: this.myForm.value.email,
        location: this.myForm.value.location,
        youtube: this.myForm.value.youtube?this.myForm.value.youtube:'Nil'
      };

      const userDetailsFile = new Blob([JSON.stringify(userDetails)], { type: 'text/plain' });//userdetailstxtfile

      const userDetailsRef = ref(folderRef, 'user-details.txt');
      const userDetailsUploadTask = uploadBytesResumable(userDetailsRef, userDetailsFile);
      userDetailsUploadTask.then(() => {
      console.log('User details file uploaded successfully');

        const fileRef = ref(folderRef, 'file');
        const fileUploadTask = uploadBytesResumable(fileRef, this.file);
        fileUploadTask.on('state_changed', (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('File upload is ' + progress + '% done');
        },
        (error)=>{
          console.log(error.message);
        },
        ()=>{
          getDownloadURL(fileUploadTask.snapshot.ref).then((downLoadURL)=> {
            console.log("Download File",downLoadURL)
            this.downloadurl=downLoadURL;
          }
          );
        }
        );
      }).catch((error) => {
        console.log('Error uploading user details file:', error);
      });
    } else {
      console.log('Form is invalid.');
    }
  }

  getFile(event: any) {
    this.file = event.target.files[0];
  }

}
