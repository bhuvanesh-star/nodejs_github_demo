//Globals -- No Browser
//__dirname -- path to the current directory
//__filename -- file name
//modules -- info about current module
//process -- learn about the env where the program is being executed
const _ = require ('lodash');
const items = [1,[2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);









// const {readFileSync,writeFileSync} = require('fs');

// const first = readFileSync('./content/firsttext.txt','utf-8');
// const second = readFileSync('./content/secondtext.txt','utf-8');
// writeFileSync('./content/result-sync.txt',`Here is the result:${first},${second}`);