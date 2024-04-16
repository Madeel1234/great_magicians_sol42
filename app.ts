#! /usr/bin/env node

//Task # 42
//Great magicians: Start with a copy of your program from exercise 39 write a function called make great() that modifies
// The array of magicians by adding the phrase the great to each magicians name. call show_magicians() to see that the list
// has actually been modified.
 

function show_magicians(magicians: string[]) : void {
    for(const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase()+magician.slice(1));
    }
}
function make_great(magicians: string[]): void {
    for (let i=0; i<magicians.length;i++)
    magicians[i] = magicians[i]  +  'the great'

}

const magicians2: string[]= ["usman", "haseeb", "wajahat"];
make_great(magicians2)
show_magicians(magicians2)