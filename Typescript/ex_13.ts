// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    export const pad: (a:number) => string;

    export interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
}
