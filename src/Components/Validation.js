import "./Validation.css";

const Validation = (props) => {
  const education = ["BA", "BCA", "BCom", "BBA", "BEd", "Polly", "ME", "PHD"];

  // array of  education

  const edu = education.map((ele) => {
    return (
      <option className="form-select" key={ele}>
        {ele}
      </option>
    );
  });

  return (
    <div className="container-sm my-5 box">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
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
      <div className="Gender d-flex flex-row justify-content-evenly">
        <div className="male">
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="success-outlined"
            autoComplete="off"
          />
          <label className="btn btn-outline-success" htmlFor="success-outlined">
            Male
          </label>
        </div>

        <div className="female">
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="danger-outlined"
            autoComplete="off"
          />
          <label className="btn btn-outline-danger" htmlFor="danger-outlined">
            Female
          </label>
        </div>
        <div className="other">
          <input
            type="radio"
            className="btn-check"
            id="btn-check-2-outlined"
            name="options-outlined"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-secondary"
            htmlFor="btn-check-2-outlined"
          >
            Other
          </label>
        </div>
        <br></br>
      </div>
      <div className="edu">
        <label>Education </label>
        <select>{edu}</select>
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
        <button type="button" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Validation;
