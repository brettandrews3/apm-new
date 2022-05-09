// Example of Using Observables from Angular

// First, import the Observable bits from rxjs:
import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Declare your Observable as a number that's between 0-9:
const source$: Observable<number> = range(0, 10);


source$.pipe(
	map(x => x * 3),				// map() transforms each emitted item: x is emitted item; multiply x *3 and reassign product to x
	filter(x => x % 2 === 0)		// filter() decides which to pass on; only pass on even numbers in sequence
).subscribe(x => console.log(x));	// subscribe() emits the range of numbers, logging them to the console.

// Result: 0	6	12	18	24