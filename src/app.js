import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

/*
    A cold observable is also known as a passive observable, this means the underlying producer is created and activated during the subscription.
    The producer is the source of the stream of values for the observable. So that could be a DOM event, an iterator or a web socket. Anything you're
    using to get from observer.next()
    So when you subscribe, you actually activate it. 
    An example of a cold observable would be if we set up a request to an API to bring in an array. 

    A hot (or active) observable is always activated and running even outside of that observable. A good example of a hot observable is mousemove events, these are always
    happening whether you subscribe to it or not. If we want to subscribe to that stream, we just tap into it and we can see the values of that stream.
    To turn a cold observable into a hot observable we make use of the publish() function. That makes it a connectable observable, so we have to connect to it to obtain the values from the stream.
*/

/*
const source$ = Rx.Observable.create(observer => {
    observer.next(Date.now())
}).publish()

source$.subscribe(getSubscriber('one'))
source$.subscribe(getSubscriber('two'))

source$.connect()

*/

const source$ = Rx.Observable
                    .interval(1000)
                    .publish()

source$.connect()

setTimeout(() => {
    source$.subscribe(getSubscriber('one'))
    setTimeout(() => {
        source$.subscribe(getSubscriber('two'))
    }, 4000)
},2000)