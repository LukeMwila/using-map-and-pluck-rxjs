import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

/**
 * // OPERATORS
 * 
 * Interval takes in a duration and starts to emit ascending intergers based on the duration

const source$ = Rx.Observable.interval(2000)
                            .take(10)
                            .subscribe(getSubscriber('interval'))
// timer: Interval with a delay
const source$ = Rx.Observable.timer(3000, 1000)
                            .take(10)
                            .subscribe(getSubscriber('timer'))

// range: There is no timer, it just emits a range of values
const source$ = Rx.Observable.range(0, 10).subscribe(getSubscriber('range'))

// of
const source$ = Rx.Observable.of(45, 'Hello', [2,3,4,5,6]).subscribe(getSubscriber('of'))

*/

let i = 0
const source$ = Rx.Observable.defer(function(){
    i++
    return Rx.Observable.of(i)
})

source$.subscribe(getSubscriber('one'))
source$.subscribe(getSubscriber('two'))
source$.subscribe(getSubscriber('three'))
