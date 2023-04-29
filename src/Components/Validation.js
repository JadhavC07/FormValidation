import "./Validation.css"

const Validation = () => {

 const education=['BA',"BCA","BCom","BBA","BEd","Polly","ME","PHD"]

 // array of  education 

 const edu=education.map((ele)=>{

return(
  <option>{ele}</option>

)

 })


  return (
    <div className="container-sm my-5 box">
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
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

      <div className="edu"><label>Education     </label>
              <select>

                {edu}
                         

              </select>
       </div>
       <br></br>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      



      <div className="mb-3 d-flex justify-content-between size">
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-secondary">
          Secondary
        </button>
      </div>
    </div>
  );
};

export default Validation;
