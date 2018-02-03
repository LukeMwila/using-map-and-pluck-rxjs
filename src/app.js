import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'

/**
 * Creating observables from a Promise:
 * A Promise is an object used fo asynchronours computations. It can represent a value that can be available now or later on.
 */

/*
 // Promise
 const myPromise = new Promise((resolve, reject) => {
     console.log('creating promise')
     setTimeout(() => {
         console.log('Something')
         resolve('Hello From Promise!')
     }, 2000)
 })

 //Without observable
 myPromise.then(x => {
     console.log(x)
 })

Rx.Observable.fromPromise(myPromise)
        .subscribe(getSubscriber('promise'))
*/
let input = $('#input')
let profile = $('#profile')
profile.hide()

Rx.Observable.fromEvent(input, 'keyup')
            .subscribe(e => {
                profile.show()
                Rx.Observable.fromPromise(getGithubUser(e.target.value))
                  .subscribe(user => {
                    $('#name').text(user.data.name)
                    $('#login').text(user.data.login)
                    $('#blog').text(user.data.blog)
                    $('#avatar').attr('src', user.data.avatar_url)
                    $('#repos').text(user.data.public_repos)
                    $('#followers').text(user.data.followers)
                    $('#following').text(user.data.following)
                    $('#link').attr('href', user.data.html_url)
                  })
            })

function getGithubUser(username){
    return $.ajax({
        url: 'https://api.github.com/users/'+ username +'?client_id=86a138f40fd040248d41&client_secret=264f88af2f74c92ea39ed23398137758e3001cec',
        dataType: 'jsonp'
    }).promise()
}
