
//var args : rest parameter : ...
function selectCountryFromDropDown(...countryName) {
    console.log('select country: ', countryName);
    console.log(countryName.length);

    for (let e of countryName) {
            console.log(e);
    }
};

selectCountryFromDropDown('India', 'UK', 'UAE', 'USA', 'Russia');
console.log('-------------------');
selectCountryFromDropDown('India');
console.log('-------------------');
selectCountryFromDropDown('India', 'USA');
console.log('-------------------');
/**
 * 
 * @param {string} name 
 * @param  {...any} details 
 */
function fillValues(name, ...details) {
    console.log('checking the details: for '+ name, details);
    console.log(details.length);

    for (let e of details) {
        console.log(e);
    }
};


fillValues('pawan', 101, 'new colony', 'sector 7', 'bangalore', '65444', 'India');


