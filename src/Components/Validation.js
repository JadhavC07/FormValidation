import { useState } from "react";
import "./Validation.css"

const Validation = (props) => {

  const [name, setName] = useState("chandan-jadhav")
const setnameCJ =()=>{
  setName("CJ First Name")
}
const setnamecj =()=>{
  setName("CJ Last Name")
}

  return (
    <div className="container-sm my-5 box">
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder={name}
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder={props.jadhav}
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        >{name}</textarea>
      </div>
      <div className="mb-3 d-flex justify-content-between size">
        <button type="button" class="btn btn-primary" onClick={setnameCJ}>
          Primary
        </button>
        <button type="button" class="btn btn-secondary" onClick={setnamecj}>
          Secondary
        </button>
      </div>
    </div>
  );
};

export default Validation;
