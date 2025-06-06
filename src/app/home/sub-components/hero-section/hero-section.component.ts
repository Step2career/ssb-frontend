import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleOrder() {
    alert('Order request functionality would be implemented here!');
    // Add your order request logic here
}

handleLearnMore() {
    alert('Learn more functionality would be implemented here!');
    // Add your learn more logic here
}

}
