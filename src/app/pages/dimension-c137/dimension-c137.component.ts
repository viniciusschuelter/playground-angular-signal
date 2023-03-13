import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { DimensionC137Signal } from '../../signals/dimension-c137.signal';

@Component({
  standalone: true,
  selector: 'app-dimension-c137',
  template: `
    <div class="container container-fluid">
      <h3>Example using behavior subject and signals(fromSignals)</h3>
      <input
        type="text"
        placeholder="Search"
        [ngModel]="dimensionSignal.searchTerm()"
        (ngModelChange)="dimensionSignal.searchTerm.set($event)"
      />
      <div class="container-grid">
        <ng-container *ngFor="let character of dimensionSignal.characters$ | async">
          <app-card [character]="character"></app-card>
        </ng-container>
      </div>
    </div>
  `,
  imports: [NgFor, CardComponent, AsyncPipe, HttpClientModule, FormsModule],
  providers: [DimensionC137Signal],
})
export class DimensionC137Component {
  dimensionSignal = inject(DimensionC137Signal);
}
