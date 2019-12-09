import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
  <div class="container">

    <a routerLinkActive="active"
       routerLink="/home" name="Home">Home</a> |

    <a routerLinkActive="active"
      routerLink="/roteiro" name="ResponderRoteiro">roteiro</a> |

   <a routerLinkActive="active"
            routerLink="/cadastrar-roteiro" name="CadastrarRoteiro">cadastrar Roteiro</a>


    <a routerLinkActive="active" 
      routerLink="/roteiro" name="ResponderRoteiro">roteiro</a> 

    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'classManager';
}
