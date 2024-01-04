const fs = require('fs');
const path = require('path');


fs.mkdir('./text1', (err)=>{
    fs.writeFile('./text1/text1.txt', 'Good morning', (err)=>{
        if(err)throw new Error();

        /*const pathToFile = './text1';
        const pathToFile2 = './text1/text1.txt';
        console.log('Folder: ' +path.basename(pathToFile));
        console.log('File: ' +path.basename(pathToFile2));*/
});
});

fs.mkdir('./text2', (err)=>{
    fs.writeFile('./text2/text2.txt', 'Good day', (err)=>{
        if(err)throw new Error();
        /*const pathToFile3 = './text2';
        const pathToFile4 = './text2/text2.txt';
        console.log('Folder: ' +path.basename(pathToFile3));
        console.log('File: ' +path.basename(pathToFile4));*/
    });
});

fs.mkdir('./text3', (err)=>{
    fs.writeFile('./text3/text3.txt', 'Good evening', (err)=>{
        if(err)throw new Error();
        /*const pathToFile5 = './text3';
        const pathToFile6 = './text3/text3.txt';
        console.log('Folder: ' +path.basename(pathToFile5));
        console.log('File: ' +path.basename(pathToFile6));*/
    });
});

fs.mkdir('./text4', (err)=>{
    fs.writeFile('./text4/text4.txt', 'Hello Okten', (err)=>{
        if(err)throw new Error();
        /*const pathToFile7 = './text4';
        const pathToFile8 = './text4/text4.txt';
        console.log('Folder: ' +path.basename(pathToFile7));
        console.log('File: ' +path.basename(pathToFile8));*/
    });
});

fs.mkdir('./text5', (err)=>{
    fs.writeFile('./text5/text5.txt', 'How are you?', (err)=>{
        if(err)throw new Error();
        /*const pathToFile9 = './text5';
        const pathToFile10 = './text5/text5.txt';
        console.log('Folder: ' +path.basename(pathToFile9));
        console.log('File: ' +path.basename(pathToFile10));*/
    });
});
fs.readdirSync('.', {withFileTypes:true})
    .forEach((dirTitle)=> {
        if (dirTitle.isDirectory()) {
            console.log(`Folder: ${dirTitle.name}`);
        } else if (dirTitle.isFile()) {
            console.log(`File: ${dirTitle.name}`);
        }
    });
