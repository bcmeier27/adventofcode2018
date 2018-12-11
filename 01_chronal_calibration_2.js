/********************
 * auth: bcm 2018-12-10
 * prompt: https://adventofcode.com/2018/day/1
 * (disclaimer: could be much more efficient)
 * run with Node.js: 
 *   node 01_chronal_calibration_2.js

 **** PART 2 ****

You notice that the device repeats the same frequency change list over and over. To calibrate the device, you need to find the first frequency it reaches twice.

For example, using the same list of changes above, the device would loop as follows:

    Current frequency  0, change of +1; resulting frequency  1.
    Current frequency  1, change of -2; resulting frequency -1.
    Current frequency -1, change of +3; resulting frequency  2.
    Current frequency  2, change of +1; resulting frequency  3.
    (At this point, the device continues from the start of the list.)
    Current frequency  3, change of +1; resulting frequency  4.
    Current frequency  4, change of -2; resulting frequency  2, which has already been seen.

In this example, the first frequency reached twice is 2. Note that your device might need to repeat its list of frequency changes many times before a duplicate frequency is found, and that duplicates might be found while in the middle of processing the list.

Here are other examples:

    +1, -1 first reaches 0 twice.
    +3, +3, +4, -2, -4 first reaches 10 twice.
    -6, +3, +8, +5, -6 first reaches 5 twice.
    +7, +7, -2, -7, -4 first reaches 14 twice.

What is the first frequency your device reaches twice?

 * puzzle input: https://adventofcode.com/2018/day/1/input       
 * NOTE: puzzle input is unique per contestant! Yours will likely be different! 
 */
                                                     // Pseudo code:

const request = require('request');
const readline = require('readline');
const fs = require('fs');

var freq = 0;                                        // - initialize vars 
var count = 0;
var scan_pass = 1;

var inputUrl = './01_chronal_calibration_input.txt';

var seen = [];
seen[0] = 1;
const seenCount = 2  // - the first frequency calibration value to be seen this many times

function parse_file(url) {
    try {
    	var rl = readline.createInterface({            // - open the input frequencies 
    	  input: fs.createReadStream(url).on('error', (err) => { 
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
      seen[freq] == undefined ? seen[freq] = 1 : seen[freq]++;
      //console.log("Read value: ", line, " freq now: ",freq," seen: ",seen[freq]);
      if (seen[freq] == seenCount) {
         console.log("This frequency",freq,"was the first that was seen",seenCount,"times, after",scan_pass,"scan passes and",count,"entries read!");
         process.exit();  // NOTE: *** LAME!
      }
    })

    rl.on('close', () => {
                                                     // - print final frequency value
      //console.log("(",count," frequency entries read)");
      //console.log("Final calibration: ", freq, "for scan pass: ", scan_pass);
      scan_pass++;
      parse_file(url); // NOTE: *** RECURSION! (only because this is event based, so there's no major "stack" cost)
    })

} // end of parse_file()

parse_file(inputUrl)

// EOF

