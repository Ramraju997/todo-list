import React, { useEffect, useState } from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";
import './Footer.component.css'

const Footer = ({ length, items }) => {
    const [completedItems, setCompletedItems] = useState(0);
    useEffect(() => {
        const itemsCompleted = items.filter((item) => (item.checked === true));
        setCompletedItems(itemsCompleted.length);
    },[items]) 

  return (
    <div>
          <div className='footer-content'>
              <IoMdCheckboxOutline className='footer-checkbox' />
              <span className='footer-span'>Completed {completedItems} of { length }</span>
      </div>
    </div>
  )
}

export default Footer
