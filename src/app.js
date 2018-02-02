import $ from 'jquery'
import Rx from 'rxjs/Rx'

const input = $('#input')
const button = $('#button')

const buttonStream$ = Rx.Observable.fromEvent(button, 'click')

buttonStream$.subscribe(function(x){
    console.log('clicked')
})