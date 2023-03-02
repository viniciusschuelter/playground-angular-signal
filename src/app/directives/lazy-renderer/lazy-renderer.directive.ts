import {
    AfterViewInit,
    Directive,
    effect,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    Output,
    Signal,
} from '@angular/core';

import { fromIntersectionSignal } from '../../utils/from-intersection-signal';

@Directive({ standalone: true, selector: '[lazyRenderer]' })
export class LazyRendererDirective implements AfterViewInit {
    @Input() intersectionDebounce = 0;
    @Input() intersectionRootMargin = '0px';
    @Input() intersectionRoot!: HTMLElement;
    @Input() intersectionThreshold!: number | number[];

    @Output() rendered = new EventEmitter<boolean>();

    constructor(private element: ElementRef) {}

    ngAfterViewInit() {
        const element = this.element.nativeElement;
        const config = {
            root: this.intersectionRoot,
            rootMargin: this.intersectionRootMargin,
            threshold: this.intersectionThreshold,
        };

        const signalObserver: Signal<boolean> = fromIntersectionSignal(element, config);

        effect(() => {
            this.rendered.emit(signalObserver());
            console.log('the card is rendered: ' + signalObserver());
        });
    }
}
