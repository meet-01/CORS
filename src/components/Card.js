import React from "react";
import "../Card.css";

export default function Card() {
  return (
    <div className="card__body">
      <div className="card">
        <h1 className="card__title">
          <img src="" alt="" />
          <span>Mutual Fund title</span>
        </h1>
        <div className="card__table">
          <div>
            ANNUAL RETURNS
            <br /> value
          </div>
          <div>
            3YR RETURNS
            <br /> value
          </div>
          <div>
            MIN. INVESTMENT
            <br /> value
          </div>
          <div className="span-3">
            RISK PROFILE
            <br /> VALUE
          </div>
        </div>
        <button className="card__button"> SELECT FUND</button>
      </div>
    </div>
  );
}
