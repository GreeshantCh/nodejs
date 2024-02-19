const fs = require('fs');

if(!fs.existsSync('./new')){                                    //creating a new directory(mkdir)
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created')
    });
}

if(fs.existsSync('./new')){                                     //deleting a directory(rmdir)
    fs.rmdir('./new', (err) => { 
        if (err) throw err;
        console.log('Directory removed')
    });
}