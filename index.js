const fs = require("fs");
const { Command } = require('commander');
const program = new Command();
const { pipeline } = require('stream');
const Transform = require('stream').Transform;

const cipherCaesar = require("./cipher")

program
  .requiredOption('-s, --shift <number>', 'a shift')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file')
  .requiredOption('-a, --action <type>', 'an action encode/decode')
  .parse();

program.parse(process.argv)

const { action, shift, output, input } = program.opts();


if (action !== 'decode' && action !== 'encode') {
  process.stderr.write(
    'Введите правильный "action"!'
  );
  process.exit(1)
}

if (isNaN(+shift)) {
  process.stderr.write(
    'Введите число!'
  );
  process.exit(1)
}

const readStream = input
  ? fs.createReadStream('input.txt')
  : process.stdin;

const writeStream = output
  ? fs.createWriteStream('output.txt', {flags: 'a'})
  : process.stdout;



const S = action === 'encode' ? +shift : -shift;
const transform = new Transform({
  
  transform(chunk, encoding, callback){
    this.push(cipherCaesar(chunk.toString(), S));
    callback()
}
})


pipeline(readStream, transform, writeStream, err => { 
  if (err) {console.log('Error pipeline')}
  console.log('Pipeline succeeded.');
});


