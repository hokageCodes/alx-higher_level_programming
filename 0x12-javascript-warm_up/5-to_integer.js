#!/usr/bin/node
const number = parseInt(process.argv[2]);
if (Number.isNan(number)) {
    console.log('Not a number');
} else {
    console.log('Ny number: ' + number);
}
