//duplcate functions can be written but the latest function will be called....
//function overloading is not possible in JS

function search() { //0 param
    console.log('hello search1');
}

function search(productname) { //1 param
    console.log('hello search2', productname);
}

function search(productname, price) { //2 param
    console.log('hello search2', productname, price);
}



//search('imac', 1000); //hello search2 imac 1000
search('APPLE'); //hello search2 APPLE