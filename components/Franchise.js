import React from 'react'
import Pic from '../Pictures/Fitnessbanner.jpg'
import B from '../Pictures/Bangalore.jpg'
import C from '../Pictures/Chennai.jpg'
import H from '../Pictures/Hyderabad.jpg'
import P from '../Pictures/Pune.jpg'
import M from '../Pictures/Mumbai.jpg'
import './Franchise.css';
import Select from 'react-select'
import { useNavigate } from "react-router-dom";

export const Franchise = () => {
  const navi=useNavigate();
  const handle =()=>{
    navi("/Franchiseresponse");
  }
  return (
    <>
        <div>
            <img className='hi' src={Pic}></img>
            <br />
            <br />
            <center>
            <h1 className='font'>READY TO OWN A FRANCHISE WITH US?</h1>
            <br />
            
            <div className="franchise-page"   >
            <p className='fontform'>Interested in joining our franchise? Fill out the form below:</p><br/>
            <form className='fontform' onSubmit={handle}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                />
              </label>
              <br />
              <label>
                Email
                <input
                  type="email"
                  name="email"
                />
              </label>
              <br />
              <label>
              Mobile Number
              <input type="tel" name="number"/></label>
              <label>
                City
                <br />
                <select>
                <option>--Please choose an option--</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
                <option>Mumbai</option>
                <option>Pune</option>
                </select>
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
          <br/>
          <br/>
          <br />
          <br />
        <h1 className='font'>CITIES OPEN FOR FRANCHISE</h1>
        <br />
        <table className='Cities'>
        <tr>
        <td><img src={B} /></td>
        <td><img src={C} /></td>
        <td><img src={H} /></td>
        <td><img src={M} /></td>
        <td><img src={P} /></td>
        </tr>
        <tr className='Cityname'>
        <td align='center'><h4>Bangalore</h4></td>
        <td align='center'><h4>Chennai</h4></td>
        <td align='center'><h4>Hyderabad</h4></td>
        <td align='center'><h4>Mumbai</h4></td>
        <td align='center'><h4>Pune</h4></td>
        </tr>
        </table>
        </center>
        </div>
        </>
        )
    }
export default Franchise