import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'theARC';
  condition=true;
  public WWD="We at ARC help music labels to get their royalty income through public performance rights on their creations. We have collaboration  with music copyright society and we posses a good network on ground to keep a check on the presence of content. Apart from this, we help music labels in song distribution all over India. We are currently mainly engaged in promoting of copyrighted sound recordings for PUBLIC PERFORMANCE, REPRODUCTION, RADIO BROADCAST, TELECAST, WEBCAST as ADMINISTRATOR of copyright pursuant to AUTHORIZATION & PERMISSION from its music.";
  public WWA="We are an enthusiastic music recording organisation committed to creating professional recordings for musicians of all genres. At ARC, we firmly believe in the ability of music to uplift, bind, and form enduring memories. Our team of skilled experts is dedicated to giving artists a stage on which to share their distinctive artistic vision and demonstrate their abilities to the world. We make sure that every recording we create captures the soul and brilliance of the artist's performance by using cutting-edge recording equipment and paying close attention to every last detail. ARC is here to support you on your musical journey whether you are a band, solo artist, or musical ensemble. Join us and let your music receive the outstanding attention it so richly deserves."
  isCollapsed = true;

  toggleNavbarCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onNavItemClicked(): void {
    // Close the menu after a navigation item is clicked
    this.isCollapsed = true;
  }
 
  checkcondition(val :any){
    this.condition=val

  }
  public footerItems = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anupama-arc/', imagePath: 'assets/linkedin.jpeg' },
    { name: 'Instagram', url: 'https://instagram.com/anupama.recording.company?igshid=YmMyMTA2M2Y=', imagePath: 'assets/instagram.png' },
    { name: 'YouTube', url: 'https://youtube.com/@arc_recording_company', imagePath: 'assets/youtube.jpeg' },
    { name: 'Facebook', url: 'https://www.facebook.com/AnupamaRecordingCompany', imagePath: 'assets/facebook.jpeg' },
  ];
  public contact =[
    { name: 'Gmail', url: 'mailto:anupama@anurec.com', imagePath: 'assets/gmail.jpeg',message:"anupama@anurec.com"},
    // { name: 'WhatsApp', url: 'https://web.whatsapp.com/', imagePath: 'assets/whatsapp.jpeg',message:"+91 9234578960" }

  ]
  public location =[    { name: 'Location', url: 'https://g.co/kgs/AqEs3Y', imagePath: 'assets/location.jpg',message:"12th Floor, Tower CS7, Supertech Capetown, Plot No - GH01/A, Sector-74, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201 305" }]
}
