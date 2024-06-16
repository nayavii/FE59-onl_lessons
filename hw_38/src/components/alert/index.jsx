import "./index.css";

export const Alert = ({ status }) => {
  const boxStyle = {};

  let iconClass = "";

  if (status === "warning") {
    boxStyle.backgroundColor = "#ffd4a3";
    boxStyle.borderColor = "#ff8800";
    boxStyle.color = "#ff8800";
    iconClass = "icon-alert_warning";
  }

  if (status === "stop") {
    boxStyle.backgroundColor = "#ffcdcb";
    boxStyle.borderColor = "#ff1900";
    boxStyle.color = "#ff1900";
    iconClass = "icon-alert_not";
  }

  if (status === "accept") {
    boxStyle.backgroundColor = "#deffd8";
    boxStyle.borderColor = "#00ff77";
    boxStyle.color = "#00ff77";
    iconClass = "icon-alert_accept";
  }

  if (status === "info") {
    boxStyle.backgroundColor = "#e8e8e8";
    boxStyle.borderColor = "#272727";
    boxStyle.color = "#272727";
    iconClass = "icon-alert_info";
  }

  if (status === "alert") {
    boxStyle.backgroundColor = "#cbdbff";
    boxStyle.borderColor = "#376be4";
    boxStyle.color = "#376be4";
    iconClass = "icon-alert_bell";
  }


  return (
    <>
      <div className="alert" style={boxStyle}>
        <div className="alert__info ">
          <div className={`alert__status ${iconClass}`} style={boxStyle}></div>
          <p className="alert__text" style={boxStyle}>
            Lorem Ipsum
          </p>
        </div>
        <div className="alert__close icon-cancel" style={boxStyle}></div>
      </div>
    </>
  );
};
