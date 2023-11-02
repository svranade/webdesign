import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1> {{name}}.</h1>
    <a target="_blank" href="https://ेschool4all.org">
     स्कूल फॉर ऑल या ज्ञानदीप फौंडेशनच्या वेबसाईटला भेट द्या
    </a>
  `,
})
export class App {
  name = 'ज्ञानदीपमध्ये मराठीतून वेबडिझाईन  शिका';
}

bootstrapApplication(App); 
