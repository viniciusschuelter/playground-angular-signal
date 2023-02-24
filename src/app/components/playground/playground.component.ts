import { Component } from '@angular/core';
import { isLogged } from '../../../app/signals/user.signal';



@Component({
  standalone: true,
  selector: 'app-playground',
  template: `<div>playground works {{logged}}</div>`,
})
export class PlaygroundComponent {
  logged = isLogged();

}
