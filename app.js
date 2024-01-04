const fs = require('fs')

fs.mkdir('./text1', (err)=>{
    fs.writeFile('./text1/text1.txt', 'Good morning', (err)=>{
        if(err)throw new Error();
});
});

fs.mkdir('./text2', (err)=>{
    fs.writeFile('./text2/text2.txt', 'Good day', (err)=>{
        if(err)throw new Error();
    });
});

fs.mkdir('./text3', (err)=>{
    fs.writeFile('./text3/text3.txt', 'Good evening', (err)=>{
        if(err)throw new Error();
    });
});

fs.mkdir('./text4', (err)=>{
    fs.writeFile('./text4/text4.txt', 'Hello Okten', (err)=>{
        if(err)throw new Error();
    });
});

fs.mkdir('./text5', (err)=>{
    fs.writeFile('./text5/text5.txt', 'How are you?', (err)=>{
        if(err)throw new Error();
    });
});
