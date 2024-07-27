import React from 'react';
import BreadcrumbNav from '../components/BreadcrumbNav';
import ProfileInfo from '../components/ProfilePage/ProfileInfo';
import { ProfileNav } from '../components/ProfilePage/ProfileNav';
import ProfileAbout from '../components/ProfilePage/ProfileAbout';
import { ProfileExperiences } from '../components/ProfilePage/ProfileExperiences';
import ProfilePricing from '../components/ProfilePage/ProfilePricing';
import ProfileReviews from '../components/ProfilePage/ProfileReviews';
import Profile from '../css/Profile.css';


function ProfilePage() {
    return (
        <main>
            <div className="profile-page">
                {/* <div style={{ position: 'fixed' }}> */}
                <BreadcrumbNav />
                <ProfileInfo />
                <ProfileNav />
                {/* </div> */}
                <ProfileAbout />
                <ProfileExperiences />
                <ProfilePricing />
                <ProfileReviews />
            </div>
        </main>
    );
};

export default ProfilePage;