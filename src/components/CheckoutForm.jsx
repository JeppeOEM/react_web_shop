import React from "react";
import { useRef } from "react"; //we can go inside the dome and change something
import { insertOrder } from "../modules/db";

function CheckoutForm(props) {
  const theForm = useRef(null);

  function submit(e) {
    e.preventDefault();
    theForm.current.elements.name.value;
    insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: props.cart,
    });
  }

  return (
    <form onSubmit={submit} ref={theForm}>
      <div className="form-control">
        <br></br>
        <label htmlFor="form-name">Name</label>
        <input required type="text" name="name" id="form-name" />
      </div>
      <div className="form-control">
        <label htmlFor="form-email">Email</label>
        <input required type="email" name="email" id="form-email" />
      </div>
      <div className="form-control">
        <label htmlFor="form-address">Address</label>
        <textarea required name="address" id="address-name" />
      </div>
      <button>pay</button>
    </form>
  );
}

export default CheckoutForm;
