import React from 'react'
import './Subscription.css';

const SubscriptionPage = () => {
    return (
    <div className="whole3">
    <div className="subscription-page">
      <h2>Subscribe to Our Fitness App</h2>
      <p>Get access to exclusive workouts, nutrition plans, and more!</p>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Subscription Plan:
          <select
            name="subscriptionPlan"
            required
          >
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="pro">Pro</option>
          </select>
        </label>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            required
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="text"
            name="expirationDate"
            placeholder="MM/YYYY"
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            required
          />
        </label>
        <center>
        <button type="submit">Subscribe Now</button>
        </center>
        </form>
    </div>
    <br />
    <br/>
    <br/>
    <center>
    <div className="table-container">
    <h2>Membership Prices</h2>
    <br /> 
    <table className="custom-table">
      <thead>
        <tr>
          <th>Subscription Plans</th>
          <th>List Price</th>
          <th>Offer Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic</td>
          <td>5499</td>
          <td>2599</td>
        </tr>
        <tr>
          <td>Premium</td>
          <td>10499</td>
          <td>7499</td>
        </tr>
        <tr>
          <td>Pro</td>
          <td>15999</td>
          <td>10499</td>
        </tr>
      </tbody>
    </table>
  </div>
  </center>
    </div>

  );
};

export default SubscriptionPage;