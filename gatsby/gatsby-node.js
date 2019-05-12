/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const data = require("./src/pages/about/members/member.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`./src/pages/about/members/member-template.js`);

  // Create pages for each JSON entry.
  data.forEach(pageData => {
    const path = pageData.pagePath;

    createPage({
      path,
      component: template,
      context: {
        pageData
      }
    });
  });
};
