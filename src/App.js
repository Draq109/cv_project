import './styles/App.css';
import TextField from '@mui/material/TextField';
import { blue, red } from '@mui/material/colors';

const inputProps = {
  color: red,
};

function PersonalField() {
  return (
    <div className="personalField field">
      <h2>Personal Information</h2>
      <TextInput attrName={"fname"} text={"First name:"} ></TextInput>
      <TextInput attrName={"lname"} text={"Last name:"} ></TextInput>
      <TextInput attrName={"title"} text={"Title:"} ></TextInput>
      <TextInput attrName={"addr"} text={"Address:"} ></TextInput>
      <TextInput attrName={"email"} text={"Email:"} ></TextInput>
      <p>Current Data:</p>
    </div>
  )
}

function EducationField() {
  return (
    <div className="educationField field">
      <h2>Education</h2>
      <TextInput attrName={"univ"} text={"University:"} ></TextInput>
      <TextInput attrName={"city"} text={"City:"} ></TextInput>
      <TextInput attrName={"degree"} text={"Degree:"} ></TextInput>
      <TextInput attrName={"gpa"} text={"GPA:"} ></TextInput>
      <TextInput attrName={"from"} text={"From:"} ></TextInput>
      <TextInput attrName={"to"} text={"To:"} ></TextInput>
      <div>
        <button className="Add-button Education-field">Add</button>
        <button className="Clear-button Education-Field">Clear</button>
      </div>
    </div>
  )
}
function ExperienceField() {
  return (
    <div className="experienceField field">
      <h2>Experience</h2>
      <TextInput attrName={"pos"} text={"Position:"} ></TextInput>
      <TextInput attrName={"company"} text={"Company:"} ></TextInput>
      <TextInput attrName={"city"} text={"City:"} ></TextInput>
      <TextInput attrName={"from"} text={"From:"} ></TextInput>
      <TextInput attrName={"to"} text={"To:"} ></TextInput>
      <div>
        <button className="Add-button Experience-field">Add</button>
        <button className="Clear-button Experience-Field">Clear</button>
      </div>
    </div>
  )
}

function TextInput({ attrName, text }) {
  return (
    <>
      <label for={attrName}>{text}</label>
      <input key={attrName} type="text" id={attrName} name={attrName} />
    </>
  )
}

function MainForm() {
  return (
    <form>
      <div className='Fields'>
        <PersonalField></PersonalField>
        <EducationField></EducationField>
        <ExperienceField></ExperienceField>
      </div>
      <button className='Download-button'>Download PDF</button>
    </form>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Application</h1>
      </header>
      <MainForm />
    </div>
  );
}

export default App;
