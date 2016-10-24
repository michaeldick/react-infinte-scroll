import React from 'react';

function Hud() {
  return (
    <nav className="hud">
      <button type="button" className="hud__btn">
        <img src="public/menu.svg" alt="Menu" />
      </button>
      <h1 className="hud__title">Title</h1>
    </nav>
  );
}

export default Hud;
