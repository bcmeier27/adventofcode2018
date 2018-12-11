/********************
 * auth: bcm 2018-12-10
 * prompt: https://adventofcode.com/2018/day/1
 * (disclaimer: could be much more efficient)
 * run with Node.js: 
 * 	 node 01_chronal_calibration.js

 **** PART 1 ****

 A value like +6 means the current frequency increases by 6; a value like -3 means the current frequency decreases by 3.

For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:

    Current frequency  0, change of +1; resulting frequency  1.
    Current frequency  1, change of -2; resulting frequency -1.
    Current frequency -1, change of +3; resulting frequency  2.
    Current frequency  2, change of +1; resulting frequency  3.

In this example, the resulting frequency is 3.

Here are other example situations:

    +1, +1, +1 results in  3
    +1, +1, -2 results in  0
    -1, -2, -3 results in -6

Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?
 * puzzle input: https://adventofcode.com/2018/day/1/input
 * NOTE: puzzle input is unique per contestant! Yours will likely be different! 
 */
                                                // Pseudo code:

const request = require('request');
const readline = require('readline');
const fs = require('fs');

var freq = 0;                                    // - initialize vars 
var count = 0;
// var inputUrl = 'https://adventofcode.com/2018/day/1/input';
// var inputUrl = 'file:///home/bernie/projects/adventofcode2018/01_chronal_calibration_input.txt';
var inputUrl = './01_chronal_calibration_input.txt';

try {
	var rl = readline.createInterface({        // - open the input frequencies 
//	  input: request.get(inputUrl).on('error', (err) => { 
	  input: fs.createReadStream(inputUrl).on('error', (err) => { 
	  	console.log("Error in request: ", err); 
        process.exit();
	  }),
	});
} catch (err) {
    console.log("Error in createInterface: ", err);
    process.exit();
}

                                                 // - while input is available 
rl.on('line', (line) => {                        // - read next frequency in a line
  // console.log("Read value: ", line);
  count++;
  freq += parseInt(line);                        // - add offset to current frequency value
})

rl.on('close', () => {
  // - print final frequency value
  console.log("(",count," frequency entries read)");
  console.log("Final calibration: ",freq);
})

// EOF

