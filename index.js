const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

const cipher = require("./cipher")

const {caesarShift} = cipher


program
  .requiredOption('-s, --shift <numb>', 'a shift')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file')
  .requiredOption('-a, --action <type>', 'an action encode/decode')
  .parse();

program.parse(process.argv)

const { action, shift, output, input } = program.opts();


const action = options.action
const shift = +options.shift
const input = options.input
const output = options.output

if (action === 'encode') {
  shift
} else if (action === 'decode') {
  shift = -shift
} else {
  return console.error('Введите правильный "action"!');
}

caesarShift(stringW, shift)











let stringW = "1"
console.log(stringW);

let readableStream = fs.createReadStream("input.txt", "utf8");
readableStream.on("data", function(chunk){ 
  chunk
});

console.log(stringW);



// let writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир!");
// writeableStream.write("Продолжение записи \n");
// writeableStream.end("Завершение записи");


const stream = require('stream');

stream.Transform