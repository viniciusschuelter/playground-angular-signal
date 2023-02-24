import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { count, counter, doubleCount, evenOrOdd } from '../../signals/playground.signal';

@Component({
    standalone: true,
    selector: 'app-playground',
    imports: [FormsModule],
    template: `
        <div class="">
            <input type="number" placeholder="Counter is 0" [ngModel]="count()" (ngModelChange)="setCounter($event)" />
            <p>The count is {{ count() }}</p>
            <p>The number is {{ evenOrOdd() }}</p>
            <p>The double is {{ doubleCount() }}</p>
        </div>
    `,
})
export class PlaygroundComponent {
    counter = counter();

    count = count;
    evenOrOdd = evenOrOdd;
    doubleCount = doubleCount;

    setCounter = (value: number): void => counter.update(() => value || 0);
}
