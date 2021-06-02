//declaring Objects
var user = {
    firstName : "Kartikey",
    lastName :"Dubey",
    role : "Admin",
    loginCount : 32,
    facebookSignIn :true,
    courseList : [],
    // declaring methods or say function
    buyCourse : function (courseName){
        this.courseList.push(courseName); // the this which is used here it is meant for user object iteslf as we are inside an object so we can't accesss user directly but this keyword helps us to access user here
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;

    },
};

var courseList = true; // just an ex. for explaining that this keyword is taking that courseList which is inside user only 

//Accesing method 
console.log(user.getCourseCount());

user.buyCourse("Materialize CSS");
console.log(user.getCourseCount());
user.buyCourse("Sass");
user.buyCourse("JavaScript");
user.buyCourse("Full Stack Web Development");
user.buyCourse("Sticky Notes");
user.buyCourse("Portfolio");
user.buyCourse("ReactJS");
user.buyCourse("DSA with C++");
user.buyCourse("Php");
user.buyCourse("Internship");
console.log(user.getCourseCount());

console.log(user.courseList);

console.log(user);

