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
let client_id = ''
let client_secret = ''
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
        url: 'https://api.github.com/users/'+ username +'?client_id='`${client_id}`'&client_secret='`${client_secret}`,
        dataType: 'jsonp'
    }).promise()
}
