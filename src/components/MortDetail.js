import React from 'react'

const MortDetail = (props) => {
  if (!props.finalTotal) return "Please enter your current earnings...";
  return (
    <div>
    <h2>Most Expensive House you are able to buy is ... £{props.finalTotal}</h2>
    </div>
  )
}
export default MortDetail;
