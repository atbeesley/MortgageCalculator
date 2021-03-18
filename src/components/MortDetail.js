import React from 'react'

const MortDetail = (props) => {
  if (!props.finalTotal) return "Please enter your current earnings...";
  return (
    <div>
    <h2>The most expensive house you can afford is ... £{props.finalTotal}</h2>
    </div>
  )
}
export default MortDetail;
