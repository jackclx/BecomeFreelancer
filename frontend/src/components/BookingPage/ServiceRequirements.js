import React from 'react';

const ServiceRequirements = ({ formData, handleChange }) => {
    return (
        <div className="form-section">
            <div className="BookingHeader">
                <h2>Service Requirements</h2>
                <p>Specify the services you require and details about your audience and event.</p>
            </div>
            <div className="form-grid">
                <div className="form-group">
                    <label>Service Required 1</label>
                    <input type="text" value={formData.serviceRequired1} onChange={handleChange('serviceRequired1')} />
                </div>
                <div className="form-group">
                    <label>Service Required 2</label>
                    <input type="text" value={formData.serviceRequired2} onChange={handleChange('serviceRequired2')} />
                </div>
                <div className="form-group">
                    <label>Age of Audience</label>
                    <input type="text" value={formData.ageOfAudience} onChange={handleChange('ageOfAudience')} />
                </div>
                <div className="form-group">
                    <label>Size of Audience</label>
                    <input type="text" value={formData.sizeOfAudience} onChange={handleChange('sizeOfAudience')} />
                </div>
                <div className="form-group full-width">
                    <label>Additional Notes</label>
                    <input type="additionalnote" value={formData.additionalNotes} onChange={handleChange('additionalNotes')} placeholder="Any other information we should know about this event?" />
                </div>
            </div>
        </div>
    );
};

export default ServiceRequirements;