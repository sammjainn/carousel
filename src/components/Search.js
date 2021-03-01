import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  return (
    <div className='search'>
      <p className='heading'>Vacation rentals in India</p>
      <p className='sub-heading'>Find and book unique accomodation on Airbnb</p>
      <form>
        <div>
          <label for='country'>Location</label>

          <select id='country' name='country'>
            <option value='Australia'>Australia</option>
            <option value='Belgium'>Belgium</option>
            <option value='Brazil'>Brazil</option>
            <option value='Canada'>Canada</option>
            <option value='China'>China</option>
            <option value='Denmark'>Denmark</option>
            <option value='Egypt'>Egypt</option>
            <option value='Fiji'>Fiji</option>
            <option value='France'>France</option>
            <option value='Germany'>Germany</option>
            <option value='Greece'>Greece</option>
            <option value='Hong Kong'>Hong Kong</option>
            <option value='India'>India</option>
            <option value='Indonesia'>Indonesia</option>
            <option value='Italy'>Italy</option>
            <option value='Japan'>Japan</option>
            <option value='Kenya'>Kenya</option>
            <option value='Mexico'>Mexico</option>
            <option value='Nepal'>Nepal</option>
            <option value='New Zealand'>New Zealand</option>
            <option value='Philippines'>Philippines</option>
            <option value='Singapore'>Singapore</option>
            <option value='South Africa'>South Africa</option>
            <option value='Spain'>Spain</option>
            <option value='Sri Lanka'>Sri Lanka</option>
            <option value='Switzerland'>Switzerland</option>
            <option value='Thailand'>Thailand</option>
            <option value='United Arab Emirates'>United Arab Emirates</option>
            <option value='United Kingdom'>United Kingdom</option>
            <option value='United States'>United States</option>
            <option value='Viet Nam'>Viet Nam</option>
          </select>
        </div>
        <div>
          <label for='start-date'>Check In</label>
          <DatePicker id='start-date' onChange={setStart} value={start} />
        </div>
        <div>
          <label for='end-date'>Check Out</label>
          <DatePicker id='end-date' onChange={setEnd} value={end} />
        </div>
        <div>
          <label for='adults'>Adults</label>
          <input id='adults' type='number' min='1' max='10' />
        </div>
        <div>
          <label for='adults'>Children</label>
          <input id='children' type='number' min='0' max='10' />
        </div>

        <div>
          <button>
            <FaSearch /> Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
