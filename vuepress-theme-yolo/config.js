module.exports = {
  title: "YOLO",
  description: "extremly pure blog theme",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
    ],
  },
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
  }
};
