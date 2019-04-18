const getRandomPhoto = () => {
  const randomNr = Math.floor(Math.random() * 1080);
  var url = `https://picsum.photos/100/?image=${randomNr}`;
  return { id: randomNr, url };
};

export default getRandomPhoto;
