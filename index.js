let employee = {
    name: "Sam",
    streetAddress: "123 Bleeker Street"
}

let updateEmployeeWithKeyAndValue = (obj, key, val) => {
    let newObj = {
        ...obj
    }

    newObj[key] = val;

    return newObj;
}

let destructivelyUpdateEmployeeWithKeyAndValue = ( obj, key, val ) => {
    obj[key] = val;
    return employee;
}

let deleteFromEmployeeByKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

let destructivelyDeleteFromEmployeeByKey = (obj, key) => {
 delete obj[key];
 return employee;
}