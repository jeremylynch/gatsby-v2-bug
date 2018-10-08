const algoliasearch = require('algoliasearch')
const path = require(`path`);
const { SearchResults, SearchParameters } = require('algoliasearch-helper');

exports.createPages = (
  {
    graphql,
    actions
  },
  {
    appId,
    apiKey,
    index,
    hitsPerPage,
    facets,
    pages,
    template,
    filters
  }
) => {
  function createPageWithResults(type, templatePath) {
    actions.createPage({
      path: 'cars',
      component: templatePath,
      context: {
        car_type: 'test',
      },
    })
  }

  const client = algoliasearch(
    appId,
    apiKey
  );

  const search_params = [
    {
      indexName: index,
      query: ''
    }
  ]

  const state = SearchParameters.make({
    hitsPerPage: hitsPerPage,
    facets: facets
  });

  return new Promise((resolve, reject) => {
    const templatePath = path.resolve('src/pages/page-2.js');
    pages.map((type) => {
      createPageWithResults(type, templatePath)
    })
    resolve()
  })
};
