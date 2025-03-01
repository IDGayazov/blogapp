import React from 'react';
import { useTranslation } from 'react-i18next';

import {users} from '../../stubs/api/users'
import avatar from '../../stubs/images/avatar.jpeg';
import './Profile.css';

const Profile = () => {

    const {t} = useTranslation();
    const user = users.find(user => user.id === 1);

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={avatar} alt="User Avatar" className="profile-avatar" />
                <h1 className="profile-username">{user?.username}</h1>
            </div>

            <div className="profile-details">
                <div className="profile-field">
                <span className="profile-label">{t('Firstname')}:</span>
                <span className="profile-value">{user?.firstname}</span>
                </div>

                <div className="profile-field">
                <span className="profile-label">{t('Lastname')}:</span>
                <span className="profile-value">{user?.lastname}</span>
                </div>

                <div className="profile-field">
                <span className="profile-label">{t('Email')}:</span>
                <span className="profile-value">{user?.email}</span>
                </div>

                <div className="profile-field">
                <span className="profile-label">{t('Bio')}:</span>
                <p className="profile-bio">{user?.bio}</p>
            </div>
      </div>
    </div>
    );
}

export default Profile;