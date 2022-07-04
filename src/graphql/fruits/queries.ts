import gql from "graphql-tag";

export const ALL_FRUITS_QUERY = gql`
  query {
    fruits {
      id
      fruit_name
      family
      origin
    }
  }
`

export const SINGLE_FRUIT_QUERY = gql`
query fruit ($id: ID!) {
fruit(id: $id) {
  id
    fruit_name
    bloom
    tree_name
    origin
    life_cycle
    description
    maturation_fruit
    climatic_zone
    producing_countries{
      country
    }
}
}
`;
