import $ from 'jquery'
import Rx from 'rxjs/Rx'

const input = $('#input')
const button = $('#button')
const coords = $('#coords')

const buttonStream$ = Rx.Observable.fromEvent(button, 'click')

buttonStream$.subscribe(
    function(x){
        console.log('clicked')
        console.log(x)
    },
    function(err){
        console.log(err)
    }, 
    function(){
        console.log('completed')
    })

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup')

inputStream$.subscribe(
    x => {
        console.log(x.target.value)
    },
    err => {
        console.log(err)
    },
    complete => {
        console.log('Completed')
    })

const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove')
    .subscribe(x => {
        coords.html('X: ' + x.clientX + ', Y: ' + x.clientY)
    })
