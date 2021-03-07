import React from "react";

export default function Button(props) {
  const style = {
    width: props.width,
    height: props.height,
  };

  return (
    <div className="button" style={style}>
      {props.icon ? (
        <i className={props.icon} style={{ fontSize: "17px" }}></i>
      ) : (
        ""
      )}
      &nbsp; &nbsp; <p>{props.title}</p>
    </div>
  );
}
