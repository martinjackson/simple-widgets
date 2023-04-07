import gql from 'graphql-tag';

// Bendre, Sachin    6062
// Goosby, Nova      1649
// https://stackoverflow.com/questions/51322346/graphql-dynamic-query-building
// cnotethegr8' answer    Sep 29, 2021 at 6:09
// ---------------------------------------------------------------------------------------------------------------------------------
export function makeGqlAST(str) {

  let ast = null
  try {
    ast = gql`
    ${str}
    `;
  } catch (err) {
    console.log('ERROR makeGqlAST(str) str:', str);
    throw err
  }

  // This returns an AST of the query string
  return ast
}
