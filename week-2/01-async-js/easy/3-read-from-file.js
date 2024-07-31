import { readFile } from 'fs';

function expensiveOperation(itr){
  let sum = 0;
  for(let i = 0; i < itr; i++){
      sum += Math.sqrt(i);
  }
  console.log(`Operation completed with sum : ${sum}`);
}

expensiveOperation(1e6);
console.log("Expensive operation starteds");


readFile('./easy/text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file contents: ", data);
});

