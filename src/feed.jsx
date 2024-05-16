
import {post} from './post';

const exp = 10;

// export default function feed() {
function feed() {
    console.log("Feed post");
    post()
    post()
    post()
}

// export function printFeed() {
function printFeed() {
    console.log("one more feed");
}

export default exp; // we can export variable, function , anything in jsx
export {printFeed};