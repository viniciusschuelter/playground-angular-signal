import {AfterViewInit, Directive, effect, ElementRef, EventEmitter, Input, NgZone, Output, Signal} from '@angular/core';

import { fromIntersectionObserver } from '../../utils/from-intersection-observer';
import {fromSignal} from "../../utils/from-signal";
import {counter} from "../../signals/playground.signal";

@Directive({ standalone: true, selector: '[lazyRenderer]' })
export class LazyRendererDirective implements AfterViewInit {
    @Input() intersectionDebounce = 0;
    @Input() intersectionRootMargin = '0px';
    @Input() intersectionRoot!: HTMLElement;
    @Input() intersectionThreshold!: number | number[];

    @Output() visibilityChange = new EventEmitter<boolean>();

    constructor(private element: ElementRef, private ngZone: NgZone) {}

    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => {
            const element = this.element.nativeElement;
            const config = {
                root: this.intersectionRoot,
                rootMargin: this.intersectionRootMargin,
                threshold: this.intersectionThreshold,
            };

            const signalObserver: Signal<boolean> = fromIntersectionObserver(element, config);

            effect(() => {
              this.visibilityChange.emit(signalObserver());
              console.log('the card is rendered: ' + signalObserver())
            });
            // .subscribe(status => {
            //   this.ngZone.run(() => this.visibilityChange.emit(status));
            // });
        });
    }
}
