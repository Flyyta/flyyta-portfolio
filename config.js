// The file config.js defines your site’s metadata and other general configuration.

const config = {
  siteName: "Flyyta Portfolio",
  siteHeading: "Website created using Flyyta",
  siteAuthorName: "Abhishek Mogaveera",
  siteAuthorDescription:
    "I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.",
  siteAuthorWebsite: "https://abhiisshakee.netlify.app/",
  postPath: {
    postsdir: "./content",
    outdir: "./public",
  },
  filePath: {
    postsdir: "./src",
    outdir: "./public",
  },
  mapPostsTo: {
    //todo: add directory then filename ..
    fileName: "blog-list.html",
    filedir: "./src",
  },
  postsLayout: {
    postsdir: "./layout/singleBlog",
    file: "blog.html",
  },
  blogListLayout: {
    postsdir: "./layout/BlogListLayout",
    file: "layout.html",
  },
};

module.exports = config;
