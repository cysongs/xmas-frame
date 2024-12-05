import { replaceInFile } from 'replace-in-file';

const options = {
  files: '.vercel/output/functions/api/index.js',
  from: /from "@src\//g,
  to: 'from "../src/',
};

(async () => {
  try {
    const results = await replaceInFile(options);
    console.log('Replacement results:', results);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
