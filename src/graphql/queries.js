/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEnterprise = /* GraphQL */ `
  query GetEnterprise($id: ID!) {
    getEnterprise(id: $id) {
      id
      name
      officePhone
      cellPhone
      email
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
      enterprise {
        id
        name
        officePhone
        cellPhone
        email
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
        enterprise {
          id
          name
          officePhone
          cellPhone
          email
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
        enterprise {
          id
          name
          officePhone
          cellPhone
          email
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
