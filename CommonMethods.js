//import readline from 'readline';
import prompt from 'prompt-sync';
//const prompt = require('prompt-sync')();
let prompt1 = prompt();
const GetInput = async (params) => {
    try {
        console.log(params.heading);
        let temp = await prompt1('>>\t');
        console.log(`Entered input  is ${temp}`);
        return { status: true, input: temp, message: "Input fetched Successfull" };
    } catch (err) {
        console.log("Error = ", err);
        return { status: false, message: "Error at GetInput(Getting Inputing from User)" };
    }
}



/*const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const GetInput = async (params) => {
    try {
        let temp = rl.question(params.heading, data => {
            console.log(data);
            rl.close();
        });
        return { status: true, input: temp, message: "Input fetched Successfull" };
    } catch (err) {
        console.log("Error = ", err);
        return { status: false, message: "Error at GetInput(Getting Inputing from User)" };
    }
}*/

export default GetInput;