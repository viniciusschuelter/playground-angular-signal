import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CharacterModel } from '../../interfaces/character.interface';

@Component({
    standalone: true,
    selector: 'app-card',
    template: `
        <div class="container-card">
            <img class="w-full h-64 rounded-md transition hover:bg-cyan-300" [src]="character.image" alt="" />
            <h4 class="font-semibold text-xl transition tracking-widest truncate">
                {{ character.name }}
            </h4>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() character!: CharacterModel;
}
