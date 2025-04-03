// Apply  call and Bind


//call
//problem statement
console.log("hello")
let userDetail = {
    name: "mohit kumar",
    age: 28,
    Designation: "software developer",
    printDetails: function () {
        console.log(this)
    }
}
userDetail.printDetails();
let userDetail2 = {
    name: "tashu kumar",
    age: 28,
    Designation: "software developer",

}
// currently the function printDetails this point to object userDetail object but i want they should point to object userDetails2 ,this is done through call() method
// call method is basically used for function borrowing front another object
userDetail.printDetails.call(userDetail2);


let userDetail3 = {
    name: "mohit kumar singh",
    age: 30,
    Designation: "software developer",

}
let print = function printDetails(state, country) {
    console.log(this.name + " " + state + " " + country)
}
print.call(userDetail3, "Delhi", "india");