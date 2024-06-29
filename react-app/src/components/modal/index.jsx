import { useState } from "react";
import "./index.scss";

export const Modal = ({ setIsShowModal }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    country: "",
  });
  console.log(values);

  const countries = ["US", "Belarus", "Spain", "Rusia", "Kazakstan"];

  const handleClose = () => {
    setIsShowModal(false);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <h4 className="modal__title">Sing in</h4>
        <label>
          Your email
          <input type="email" name="email" className="modal__input" onInput={handleChange} />
        </label>

        <label>Your password</label>
        <input
          type="password"
          name="password"
          className="modal__input"
          onInput={handleChange}
        />
        <select
          id="modalCountry"
          name="country"
          className="modal__input"
          onChange={handleChange}
        >
          <option value="disabled" disabled>
            Select you country
          </option>
          {countries.map((item, index) => {
            return (
              <option key={index} value={item} >
                {item}
              </option>
            );
          })}
        </select>

        <div className="modal__actions">
          <button className="modal__button modal__cancel" onClick={handleClose}>
            Cancel
          </button>
          <button className="modal__button modal__login">Login</button>
        </div>
      </div>
    </div>
  );
};
