import Stack from './DataStructure/Stack.js';
import GetInput from './CommonMethods.js';
//let Stack = require('./DataStructure/Stack');
//let GetInput = require('./CommonMethods');
const CallOperations = async (Ds) => {
    let res = {};
    try {
        let operation = '';
        switch (Ds) {
            case '1':
                res = await GetInput({ heading: "Select Operations \n1.Insert \n2.Delete \n3.Update \n4.Display \n5.Search \n6.convert\n7.Exit\n" });
                operation = (res.status) ? res.input : '';
                if (operation == '7') {
                    return { status: true, Exit_status: true };
                } else {
                    let result = await Stack(operation);
                    return result;
                }
                break;
            case '2': return { status: true, message: "Queue Operation Successfull" };
                break;
            case '3': return { status: true, message: "List Operation Successfull" };
                break;
            case '4': return { status: true, message: "Tree Operation Successfull" };
                break;
            default: return { status: false, message: "Invalid DataStructure" };
                break;
        }
    } catch (err) {
        console.log("Error at CallOperations = ", err);
        return { status: false, message: "Error at CallOperations" };
    }
}

const Start = async () => {
    let status = true;
    let Ds = '';
    let res = {};
    while (status) {
        res = await GetInput({ heading: "Setect Data Structure \n1.Stack\n2.Queue\n3.List\n4.Tree \n5.Exit\n" })
        //console.log("Setect Data Structure \n1.Stack\n2.Queue\n3.List\n4.Tree");
        Ds = (res.status) ? res.input : '';//readline();//prompt("Setect Data Structure \n1.Stack\n2.Queue\n3.List\n4.Tree");
        Ds = (Ds) ? Ds : '';
        if (Ds == '5') {
            console.log("Successfully Exited");
            status = false;
        } else {
            let response = await CallOperations(Ds);
            if (response.Exit_status) {
                console.log("Successfully Exited");
                status = false;
            } else {
                switch (Ds) {
                    case '1':
                        console.log(response.message);
                        console.log("Stack = ", (response.stack));
                        break;
                    case '2': console.log(response.message);
                        break;
                    case '3': console.log(response.message);
                        break;
                    case '4': console.log(response.message);
                        break;
                    default: console.log("Invalid DataStructure Selected");
                        break;
                }
            }
        }
    }
}

console.log("--------------------Welcome to Data Structure Implementation------------------------");
Start();