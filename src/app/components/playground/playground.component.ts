import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isLogged } from '../../../app/signals/user.signal';
import { count, counter, doubleCount, evenOrOdd } from '../../signals/playground.signal';

@Component({
    standalone: true,
    selector: 'app-playground',
    imports: [FormsModule],
    template: `
        <div class="">
            <input type="number" placeholder="Counter" [ngModel]="count()" (ngModelChange)="setCounter($event)" />
            <p>The counter is: {{ count() }}</p>
            <p>This number is {{ evenOrOdd() }}</p>
            <p>The double is {{ doubleCount() }}</p>
        </div>
    `,
})
export class PlaygroundComponent {
    logged = isLogged();
    counter = counter();
    count = count;
    evenOrOdd = evenOrOdd;
    doubleCount = doubleCount;

    setCounter = (value: number): void => counter.update(() => value || 0);
}
