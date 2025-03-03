import React from 'react';
import { useTranslation } from 'react-i18next';

import avatar from '../../stubs/images/avatar.jpeg';
import './Profile.css';
import { useGetUsersByIdQuery } from '../../store/api/userApi.tsx';
import { useParams } from 'react-router-dom';

const Profile = () => {

    const {t} = useTranslation();
    const params = useParams();
    const { data, isLoading, isError } = useGetUsersByIdQuery(params.id || '', {
        skip: !params.id
    });

    if (!params.id) {
        return <div>Ошибка: ID пользователя не указан</div>;
      }
    
      if (isLoading) {
        return <div>Загрузка...</div>;
      }
    
      if (isError) {
        return <div>Ошибка при загрузке данных</div>;
      }
    
      if (!data) {
        return <div>Данные не найдены</div>;
      }

    const user = data;

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