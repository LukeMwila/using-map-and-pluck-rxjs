import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

/*
Rx.Observable.interval(1000)
            .take(10)
            .map(v => v * v)
            .subscribe(getSubscriber('map'))

            */
/*
let names = ['Bob', 'Jane', 'Mike']
Rx.Observable.from(names)
            .map(v => v.toUpperCase())
            .subscribe(getSubscriber('name'))
*/

const input = $('#input')
Rx.Observable.fromEvent(input, 'keyup').subscribe(x => {
    console.log(x)
})
