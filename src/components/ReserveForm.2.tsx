import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "./base/DropDown";
import DateInput from "./base/DateInput";
import NormalButton from "./base/NormalButton";

export function ReserveForm() {
  const StyledDiv = styled.div`
    .time_radio {
      color: #ed3545;
      background-color: #fffcfc;
      border-color: #ed3545;
      border-radius: 0.5rem;
    }

    .time_radio:hover {
      color: #fff;
      background-color: #ee6573;
      border-color: #bd2130;
      cursor: pointer;
    }

    .time_radio:focus {
      box-shadow: 0 0 0 0.2rem pink;
    }

    .time_radio:active,
    .time_radio_active,
    .time_radio_active:hover {
      border-color: #dc3545;
      background-color: #ed3545;
      border-radius: 0.5rem;
      color: #ffffff;
    }
    #number_date_form_container {
      width: 300px;
    }

    .time_radio {
      color: #ed3545;
      background-color: #fffcfc;
      border-color: #ed3545;
      border-radius: 0.5rem;
    }

    .time_radio:hover {
      color: #fff;
      background-color: #ee6573;
      border-color: #bd2130;
      cursor: pointer;
    }

    .time_radio:focus {
      box-shadow: 0 0 0 0.2rem pink;
    }

    .time_radio:active,
    .time_radio_active,
    .time_radio_active:hover {
      border-color: #dc3545;
      background-color: #ed3545;
      border-radius: 0.5rem;
      color: #ffffff;
    }
    #number_date_form_container {
      width: 300px;
    }
  `;
  function SeatsAndDateInput() {
    const [seats, setSeaets] = useState();
    const handleChange = (event) => {
      setSeaets(event.target.value);
      console.log("changed ", event.target.value);
    };

    const [date, setDate] = useState();
    function onDateChanged(event) {
      console.log("date changed ", typeof event.target.value);
    }

    return (
      <div className="d-flex flex-row text-center">
        <span className="mx-2 my-auto">For</span>

        <div className="mx-2 my-auto select_box">
          <DropDown
            className="form-control mizdooni_dropdown"
            value={seats}
            onChange={handleChange}
            id="number_input"
            items={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          ></DropDown>
        </div>

        <span className="mx-2 my-auto">people, on date</span>

        <DateInput onChanged={onDateChanged} />
      </div>
    );
  }

  return (
    <div className="container-fluid col m-2">
      <h5 className="row">Reserve Table</h5>
      <form>
        <SeatsAndDateInput />
        <div className="container-fuild row m-1 p-1">
          <h6>Available Times for Table #1 (2 seats)</h6>
          <div className="row btn-group-toggle " data-toggle="buttons">
            <label className="item m-2 btn time_radio_active">
              {" "}
              <input type="radio" checked />
              10:00 AM
            </label>
            <label className="item m-2 btn time_radio">
              {" "}
              <input type="radio" />
              11:00 AM
            </label>
            <label className="item m-2 btn time_radio">
              {" "}
              <input type="radio" />
              12:00 PM
            </label>
            <label className="item m-2 btn time_radio">
              {" "}
              <input type="radio" />
              13:00 PM
            </label>
            <label className="item m-2 btn time_radio">
              {" "}
              <input type="radio" />
              14:00 PM
            </label>
            <label className="item m-2 btn time_radio">
              {" "}
              <input type="radio" />
              15:00 PM
            </label>
            <label className="item m-2 btn time_radio">
              {" "}
              <input type="radio" />
              16:00 AM
            </label>
          </div>
        </div>
        <div className="row ">
          <p className="text-danger">
            You will reserve this table only for{" "}
            <u className="text-danger">one</u> hour, for more time please
            contact the restaurant.
          </p>
        </div>
        <NormalButton
          otherClass="btn container-fluid row"
          text="Complete the Reservation"
          handler={() => {}}
        />
      </form>
    </div>
  );
}
