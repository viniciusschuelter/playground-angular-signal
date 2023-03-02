import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { DimensionC137Signal } from '../../signals/dimension-c137.signal';
import {LazyRendererDirective} from "../../directives/lazy-renderer/lazy-renderer.directive";

@Component({
    standalone: true,
    selector: 'app-dimension-c137',
    template: `
        <div class="container container-fluid">
            <input
                type="text"
                placeholder="Search"
                [ngModel]="dimensionSignal.searchTerm()"
                (ngModelChange)="dimensionSignal.searchTerm.set($event)"
            />
          <div class="container-grid">
            <div *ngFor="let character of dimensionSignal.characters$ | async"  lazyRenderer [intersectionDebounce]="0" (visibilityChange)="rendered = $event">
              <app-card [character]="character"></app-card>
              {{rendered}}
            </div>
          </div>
        </div>
    `,
    imports: [NgFor, CardComponent, AsyncPipe, HttpClientModule, FormsModule, LazyRendererDirective],
    providers: [DimensionC137Signal],
})
export class DimensionC137Component {
    dimensionSignal = inject(DimensionC137Signal);
    rendered = false;
}
