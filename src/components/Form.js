import { useState } from "react";

function Form() {
  const [name, setName] = useState(""); //local state for the text input called name

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refreshing
    setName(""); //clear out input after submission
    console.log("Form Submitted!");
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name"> Name: </label>
            <input id="name" type="text" name="name" placeholder="Name" 
              value={name} onChange={e => setName(e.target.value)}/>
                {/* value prop to turn input into a controlled input & 
                onChange to to receive all the changes per keystroke 
                and thus update the state of my input */}
          </div>
          <button disabled={!name} type="submit">Submit</button> 
            {/* disabled prevents the submit button if form is empty */}
        </fieldset>
      </form>
    </div>
  )
}





export default Form;