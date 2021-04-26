
function getData(key) {
    return decodeData(getDataFromLocalStorage(key))
}

function setData(key, value) {
    setDataToLocalStorage(key, encodeData(value))
}

function removeData(key) {
    removeDataFromLocalStorage(key)
}

function clearAllData() {
    localStorage.clear();
}

/*
 ************************************************

 These are helping function to manage local storage .
 Don't touch it until you don't know how to handle  .

 ***************************************************
*/

// get data from local storage using key
function getDataFromLocalStorage(key) {
    return localStorage.getItem(key)
}

// set data to local stoarge useing key and value
function setDataToLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

//remove data from local storage using key
function removeDataFromLocalStorage(key) {
    localStorage.removeItem(key)
}

// decode data 
function decodeData(data) {
    return data && JSON.parse(atob(data)) || null;
}

// encode data
function encodeData(data) {
    return btoa(JSON.stringify(data));
}




export default {
    getData,
    setData,
    removeData,
    clearAllData,
}