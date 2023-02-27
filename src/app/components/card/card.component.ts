import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-card',
    template: `
        <div class="container container-fluid"></div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() card!: number;
}
