let id = 1;

export const posts = [
  {
    id: id++,
    img: require("./img-yosemite.jpg"),
    alt: 'Yosemite Park art',
    liked: true,
  },
  {
    id: id++,
    img: require("./snowboard.jpeg"),
    alt: 'Snowboarding trick',
    liked: false,
  },
  {
    id: id++,
    img: require("./dawn_by_aenami_dc2duc2-fullview.png"),
    alt: 'Sunset drawing',
    liked: true,
  },
  {
    id: id++,
    img: require("./bright-falls.jpg"),
    alt: 'Bright Falls',
    liked: true,
  },
  {
    id: id++,
    img: require("./skateboard.jpg"),
    alt: 'Sunset drawing',
    liked: false,
  },
];
