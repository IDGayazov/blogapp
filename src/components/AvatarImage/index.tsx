import React from 'react';

import './index.css';
import avatar from '../../assets/images/avatar.jpeg';
import { useGetImageByFilenameQuery } from '../../store/api/imageApi.tsx';
import Loading from '../Loading/index.tsx';

const AvatarImage = ({avatarUrl}) => {

    const { data, isLoading, isError } = useGetImageByFilenameQuery(avatarUrl || '');

    if(isError || !data){
        return (
            <div className="profile-header">
                <img src={avatar} 
                    alt="User Avatar" className="profile-avatar" />
            </div>
        );
    }

    if(isLoading){
        return (
            <div className="profile-header">
                <Loading/>
            </div>
        );
    }

    return (
        <div className="profile-header">
            <img src={data} 
                alt="User Avatar" className="profile-avatar" />
        </div>
    );
}

export default AvatarImage;