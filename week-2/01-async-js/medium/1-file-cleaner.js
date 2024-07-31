import {readFile} from 'fs';

readFile('./medium/text.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("file contents: ", data);

    let cleaned_data = data.replace(/\s/g, '');

    console.log(cleaned_data);
  });
  
