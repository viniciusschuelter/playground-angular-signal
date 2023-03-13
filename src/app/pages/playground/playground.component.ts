import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { count, counter, doubleCount, evenOrOdd } from '../../signals/playground.signal';
import { fromObservable } from '../../utils/from-observable';

@Component({
    standalone: true,
    selector: 'app-playground',
    template: `
        <div class="">
            <h3>Simple examples of reactivity with signals</h3>
            <input type="number" placeholder="Counter is 0" [ngModel]="count()" (ngModelChange)="setCounter($event)" />
            <p>The count is {{ count() }}</p>
            <p>The number is {{ evenOrOdd() }}</p>
            <p>The double is {{ doubleCount() }}</p>
            <br />

            <h3>Example using form group and signals(fromObservable)</h3>

            {{ signalFormGroupValid() }}

            <form [formGroup]="signalFormGroup">
                <input
                    type="text"
                    name="signal"
                    formControlName="signal"
                    placeholder="type 'signal' to validate this form"
                />
            </form>
        </div>
    `,
    imports: [FormsModule, ReactiveFormsModule],
})
export class PlaygroundComponent {
    counter = counter();

    count = count;
    evenOrOdd = evenOrOdd;
    doubleCount = doubleCount;

    private readonly fb = inject(FormBuilder);

    signalFormGroup: FormGroup = this.fb?.group({
        signal: new FormControl('', ({ value }) => (value !== 'signal' ? { signalError: true } : null)),
    });

    signalFormGroupValid = fromObservable(this.signalFormGroup.statusChanges.pipe(), 'INVALID');

    setCounter = (value: number): void => counter.update(() => value || 0);
}
