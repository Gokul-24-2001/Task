import React, { useState } from 'react';
import { submitTravelRequest } from './api';

const TravelForm = () => {
    const [form, setForm] = useState({ destination: '', date_of_travel: '', reason: '' });

    const handleSubmit = async () => {
        try {
            await submitTravelRequest(form);
            alert('Travel request submitted!');
        } catch (error) {
            alert('Submission failed');
        }
    };

    return (
        <div>
            <h2>Travel Request</h2>
            <input type="text" placeholder="Destination" onChange={(e) => setForm({...form, destination: e.target.value})} />
            <input type="date" onChange={(e) => setForm({...form, date_of_travel: e.target.value})} />
            <textarea placeholder="Reason" onChange={(e) => setForm({...form, reason: e.target.value})} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default TravelForm;
