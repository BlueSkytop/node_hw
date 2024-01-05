const fs = require('fs');
const path = require('path');


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
/*fs.readdirSync('.', {withFileTypes:true})
    .forEach((dirTitle)=> {
        if (dirTitle.isDirectory()) {
            if (dirTitle.isFile()) {
                console.log(`File: ${dirTitle.name}`);}
            console.log(`Folder: ${dirTitle.name}`);
        }
    });*/
const pathToCreatedFolder =path.join(__dirname)
fs.readdir(pathToCreatedFolder,(err, files)=>{
    for (const textElement of files) {
        const filePath=path.join(pathToCreatedFolder, textElement);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            console.log(`${filePath}is a file`);
        }else if (stats.isDirectory()) {
            console.log(`${filePath}is a folder`);

            const innerFiles = fs.readdirSync(filePath);
            const innerFilePath =path.join(__dirname)
            for (const innerElement of innerFiles) {
                const innerFilesPath = path.join(filePath, innerElement);
                const innerStats = fs.statSync(innerFilePath);
                if (innerStats.isFile()) {
                    console.log(`${innerFilePath} is a file`);
                }else  if (innerStats.isDirectory()) {
                    console.log(`${innerFilePath}is a folder`);
                }
            }
        }
    }
})
