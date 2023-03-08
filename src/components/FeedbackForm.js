import { useState } from "react";

function FeedbackForm() {
  const [score, setScore] = useState('8');
  //useState '8' sets the default score showing when page is loaded

  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent the default html form behavior 
    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please enter a comment');
      return;
    }
    console.log('Form submitted');
    setComment(""); //reset form to blank after submit
    setScore('8'); //reset back to 8 after submit
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}> {/* some validation to ensure a comment is required when 
        the score is equal to or lower than five, and that it should have at least 10 characters */}
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score: {score} </label>
            <input 
              type="range" 
              min="0" 
              max="10" 
              value={score} 
              onChange={e => setScore(e.target.value)} />
          </div>

          <div>
            <label>Comment: </label>
            <textarea value={comment} onChange={e => setComment(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default FeedbackForm;