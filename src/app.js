import $ from 'jquery'
import Rx from 'rxjs/Rx'
import { getSubscriber } from './utils/getSubscriber'
/*
const nums = [33, 45, 23, 12, 72, 4, 5]

// Observable form an array
const nums$ = Rx.Observable.from(nums)

nums$.subscribe(getSubscriber('nums'))

// Observable from an array of objects
const users = [
    {name: 'John Doe', email: 'jdoe@mail.com'},
    {name: 'Sam Smith', email: 'ssmith@mail.com'},
    {name: 'Jen Thompson', email: 'jthompson@mail.com'},
]

const users$ = Rx.Observable.from(users)

users$.subscribe(getSubscriber('users'))

// Observable from Set

const set = new Set(['Foo', 43, {name: 'Jeff'}])

const set$ = Rx.Observable.from(set)

set$.subscribe(getSubscriber('set'))

// Observable from Map

const m = new Map([[1,2], [3,4], [5,6]])

const m$ = Rx.Observable.from(m)

m$.subscribe(getSubscriber('map'))

*/

// Observable from String

const str = 'Hello World'
const str$ = Rx.Observable.from(str)

str$.subscribe(getSubscriber('str'))