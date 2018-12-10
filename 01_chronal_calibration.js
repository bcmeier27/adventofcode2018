/********************
 * auth: bcm 2018-12-10
 * prompt: https://adventofcode.com/2018/day/1
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
 */

const request = require('reques');
const readline = require('readline');
const inputUrl = 'ttps://adventofcode.com/2018/day/1/input';
 
/**seudo code:
  - open the input frequencies (tbd if I use local file or http request)
*/

const rl = readline.createInterface({
  input: request.get(url).on('error', (err) => reject(err)),
});

var freq = 0;

/**
  - initialize vars 
  - while input is available 
 */

rl.on('line', (line) => {
  /**
     - read next frequency in a line
     - add offset to current frequency value
   - print final frequency value
   */
  console.log("Read value: ", line);
  freq += int(line);
})

rl.on('close', () => {
  /** 
   - print final frequency value
   */
  console.log("Frequency: ",freq);
});

