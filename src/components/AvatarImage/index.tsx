import React from 'react';

import './index.css';
import { useGetImageByFilenameQuery } from '../../store/api/imageApi.tsx';

const AvatarImage = ({avatarUrl}) => {

    const { data } = useGetImageByFilenameQuery(avatarUrl || '');

    if (!data) return <div>No image data</div>;

    return (
        <div className="profile-header">
            <img src={data} 
                alt="User Avatar" className="profile-avatar" />
        </div>
    );
}

export default AvatarImage;