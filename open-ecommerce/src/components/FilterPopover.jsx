import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/react'
import '../components/css/filterPopover.css'
import './css/filter.css'
import { MdKeyboardArrowDown } from 'react-icons/md'
// import homeProducts from "./Homeproducts";
// import { useState } from 'react'


const FilterPopover = () => {

  return (

    <PopoverGroup className='popover-group'>
      <p>Filter :</p>
      <Popover>
        <PopoverButton className='filter-btns'>Availability<MdKeyboardArrowDown className="arrow-icon" /></PopoverButton>
        <PopoverPanel
          anchor="bottom"
          transition
          className="popover-panel flex origin-top flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <div className="availability-input">
            <input type="checkbox" id="in-stock" />
            <label htmlFor="in-stock"> In stock (😉)</label>
          </div>
          <div className="availability-input">
            <input type="checkbox" id="out-stock" />
            <label htmlFor="out-stock"> Out of stock (😉)</label>
          </div>
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton className='filter-btns'>Price<MdKeyboardArrowDown className="arrow-icon" /></PopoverButton>
        <PopoverPanel
          anchor="bottom"
          transition
          className="popover-panel flex origin-top flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <div className="range-input">
            <label htmlFor="from">From:</label>
            <br />
            <input type="text" inputMode="numeric" placeholder="Enter amount" id="from" />
          </div>
          <div className="range-input">
            <label htmlFor="to">To:</label>
            <br />
            <input type="text" inputMode="numeric" placeholder="Enter amount" id="to" />
          </div>
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton className='filter-btns'>Category<MdKeyboardArrowDown className="arrow-icon" /></PopoverButton>
        <PopoverPanel
          anchor="bottom"
          transition
          className="popover-panel flex origin-top flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <div className="category-input">
            <input type="checkbox" id="bags" />
            <label htmlFor="bags"> Bags</label>
          </div>
          <div className="category-input">
            <input type="checkbox" id="shoes" />
            <label htmlFor="shoes"> Shoes</label>
          </div>
          <div className="category-input">
            <input type="checkbox" id="clothes" />
            <label htmlFor="clothes"> Clothes</label>
          </div>
          <div className="category-input">
            <input type="checkbox" id="accessories" />
            <label htmlFor="accessories"> Accessories</label>
          </div>
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton className='filter-btns'>Alphabetically<MdKeyboardArrowDown className="arrow-icon" /></PopoverButton>
        <PopoverPanel
          anchor="bottom"
          transition
          className="popover-panel flex origin-top flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <div className="alpha-category-input">
            <span>Alphabetically from A-Z</span>
          </div>
          <div className="alpha-category-input">
            <span>Alphabetically from Z-A</span>
          </div>
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  )
}

export default FilterPopover