import { useState,useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [added, setadded] = useState()
  const [revieww, setreviews] = useState([]);
  const [input, setinput] = useState({
    name:"",
    review:""
  });

  useEffect(() => {
    const getReviews=async()=>{
      await axios.get("http://localhost:5000/api/testimonial").then(res=>setreviews(res.data)).catch(err=>console.log(err))
    }
    getReviews()
  }, [added])

  const addReview=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/testimonial",input).then(()=>{
      setadded(input);
      setinput({
        name:"",
review:""
      });
    }).catch(err=>{console.log(err);
      setinput({
        name:"",
review:""
      })

    })
  }
  console.log(revieww)
  return (
    <div className="App">
      <div className="form">
        <h1>Add Review</h1>
        <input className="form__input" type="text" placeholder="Enter Name" value={input.name} onChange={(e)=>setinput({...input,name:e.target.value})}/>
        <textarea className="form__input" type="text" placeholder="Enter Review" value={input.review} onChange={(e)=>setinput({...input,review:e.target.value})}/>
        <button onClick={addReview} className="form__button">Add Review</button>
      </div>
      <div className="reviews">
        {revieww.map(r=>{
          return(
            <div className="review">
              <h2>{r.name}</h2>
              <p>{r.review}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
