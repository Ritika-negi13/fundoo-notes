import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  openNewAccount(){
    const card = document.getElementById('newcard');
    if (card) {
      card.style.display = 'block';
    }
  }
}
