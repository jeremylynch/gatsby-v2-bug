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
  function createPageWithResults(type, response, state, templatePath) {
    actions.createPage({
      path: `${type}-cars`,
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
    const templatePath = path.resolve(template);
    pages.map((type) => {
      let typeParams = Object.assign({}, search_params[0], {params: {
        hitsPerPage: hitsPerPage,
        filters: "dealer_3",
        facets: facets
      }})
      client.search([typeParams]).then(response => {
        createPageWithResults(type, response, state, templatePath)
      })
    })
    resolve()
  })
};
