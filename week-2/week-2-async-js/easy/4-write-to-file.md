## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs').promises;

async function writeFile(fileName,data) {
  await fs.writeFile(fileName,data,'utf-8',(err)=>{
    if (err){
      console.log(err);
    }else{
      console.log('written successfully')
    }
  })
}

writeFile('C:\Users\SAI RAM\Desktop\practice\Cohort-3_Assignment\week-2\week-2-async-js\solutions\easy\example.txt','hello, there will be more text now here.')