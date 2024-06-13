import "./index.css";

export const MenuHamburger = ({isOpen}) => {

  return (
    <>
      <div className={`menu__btn ${isOpen ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
