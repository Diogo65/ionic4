import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(private User: UserService) {

  }

  ngOnInit() {
    console.log('home');
    this.diogoMethod();
  }

  async diogoMethod() {
    try {
      this.User.create({ Id: '123', Nome: 'Diogo' });
      console.log('curso ionic');
      
    } catch (error) {
      console.log('Erro');
    }




  }
}
