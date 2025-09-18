import './style.css'

//Interface that defines the datatypes for each field in a course
interface Course {
  code: string;
  name: string;
  progression: "A" | "B" | "C";
  url: string;
}

//Function that creates a new Course object using the users provided input values
function addCourse(
  code: string,
  name: string,
  progression: "A" | "B" | "C",
  url: string): Course {
  return {
    code, name, progression, url
  };
}