import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  condition=true;
  public WWD="We at ARC help music labels to get their royalty income through public performance rights on their creations. We have collaboration  with music copyright society and we posses a good network on ground to keep a check on the presence of content. Apart from this, we help music labels in song distribution all over India. We are currently mainly engaged in promoting of copyrighted sound recordings for PUBLIC PERFORMANCE, REPRODUCTION, RADIO BROADCAST, TELECAST, WEBCAST as ADMINISTRATOR of copyright pursuant to AUTHORIZATION & PERMISSION from its music.";
  public WWA="We are an enthusiastic music recording organisation committed to creating professional recordings for musicians of all genres. At ARC, we firmly believe in the ability of music to uplift, bind, and form enduring memories. Our team of skilled experts is dedicated to giving artists a stage on which to share their distinctive artistic vision and demonstrate their abilities to the world. We make sure that every recording we create captures the soul and brilliance of the artist's performance by using cutting-edge recording equipment and paying close attention to every last detail. ARC is here to support you on your musical journey whether you are a band, solo artist, or musical ensemble. Join us and let your music receive the outstanding attention it so richly deserves."
  public famil="Self-taught musician Fahmil Khan's musical journey started with UAE jam sessions, leading to global shows. Despite an engineering degree, he pursued a playback singing career, gaining popularity through jamming sessions and collaborations, releasing originals, and inspiring others with his talent and dedication."
  public antonio="BDE as we quote Ghost The Plug is known for releasing singles and albums MONCLER has been in the making over 2 years and we are set to drop the EP's one at a time so our fans and listeners have more to look forward to lets keep our eyes open and see what's in the stock this year."
  public Aashirwad="Aashirwad Music Studio is centrally based in indore. we provide professional quality sound recording. We are efficient at our audio, mixing, editing, mastering, composing, music, arrangement etc. Projects we do includes music albums, Solo Songs, Cover Songs Reprise Versions, Unplugged Songs, Movie Background Scores and much more. We are continuing our exploring in the music world."
  public titles: string[] = [
    "International content distribution",
    "International artist management",
    "Music Copyright",
    "Royalty Income",
    "Public performance right",
    "Content acquisition",
    "Intellectual Property",
    "Music Production",
    "Music Promotion",
    "Artist Promotion",
    "Songs Distribution",
    "Repertoire advancement"
  ];

  // contact
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
  // contactform

  checkcondition(val :any){
    this.condition=val
  }

}
