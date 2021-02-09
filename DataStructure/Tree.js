import GetInput from '../CommonMethods.js';
let Queue_data = {
    rare: -1,
    front: -1,
    queue_array: [],
    queue_size: 10
}


const Tree = async (operation) => {
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
        if (rare >= queue_size) {
            return { status: true, message: "Stack Overflow / Stack Full" };
        } else {
            queue_array[++rare] = params.data;
            return { status: true, message: "push/Insert operation successfull", stack: queue_array };
        }
        //return (rare >= queue_size) ? { status: true, message: "Stack Overflow / Stack Full" } : queue_array[++rare] = data;
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Push" }
    }
}

const Pop = async () => {
    try {
        if (rare < 0) {
            return { status: true, message: "Stack UnderFlow / Stack Empty" };
        } else {
            let data = queue_array[rare];
            queue_array.splice(rare--, 1);
            return { status: true, data: data, message: "Pop Data Successfull", stack: queue_array };
        }
        //return (rare < 0) ? { status: true, message: "Stack UnderFlow / Stack Empty" } : queue_array[rare--] = data;
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Pop" }
    }
}

const Update = async (params) => {
    try {
        if (params.key >= queue_size) {
            return { status: true, message: "Invaild Key(key can't be greater then stack size)" };
        } else if (params.key < 0) {
            return { status: true, message: "Invaild Key(key can't be a negetive value)" };
        } else {
            queue_array[params.key] = params.data;
            return { status: true, message: "Stack Updation Successfull", stack: queue_array };
        }
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Update" }
    }
}

const Display = async () => {
    try {
        console.log("Stack Content = ");
        queue_array.map((data, key) => {
            let temp = { index: key, Data: data }
            console.log(temp);
        })
        console.log("rare pointer position = " + rare);
        return { status: true, message: '' }
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Display" };
    }
}

const Search = async (params) => {
    try {
        if (rare < 0) {
            return { status: true, message: "Stack is Empty" };
        } else {
            let position = queue_array.indexOf(params.data);
            /*for(let i=0;i<rare;i++){
                if(queue_array[i]==params.data){
                    position=i;
                    break;
                }
            }*/
            return { status: true, position: position, element: params.data, message: "Search Successfull", stack: queue_array };
        }
    } catch (err) {
        console.log(err);
        return { status: false, message: "error at Display" };
    }
}

export default Tree;