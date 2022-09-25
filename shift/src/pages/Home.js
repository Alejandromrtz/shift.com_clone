import React from "react";
import "../pages/home.css";
import threecars from "../assets/cars.png";

function Home() {
  return (
    <div className="banner__bg">
      <div className="banner__text">
        <h3 className="banner__text--header">
          Shop our End of Summer Sale Now!
        </h3>
        <h4 className="banner__text--para">
          Wave goodbye to summer with saving up to $3,500
        </h4>
      </div>
      <div className="button__both">
        <button className="button__shop--sale">Shop Sale Cars</button>
        <button className="button__shop--all">Shop All Cars</button>
      </div>
      <div className="lower__body--img">
        <img src={threecars}></img>
      </div>

      <div class="flex-container">
        <div class="flex-child magenta">
          <h3>Shop and buy online</h3>
          <p>Browse used cars that fit your lifestyle and budget.</p>
        </div>

        <div class="flex-child green">
          <h3>7 day right choice guarentee</h3>
          <p>You've got 7 days or 200 miles to be sure. No worries.</p>
        </div>
      </div>
      <div className="lower__para">
        <p>
          <strong>Why Shift? </strong> Used cars are an incredible value. But
          the process needed a makeover.
          <span className="green__text">See how it works.</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
