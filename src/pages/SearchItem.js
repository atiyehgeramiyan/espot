import data from "./DataCards";
import { Link } from "react-router-dom";
import { useState } from "react";
const SearchItem = () => {
  const [filter, setFilter] = useState("");

  const [listData, setListData] = useState(data.dataCards);

  const handelChangeSelect = ({ target }) => {
    const { checked } = target;
    const newList = listData.map((value) => {
      const item = value;
      item.isChecked = checked;
      return item;
    });

    setListData(newList);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <div className="input-box">
            <input
              type="text"
              className="form-control shadow"
              placeholder="جستجو نام فرد"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
            <i className="fal fa-search fa-2x"></i>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between margin">
        <i class="fa fa-trash" aria-hidden="true"></i>
        <input
          type="checkbox"
          onChange={handelChangeSelect}
          className="check"
        />
      </div>

      {listData
        .filter((value) => {
          return value.Name.toLowerCase().includes(filter);
        })
        .map((value, index) => {
          return (
            <div className="card mt-2 shadow bg-light">
              <div className="row myrow">
                <div class="d-flex justify-content-end mt-2 ">
                  <i className="fal fa-pen color"></i>
                  <input
                    type="checkbox"
                    checked={value.isChecked}
                    className="check"
                  />
                </div>
                <div className="col-countainers">
                  <div className="col">
                    <img src={value.img} className="imgstyle shadow" />
                  </div>

                  <div className=" col">
                    <div className="card-body">
                      <p className="text-muted">Name:</p>
                      <p className="text-muted"> Family Name:</p>
                      <p className="text-muted"> Birth date:</p>
                      <p className="text-muted"> ID No:</p>
                      <i class="fa fa-map-pin  pin-card"></i>
                    </div>
                  </div>
                  <div className=" col">
                    <div className="card-body">
                      <p className="text">
                        <strong>{value.Name}</strong>
                      </p>
                      <p className="text">
                        <strong>{value.FamilyName}</strong>
                      </p>
                      <p className="text">
                        <strong>{value.Birthdate}</strong>
                      </p>
                      <p className="text">
                        <strong>{value.IDNo}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-end ">
                  <Link to="/confirm">
                    <button type="button" class="btn btn-info text-white mybtn">
                      check
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default SearchItem;
