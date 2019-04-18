import React from "react";
import Photo from "./Photo";
import Buttons from "./Buttons";
import getRandomPhoto from "./getRandomPhoto";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: 0,
      photos: []
    };
  }

  addPhoto = () => {
    // Add a random photo to the state.
    const newPhoto = getRandomPhoto();
    const photos = [...this.state.photos, newPhoto];
    this.setState({
      photos: photos
    });

    this.selectPhoto(newPhoto.id);
  };

  updatePhoto = () => {
    // Update an existing photo with a new one.
    const newPhoto = getRandomPhoto();

    const photos = this.state.photos.map(photo => {
      if (photo.id === this.state.selectedId) {
        return {
          ...photo,
          url: newPhoto.url
        };
      }
      return photo;
    });
    this.setState({ photos: photos });
  };

  removePhoto = () => {
    // Rmove a photo from the state.
    const photos = this.state.photos.filter(
      photo => photo.id !== this.state.selectedId
    );
    this.setState({ photos: photos });
  };

  selectPhoto = id => {
    // Update the state with the id of the selected photo.
    this.setState({ selectedId: id });
  };

  render() {
    return (
      <div>
        <h1>Example 7: setState for array of objects</h1>

        <Buttons
          addPhoto={this.addPhoto}
          updatePhoto={this.updatePhoto}
          removePhoto={this.removePhoto}
        />

        <div className="photos">
          {this.state.photos.map(photo => (
            <Photo
              key={photo.id}
              photo={photo}
              selectPhoto={this.selectPhoto}
              isPhotoSelected={this.state.selectedId === photo.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
