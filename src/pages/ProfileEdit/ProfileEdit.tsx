import React from 'react';

import './ProfileEdit.css';
import AvatarImage from '../../components/AvatarImage/index.tsx';

const ProfileEdit = ({avatarUrl}) => {
    return (
        <div className="profile-container">
            <div className="profile-edit-container">
                <h1>Редактирование профиля</h1>
                <form id="profile-form">
                    <div className="avatar-section">
                        <label htmlFor="avatar-upload">
                            <AvatarImage avatarUrl={avatarUrl}/>
                            <span>Изменить аватар</span>
                        </label>
                        <input type="file" id="avatar-upload" accept="image/*"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Имя пользователя:</label>
                        <input type="text" id="username" name="username" value="Иван Иванов"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value="ivan@example.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">О себе:</label>
                        <textarea id="bio" name="bio">Привет, я Иван!</textarea>
                    </div>
                    <button type="submit">Сохранить изменения</button>
                </form>
            </div>
        </div>
    );
}

export default ProfileEdit;