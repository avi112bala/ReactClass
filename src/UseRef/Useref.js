import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import '../style.css'

function Useref() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const url = "https://63cbbc4e5c6f2e1d84babd68.mockapi.io/api/asd/ankesh";

  const top = useRef();
  const bottom = useRef();

  const scrollToTop = () => {
    top.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };

  const getdata = () => {
    axios.get(url).then((res) => {
      setdata(res.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);
  console.log(data);
  return (
    <>
      <button onClick={scrollToBottom} ref={top}>
        Go To Bottom
      </button>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
      </div>

      {data
        .filter((val) => val.city.toLowerCase().includes(search))
        .map((val, index) => {
          return (
            // <div className="card" key={index}>
            //   <img src={val.avatar} alt="" />
            //   <h5>{val.city}</h5>
            // </div>
            <div className="d-inline-block card " key={index} ref={bottom}>
              <div className="card-body">
                <img src={val.avatar} alt="" />
                <h5>{val.city}</h5>
              </div>
            </div>
          );
        })}
      <button onClick={scrollToTop}>Go To Top</button>
    </>
  );
}

export default Useref;
