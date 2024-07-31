import { writeFile } from 'fs';

// Content to be written to the file
const data = 'Hello, this is a test message written to the file.';

writeFile('./easy/text.txt',data, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }  
    console.log("file contents: ", data);
});

function expensiveOperation(itr){
    let sum = 0;
    for(let i = 0; i < itr; i++){
        sum += Math.sqrt(i);
    }
    console.log(`Operation completed with sum : ${sum}`);
}
expensiveOperation(1e6);

console.log("Expensive operation starteds");
