import React from "react";
import { useState } from "react";
import "./Context.component.css";
import Items from "./Items/Items";
const Context = ({ items, onCheckBoxChange, onDeleteClick }) => {
  return (
    <div className="context-container">
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
                <Items  item={item} onCheckBoxChange={onCheckBoxChange} onDeleteClick={ onDeleteClick } />
          </div>
        ))
      ) : (
        <h3>Your list is empty</h3>
      )}
    </div>
  );
};

export default Context;
