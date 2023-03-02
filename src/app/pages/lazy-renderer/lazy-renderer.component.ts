import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { LazyRendererDirective } from '../../directives/lazy-renderer/lazy-renderer.directive';
import { DimensionC137Signal } from '../../signals/dimension-c137.signal';

@Component({
    standalone: true,
    selector: 'app-lazy-renderer',
    template: `
        <div class="container container-fluid">
            <div class="container-grid">
                <div
                    *ngFor="let character of dimensionSignal.hundredCharacters$ | async"
                    lazyRenderer
                    [intersectionDebounce]="0"
                    (rendered)="setItemRenderer(character.id, $event)"
                >
                    <div class="container-card">
                        <app-card *ngIf="rendered.get(character.id)" [character]="character"></app-card>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host .container-card {
                min-height: 320px;
            }
        `,
    ],
    imports: [NgFor, NgIf, CardComponent, AsyncPipe, HttpClientModule, FormsModule, LazyRendererDirective],
    providers: [DimensionC137Signal],
})
export class LazyRendererComponent {
    dimensionSignal = inject(DimensionC137Signal);
    rendered = new Map<number, boolean>();

    setItemRenderer(key: number, value: boolean): void {
        console.log(key, value);
        this.rendered.set(key, value);
    }
}
