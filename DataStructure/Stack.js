import GetInput from '../CommonMethods.js';

let top = -1;
let stack_array = [];
let stack_size = 10;

const Stack = async (operation) => {
    let result = {};
    let res = {};
    let element = '';
    try {
        switch (operation) {
            case '1':
                res = await GetInput({ heading: "Enter Element to insert : \n" });
                element = (res.status) ? res.input : '';
                if (element) {
                    result = await Push({ data: element })
                    return result;
                } else {
                    return res;
                }
                break;
            case '2': result = await Pop();
                if (result.status) {
                    console.log("Poped Element = " + result.data);
                }
                return result;
                break;
            case '3': return { status: true, message: "Update Successfull" };
                break;
            case '4': result = await Display();
                return result;
                break;
            case '5':
                res = await GetInput({ heading: "Enter Element to Search : \n" });
                element = (res.status) ? res.input : '';
                if (element) {
                    result = await Search({ data: element })
                    if (result.status) {
                        console.log("Element Available at Position  = " + result.position);
                    }
                    return result;
                } else {
                    return res;
                }
                break;
            case '6': return { status: true, message: "Convert is Disabled" };
                break;
            default: return { status: false, message: "Invalid Operation" };
                break;
        }
    } catch (err) {
        console.log(err);
        return { status: false, message: "Error at Stack Operations" };
    }
}

const Push = async (params) => {
    try {
        if (top >= stack_size) {
            return { status: true, message: "Stack Overflow / Stack Full" };
        } else {
            stack_array[++top] = params.data;
            return { status: true, message: "push/Insert operation successfull", stack: stack_array };
        }
        //return (top >= stack_size) ? { status: true, message: "Stack Overflow / Stack Full" } : stack_array[++top] = data;
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Push" }
    }
}

const Pop = async () => {
    try {
        if (top < 0) {
            return { status: true, message: "Stack UnderFlow / Stack Empty" };
        } else {
            let data = stack_array[top];
            stack_array.splice(top--, 1);
            return { status: true, data: data, message: "Pop Data Successfull", stack: stack_array };
        }
        //return (top < 0) ? { status: true, message: "Stack UnderFlow / Stack Empty" } : stack_array[top--] = data;
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Pop" }
    }
}

const Update = async (params) => {
    try {
        if (params.key >= stack_size) {
            return { status: true, message: "Invaild Key(key can't be greater then stack size)" };
        } else if (params.key < 0) {
            return { status: true, message: "Invaild Key(key can't be a negetive value)" };
        } else {
            stack_array[params.key] = params.data;
            return { status: true, message: "Stack Updation Successfull", stack: stack_array };
        }
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Update" }
    }
}

const Display = async () => {
    try {
        console.log("Stack Content = ");
        stack_array.map((data, key) => {
            let temp = { index: key, Data: data }
            console.log(temp);
        })
        console.log("Top pointer position = " + top);
        return { status: true, message: '' }
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Display" };
    }
}

const Search = async (params) => {
    try {
        if (top < 0) {
            return { status: true, message: "Stack is Empty" };
        } else {
            let position = stack_array.indexOf(params.data);
            /*for(let i=0;i<top;i++){
                if(stack_array[i]==params.data){
                    position=i;
                    break;
                }
            }*/
            return { status: true, position: position, element: params.data, message: "Search Successfull", stack: stack_array };
        }
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Display" };
    }
}

export default Stack;