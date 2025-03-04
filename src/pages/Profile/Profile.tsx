import React from 'react';
import { useTranslation } from 'react-i18next';

import './Profile.css';
import { useGetUserByIdQuery } from '../../store/api/userApi.tsx';
import { useParams } from 'react-router-dom';
import AvatarImage from '../../components/AvatarImage/index.tsx';
import Loading from '../../components/Loading/index.tsx';
import ErrorMessage from '../../components/Error/index.tsx';

const Profile = () => {

    const {t} = useTranslation();
    const params = useParams();
    const { data, isLoading, isError } = useGetUserByIdQuery(params.id || '', {
        skip: !params.id
    });

    if (!params.id) {
      return (
        <div className="profile-container">
          <div className="profile-header">
            <ErrorMessage message="Ошибка ID пользователя не указан"/>
          </div>
        </div>
      );
    }
    
    if (isLoading) {
      return (
        <div className="profile-container">
          <div className="profile-header">
            <Loading/>
          </div>
        </div>
      );
    }
  
    if (isError) {
      return (
        <div className="profile-container">
          <div className="profile-header">
            <ErrorMessage message="Произошла ошибка при получении данных"/>
          </div>
        </div>
      );
    }
  
    if (!data) {
      return (
        <div className="profile-container">
          <div className="profile-header">
            <ErrorMessage message="Данные не найдены"/>
          </div>
        </div>
      );
    }

    const user = data;
    console.log(data);
    const avatarUrl = (user.avatarUrl || '');
    console.log(avatarUrl);

    return (
        <div className="profile-container">
            <div className="profile-header">
                <AvatarImage avatarUrl={avatarUrl}/>
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