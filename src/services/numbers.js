const { accepts } = require("express/lib/request");

const romanize = num => {
    // Build a mapping object 
    const mapping = {C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    //cumulate on variable roman all the letter
    let roman = '';
    for (let i in mapping ) {
        while ( num >= mapping[i] ) {
        roman += i;
        num -= mapping[i];
        }
    }
    return roman;
}



module.exports = { romanize }