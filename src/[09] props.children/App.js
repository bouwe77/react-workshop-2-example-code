import React from "react";

const App = () => {
  var picture = {
    src: "https://source.unsplash.com/random/640x480",
    title: "Random photo"
  };

  return (
    <div>
      <Picture src={picture.src}>
        <div>{picture.title}</div>
      </Picture>
      <Picture src={picture.src}>
        <div>
          <a href="https://newnexus.nl">{picture.title}</a>
        </div>
      </Picture>
      <Picture src={picture.src}>
        <Caption caption={picture.title} />
      </Picture>
    </div>
  );
};

const Picture = props => {
  return (
    <div>
      <img src={props.src} alt="aeroplane" width="200" />
      {props.children}
    </div>
  );
};

const Caption = ({ caption }) => <div>{caption}</div>;

export default App;
