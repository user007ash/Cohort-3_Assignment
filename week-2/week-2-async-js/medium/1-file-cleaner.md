## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


const fs = require("fs").promises;

async function removeSpaces (fileName) {
  let newData = '';
  await fs.readFile(fileName,'utf8',(err,data)=>{
      if (err) {
        console.error(err);
      }
      newData +=data.replace(/\s+/g,' ');     
  })
  try{
  await fs.writeFile(fileName,newData,'utf8');
  }.catch(e){console.log(e)}
}

