import './Patient-Registrationpage.css';
export default function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <p>
          For the left side of website
        </p>
      </div>
      <div className='information-tab'>
        <h1 className='patient-text'>New Patient information</h1>
          <div className='inputs'>
            <label for="firstname" >First name:</label>
            <input type='text' name='firstname' className='textbox'/><br/>
            <label for="lastname">Last name:</label>
            <input type='text' name='lastname' className='textbox'/><br/>
            <label for="age">Age:</label>
            <input type='date' name='age' className='textbox'/><br/>
          </div>
      </div>
      <div className='information-tab2'>
        <label>Gender:</label>
          <select className='dropdown-box'>
            <option>Please Select</option> 
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say it</option>
          </select>
        <label>Blood Type:</label>
          <select className='dropdown-box'>
            <option>Please Select</option>  
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
      </div>
          <div className='information-tab3'>
            <label for="email">E-mail:</label>
            <input type='email' name='email' className='textbox2'/><br/>
            <label for="telnumber">Tel:</label>
            <input type='tel' name='telnumber' className='textbox2'/><br/>
          </div>
          <button className='save'>Save</button>
    </div>
  );
}