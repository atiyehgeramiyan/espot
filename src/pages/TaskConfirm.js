import { Link } from "react-router-dom";
import img4 from "../images/team-4.jpg";
const TaskConfirm = () => {
  return (
    <div className="container">
      <div className="row m-4">
        <div className="col">
          <ul class="list-unstyled ">
            <li className="mb-3">Name:</li>
            <li className="mb-3">Family Name:</li>
            <li className="mb-3">Mobile:</li>
            <li className="mb-3">ID No:</li>
            <li className="mb-3">Birth date:</li>
            <li className="mb-3">Address:</li>ّ
            <div className="d-flex ">
              <label>Profile:</label>
              <img src={img4} className="profilepic" />
              <ul class="list-unstyled d-flex tickpic">
                <span class="close ">&times;</span>
                <i class="fa fa-check icon-check "></i>
              </ul>
            </div>
          </ul>
        </div>
        <div className="col">
          <ul class="list-unstyled ">
            <li className="mb-3">Name:</li>
            <li className="mb-3">Family Name:</li>
            <li className="mb-3">Mobile:</li>
            <li className="mb-3">ID No:</li>
            <li className="mb-3">Birth date:</li>
            <li className="mb-3">Address:</li>
          </ul>
        </div>

        <div className="col">
          <ul class="list-unstyled ">
            <span class="close ">&times;</span>
            <i class="fa fa-check icon-check "></i>
          </ul>
          <ul class="list-unstyled ">
            <span class="close ">&times;</span>
            <i class="fa fa-check icon-check "></i>
          </ul>
          <ul class="list-unstyled ">
            <span class="close ">&times;</span>
            <i class="fa fa-check icon-check "></i>
          </ul>
          <ul class="list-unstyled ">
            <span class="close ">&times;</span>
            <i class="fa fa-check icon-check "></i>
          </ul>
          <ul class="list-unstyled ">
            <span class="close ">&times;</span>
            <i class="fa fa-check icon-check "></i>
          </ul>
          <ul class="list-unstyled ">
            <span class="close ">&times;</span>
            <i class="fa fa-check icon-check "></i>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-end m-3">
        <Link to="/">
          {" "}
          <button className="btn btn-danger me-2  rounded" type="button">
            back
          </button>
        </Link>
        <button className="btn btn-info  text-white" type="button">
          save
        </button>
      </div>
    </div>
  );
};

export default TaskConfirm;
