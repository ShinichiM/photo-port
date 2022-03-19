import React, { useState } from 'react';
import { getCategories } from './gallery-categories';
import Modal from '../../Modal';

function Photolist({ category }) {
    const [photos] = useState(getCategories());
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    function toggleModal(photo, index) {
        setCurrentPhoto({...photo, index: index});
        setIsModalOpen(!isModalOpen);
    };

    return(
        <div className='flex-row'>
        {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}></Modal>}
            {currentPhotos.map((photo, index) => (
                <img 
                src={require(`../../../assets/small/${category}/${index}.jpg`)} 
                className='img-thumbnail mx-1'
                alt={photo.name}
                key={photo.name}
                onClick={() => toggleModal(photo, index)}
                >
                </img>
            ))}
        </div>
    )
};

export default Photolist;