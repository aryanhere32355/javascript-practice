const myObject = {
    js: 'java',
    cpp: 'c++',
    py: 'python'
}

for (const key in myObject) {
    // console.log(key, myObject[key]);
}


//for arrays

const arr = [1, 2, 3, 4]

for (const key in arr) {
    // console.log(key);
    
    console.log(arr[key]);       //not the values  //arrays have by default values of keys starting from 0, hence object was made to assign different keys
    
}