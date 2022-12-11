import React from "react";
import "../styles/aboutItem.css";

function Select({ value, onChange, placeholder, options, errorText, showError }) {
  const sortRef = React.useRef(null);
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const handlePopupToggle = () => setVisiblePopup(!visiblePopup);

  const handleOptionSelect = (newValue) => {
    onChange(newValue === value ? null : newValue);
    setVisiblePopup(false);
  };

  const handleOutsideClick = React.useCallback(
    (event) => {
      if (!visiblePopup) return;
      if (event.path.includes(sortRef.current)) return;
      setVisiblePopup(false);
    },
    [visiblePopup],
  );

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <div ref={(element) => (sortRef.current = element)} className="select-container">
      <div onClick={handlePopupToggle} className="sizes">
        <div>{value || placeholder}</div>
        <img
          style={{ rotate: visiblePopup ? "-90deg" : "90deg" }}
          src="/images/Vector 1.png"
          alt="смотреть больше"
        />
      </div>
      <div className="errorSize">{showError && errorText}</div>
      {visiblePopup && (
        <div className="popup-container">
          <ul>
            {options.map((option, index) => (
              <li
                onClick={() => handleOptionSelect(option)}
                className={value === option ? "option-active" : ""}
                key={index}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default React.memo(Select);
