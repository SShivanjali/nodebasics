const fs = require('fs');

// function errorHandling (err, data) { //in any callback fn, first arg is err
//     if(err) console.log('err');
//     else console.log(data)
// }

fs.readFile('./demo.txt', 'utf-8', (err, data)=>{
        if(err) console.log('err');
        else console.log(data)
    }
 );

//  fs.writeFile('demo.txt', "AWS>>Azure", 'utf-8', (err, data)=>{
//     if(err) console.log('err');
//     else console.log(data)
// });

fs.writeFile('demo.txt', "AWS>>Google cloud", 'utf-8', (err)=>{
    if(err) console.log('err');
    else console.log("SUCCESSFULL")
});