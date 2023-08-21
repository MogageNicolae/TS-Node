declare module 'stats' {
    export function getMaxIndex<T>(input: any, comparator: (a:T,b:T) => number): number;
    export function getMaxElement<T>(input: any, comparator: (a:T,b:T) => number): T|null;
    export function getMinIndex<T>(input: any, comparator: (a:T,b:T) => number): number;
    export function getMinElement<T>(input: any, comparator: (a:T,b:T) => number): T|null;
    export function getMedianIndex<T>(input: any, comparator: (a:T,b:T) => number): number;
    export function getMedianElement<T>(input: any, comparator: (a:T,b:T) => number): T|null;
    export function getAverageValue<T>(input: any, getValue: (a:T) => number): number|null;
}
