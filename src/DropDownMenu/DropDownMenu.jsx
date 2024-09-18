import React, { useState, useEffect } from "react";
import './DropDownMenu.css';

function DropDownMenu({ options, title, selectedSport, onSportSelect}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect((e) => {
    const handleClick = (e) => {
      if (!e.target.closest('.dropdown-menu')) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  const handleSelect = (sport) => {
    onSportSelect(sport);
  }

  return (
    <div className="dropdown-menu">
      <button className="dropdown-button" onClick={toggleMenu}>
        {title}
      </button>

      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <p className="dropdown-component" key={index}>
              <button className="component-button" onClick={()=>handleSelect(option.label)}>{option.label}</button>
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropDownMenu;