export const listPublicEnterprises = /* GraphQL */ `
  query ListEnterprises(
    $id: ID
    $filter: ModelEnterpriseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEnterprises(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        officePhone
        cellPhone
        email
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;