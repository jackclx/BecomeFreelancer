import React from 'react';

const EventDetails = ({ formData, handleChange }) => {
    return (
        <div className="form-section">
            <div className="BookingHeader">
                <h2>Event Details</h2>
                <p>Provide basic details about your event to help us understand your needs.</p>
            </div>
            <div className="form-grid">
                <div className="form-group">
                    <label>Event Type</label>
                    <input type="text" value={formData.eventType} onChange={handleChange('eventType')} />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" value={formData.date} onChange={handleChange('date')} />
                </div>
                <div className="form-group">
                    <label>Start Time</label>
                    <input type="time" value={formData.startTime} onChange={handleChange('startTime')} />
                </div>
                <div className="form-group">
                    <label>End Time</label>
                    <input type="time" value={formData.endTime} onChange={handleChange('endTime')} />
                </div>
                <div className="form-group full-width">
                    <label>Address</label>
                    <input type="text" value={formData.address} onChange={handleChange('address')} />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;