import './style.css'

//Interface that defines the datatypes for each field in a course
interface Course {
  code: string;
  name: string;
  progression: "A" | "B" | "C";
  url: string;
}

