import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // Pubsub.publish('NOVO_CARTAO', { conteudo: 'Bagulhos Novo 2' })
    // Pubsub.publish('NOVO_CARTAO', { conteudo: 'Bagulhos Novo 3' })
    // Pubsub.publish('NOVO_CARTAO', { conteudo: 'Bagulhos Novo 4' })
  }
}
