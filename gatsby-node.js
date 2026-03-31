const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const { blogPosts } = require('./src/data/blog-posts.js');
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');

  blogPosts.forEach((post) => {
    createPage({
      path: `/articles/${post.slug}`,
      component: blogPostTemplate,
      context: { post },
    });
  });
};
