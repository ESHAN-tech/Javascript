const course = {
    coursename: "js in hindi",
    price :"999",
    courseInstructor: "hitesh"
}

//course.courseInstructor (bar bar(.)laga k use kerna clear or simple ni hota h)
 const {courseInstructor} = course;
 console.log(courseInstructor);

// for changing the name of courseInstructor
const {courseInstructor:instructor} = course;
 console.log(instructor);

 // method of function 
 //{} means to doing de structing 

 //    A P I
 /* google login we don't have headache that google will verify that account 
  some values are comes from the backend and how will u write it
   earlier value comes through xml that were are very complex
   now all the values comes in json*/

   //json api

  /* {
    "name": "harsh",
    "course": "btech",
    "price" : "free"
   }
[
    {},
    {},
    {},
]*/