import React from "react";
import "./Reviews.css";
const Reviews = ({ reviews }) => {
  return (
    <div id="reviewsSectionParentContainer">
      <div id="numberOfReviews">{reviews.length} reviews</div>
      <div id="two-columns-grid">
        <div className="sampleColumns">1jhsbdcjhsdbcjhsbchjsbdcjhsbdcsdc</div>
        <div className="sampleColumns">2</div>
        <div className="sampleColumns">2skjdcbkjsdbcjksdbckjsbdc</div>
      </div>
    </div>
  );
};

export default React.memo(Reviews);
