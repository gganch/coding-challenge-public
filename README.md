# Development Guild Coding Challenge

## Setup
[install Node.js](https://nodejs.org/en/)

`npm install`

## Running tests
`npx jest`

## Linting
`npx eslint </path/goes/here>`

## Challenge Questions

1. countOccurences

Implement a function countOccurences, that accepts a single argument which is a JSON object. 
The JSON object represents a tree, where each leaf (end vertex) contains an integer which represents the number of occurences of some arbitrary key. 
If a node is not a leaf, then its data will be a subgraph, i.e. more JSON.
countOccurences should walk the tree and sum the occurences for each key that it finds on a leaf.
i.e. for the JSON
```
{
    "canine": {
        "foo": 3,
        "bar": 4
    },
    "feline": {
        "foo": 1,
        "bar": 4
    }
}
```
foo would be counted 4 times, and bar would be counted 8 times.

countOccurences should return an array where the first element is the largest sum that was the found,
and the second element is an array of the keys that were found to have the maximal sum.
Feel free to define other functions to help you solve the problem if necessary.

2. callbackHello

Implement a function callbackHello, that accepts two arguments, a function, and an integer. callbackHello should assume that the function that is passed to it is thenable, i.e. it is a promise and you can call fn().then(). callbackHello should execute the function as many times as the second argument
specifies. callbackHello should always wait for the function to finish executing before it calls the
function again.

3. feedback

How would you rate the difficulty of this coding test (easy/medium/hard)?
Is there anything about it that you would improve?
Can you think of any edge cases that weren't covered by the tests?
