import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "./AddItem.component.css"

const AddItem = ({ addItemToList, itemValue, setItemValue }) => {
  return (
    <div style={{ justifySelf: "end" }}>
      <form onSubmit={addItemToList}>
        <button className="submit-button" type="submit" aria-label="Add Item">
          <FaPlus />
        </button>
        {/*  <label htmlFor='addItem'>Add Item</label> */}
        <input
          type="text"
          id="addItem"
          placeholder="Add Item"
          value={itemValue}
          required
          onChange={(e) => setItemValue(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default AddItem;
