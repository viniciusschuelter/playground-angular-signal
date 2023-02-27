import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-advanced',
    template: `
        <div class="container container-fluid"></div>
    `,
})
export class AdvancedComponent {
    listItems: number[] = [...Array(100).keys()];
}
