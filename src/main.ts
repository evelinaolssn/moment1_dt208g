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

//Collects the form HTML element
const form = document.getElementById("course-form") as HTMLFormElement

//Event listener to handle users submits
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Collects the value from the input field elements
  const code = (document.getElementById("code") as HTMLInputElement).value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const progression = (document.getElementById("progression") as HTMLInputElement).value as "A" | "B" | "C";
  const url = (document.getElementById("course-url") as HTMLInputElement).value;

  //Creates a new course object 
  const newCourse = addCourse(code, name, progression, url);

  //Collects the course-list HTML ID
  const courseList = document.getElementById("course-list") as HTMLUListElement;
  
  //Creates a list element with course inputs
  const liElement = document.createElement("li");
  liElement.textContent = `${newCourse.code} | ${newCourse.name} | ${newCourse.progression} | ${newCourse.url}`;

  courseList.appendChild(liElement);
});



