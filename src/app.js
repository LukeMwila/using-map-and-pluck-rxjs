import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

const source$ = new Rx.Observable(observer => {
    console.log('creating observable...')

    observer.next('A value')

    observer.complete()
})

source$.subscribe(getSubscriber('myobs'))