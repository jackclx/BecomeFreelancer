import React from 'react';

const ContactBudget = ({ formData, handleChange }) => {
    return (
        <div className="form-section">
            <div className="BookingHeader">
                <h2>Contact & Budget</h2>
                <p>Share your contact information and budget to receive tailored quotes.</p>
            </div>
            <div className="form-grid">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={formData.name} onChange={handleChange('name')} />
                </div>
                <div className="form-group">
                    <label>Contact Number</label>
                    <input type="text" value={formData.contactNumber} onChange={handleChange('contactNumber')} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={formData.email} onChange={handleChange('email')} />
                </div>
                <div className="form-group">
                    <label>Budget</label>
                    <input type="budget" value={formData.budget} onChange={handleChange('budget')} />
                </div>
                <div className="form-group full-width">
                    <label>Additional Notes</label>
                    <input type="additionalnote2" value={formData.additionalNotes2} onChange={handleChange('additionalNotes2')} placeholder="Any other information we should know about this event?" />
                </div>
            </div>
        </div>
    );
};

export default ContactBudget;