import img from "../images/camera.jpg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const TaskRegister = () => {
 
    const btnUploadRef=useRef();

    const[file,setFile]=useState(null)

    const openFileDialogClick = () => {
        btnUploadRef.current.click();
    }

    const handleFileChange=(event)=>
    {
        setFile(event.target.files[0]);
    }


    const [task,setTask]=useState([
      {
        id:0,firstName:'',familyName:'',Mobile:'',IDNo:0,Birthdate:'',Address:''
      }
    ])

    const handleChange=(e)=>{
      setTask({...task,[e.target.id]:e.target.value})
  }
  const handleChangeNumber=(e)=>{
      setTask({...task,[e.target.id]:Number(e.target.value)})
  }

  return (
    <form >
      <div className="form-group row align-items-center mt-5 mx-3 mx-md-5">
        <label htmlFor="firstName" className="col-sm-3 ">
          Name:
        </label>
        <div className="col-sm-9">
     
          <input className="form-control" id="firstName" type="text" value={task.firstName} onChange={handleChange}
          />
         
        </div>
      </div>

      <div className="form-group row align-items-center mt-5 mx-3 mx-md-5">
        <label htmlFor="familyName" className="col-sm-3 ">
          Family Name:
        </label>
        <div className="col-sm-9 m-auto">
          <input className="form-control" id="familyName" type="text" value={task.familyName} onChange={handleChange} />
        </div>
      </div>

      <div className="form-group row align-items-center mt-5 mx-3 mx-md-5">
        <label htmlFor="Mobile" className="col-sm-3 ">
          Mobile:
        </label>
        <div className="col-sm-9 m-auto">
          <input className="form-control" id="Mobile" type="text" value={task.Mobile} onChange={handleChange} />
        </div>
      </div>

      <div className="form-group row align-items-center mt-5 mx-3 mx-md-5">
        <label htmlFor="IDNo" className="col-sm-3 ">
          ID No:
        </label>
        <div className="col-sm-9 m-auto">
          <input className="form-control" id="IDNo" type="text" value={task.IDNo} onChange={handleChangeNumber} />
        </div>
      </div>
      <div className="form-group row align-items-center mt-5 mx-3 mx-md-5">
        <label htmlFor="Birthdate" className="col-sm-3 ">
          Birth date:
        </label>
        <div className="col-sm-9 m-auto">
          <input className="form-control" id="Birthdate" type="text" value={task.Birthdate} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group row align-items-center mt-5 mx-3 mx-md-5">
        <label htmlFor="Address" className="col-sm-3 ">
          Address:
        </label>
        <div className="col-sm-9">
          <input className="form-control  m-auto" id="Address" type="text" value={task.Address} onChange={handleChange} />
        </div>
      </div>

      <div className="form-group row align-items-center mt-5 mx-3 mx-md-5">
        <label htmlFor="Profile Pic" className="col-sm-3 ">
          Profile Pic:
        </label>
        <div className="text-center">
          <img src={file?URL.createObjectURL(file):img} className="cameraimg" onClick={openFileDialogClick} />
          <ul class="list-unstyled upload">
               <span className="fa fa-upload text-danger" style={{ cursor: "pointer" }} onClick={openFileDialogClick}></span>
               <input onChange={handleFileChange} ref={btnUploadRef} type="file" style={{ display: "none" }}/>
           </ul>
        </div>
      </div>

      <div className="d-flex justify-content-end m-3">
        <Link to="/">
          <button className="btn btn-danger me-2 " type="button">
            back
          </button>
        </Link>
        <button className="btn btn-info  text-white" type="button">
          save
        </button>
      </div>
    </form>
  );
};
export default TaskRegister;
