import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer, removeCustomer } from '../features/customerSlice';


function CustomerManager() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const customers = useSelector(state => state.customers);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim() === '' || mobile.trim() === '') return;
    dispatch(addCustomer({ name, mobile }));
    setName('');
    setMobile('');
  };

  return (
    <div className="customer-manager">
   
      <input
        type="text"
        placeholder="Enter Customer Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={e => setMobile(e.target.value)}
      />
      <button onClick={handleAdd}>Add Customer</button>

      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            <strong>{customer.name}</strong> - {customer.mobile}
            <button onClick={() => dispatch(removeCustomer(customer.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerManager;
