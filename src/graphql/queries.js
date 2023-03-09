/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
      id
      enterpriseId
      customerEmail
      customerName
      customerPhone
      startDate
      endDate
      customerAddressStreet
      customerAddressNumber
      customerAddressCity
      customerAddressZipCode
      latitude
      longitude
      owner
      enterprise {
        id
        name
        officePhone
        cellPhone
        email
        owner
        contracts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listContracts = /* GraphQL */ `
  query ListContracts(
    $id: ID
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContracts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        enterpriseId
        customerEmail
        customerName
        customerPhone
        startDate
        endDate
        customerAddressStreet
        customerAddressNumber
        customerAddressCity
        customerAddressZipCode
        latitude
        longitude
        owner
        enterprise {
          id
          name
          officePhone
          cellPhone
          email
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contractsByEnterpriseIdAndStartDate = /* GraphQL */ `
  query ContractsByEnterpriseIdAndStartDate(
    $enterpriseId: ID!
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractsByEnterpriseIdAndStartDate(
      enterpriseId: $enterpriseId
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enterpriseId
        customerEmail
        customerName
        customerPhone
        startDate
        endDate
        customerAddressStreet
        customerAddressNumber
        customerAddressCity
        customerAddressZipCode
        latitude
        longitude
        owner
        enterprise {
          id
          name
          officePhone
          cellPhone
          email
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contractsByOwnerAndId = /* GraphQL */ `
  query ContractsByOwnerAndId(
    $owner: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractsByOwnerAndId(
      owner: $owner
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enterpriseId
        customerEmail
        customerName
        customerPhone
        startDate
        endDate
        customerAddressStreet
        customerAddressNumber
        customerAddressCity
        customerAddressZipCode
        latitude
        longitude
        owner
        enterprise {
          id
          name
          officePhone
          cellPhone
          email
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEnterprise = /* GraphQL */ `
  query GetEnterprise($id: ID!) {
    getEnterprise(id: $id) {
      id
      name
      officePhone
      cellPhone
      email
      owner
      contracts {
        items {
          id
          enterpriseId
          customerEmail
          customerName
          customerPhone
          startDate
          endDate
          customerAddressStreet
          customerAddressNumber
          customerAddressCity
          customerAddressZipCode
          latitude
          longitude
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEnterprises = /* GraphQL */ `
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
        contracts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const enterprisesByOwner = /* GraphQL */ `
  query EnterprisesByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelEnterpriseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    enterprisesByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        officePhone
        cellPhone
        email
        owner
        contracts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
