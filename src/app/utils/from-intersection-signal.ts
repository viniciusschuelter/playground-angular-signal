import { signal, Signal } from '@angular/core';

export const fromIntersectionSignal = (element: HTMLElement, config: IntersectionObserverInit): Signal<boolean> => {
    const signals: WeakMap<Element, Signal<boolean>> = new WeakMap<Element, Signal<boolean>>();
    const initialSignal = signal(false);

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (signals.get(entry.target)) {
                // @ts-ignore
              signals.set(entry.target, signals.get(entry.target)?.set(isIntersecting(entry)));
            } else {
              signals.set(entry.target, initialSignal);
              initialSignal.set(isIntersecting(entry));
            }
        });
    }, config);

    intersectionObserver.observe(element);

    return signals.get(element) || initialSignal;
};

function isIntersecting(entry: IntersectionObserverEntry): boolean {
    return entry.isIntersecting || entry.intersectionRatio > 0;
}
