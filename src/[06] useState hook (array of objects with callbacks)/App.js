import React, { useState } from "react";
import Photo from "./Photo";
import Buttons from "./Buttons";
import getRandomPhoto from "./getRandomPhoto";

function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  function addPhoto() {
    // Add a random photo to the state.
    const newPhoto = getRandomPhoto();
    setPhotos([...photos, newPhoto]);

    selectPhoto(newPhoto.id);
  }

  function updatePhoto() {
    // Update an existing photo with a new one.
    const newPhoto = getRandomPhoto();

    const updatedPhotos = photos.map(photo => {
      if (photo.id === selectedId) {
        return {
          ...photo,
          url: newPhoto.url
        };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
  }

  function removePhoto() {
    // Rmove a photo from the state.
    const updatedPhotos = photos.filter(photo => photo.id !== selectedId);
    setPhotos(updatedPhotos);
  }

  function selectPhoto(id) {
    // Update the state with the id of the selected photo.
    setSelectedId(id);
  }

  return (
    <div>
      <h1>Example 6: useState for array of objects</h1>

      <Buttons
        addPhoto={addPhoto}
        updatePhoto={updatePhoto}
        removePhoto={removePhoto}
      />

      <div className="photos">
        {photos.map(photo => (
          <Photo
            key={photo.id}
            photo={photo}
            selectPhoto={selectPhoto}
            isPhotoSelected={selectedId === photo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
