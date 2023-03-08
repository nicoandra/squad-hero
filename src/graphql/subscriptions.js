/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract($filter: ModelSubscriptionContractFilterInput) {
    onCreateContract(filter: $filter) {
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
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract($filter: ModelSubscriptionContractFilterInput) {
    onUpdateContract(filter: $filter) {
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
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract($filter: ModelSubscriptionContractFilterInput) {
    onDeleteContract(filter: $filter) {
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
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEnterprise = /* GraphQL */ `
  subscription OnCreateEnterprise(
    $filter: ModelSubscriptionEnterpriseFilterInput
    $owner: String
  ) {
    onCreateEnterprise(filter: $filter, owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateEnterprise = /* GraphQL */ `
  subscription OnUpdateEnterprise(
    $filter: ModelSubscriptionEnterpriseFilterInput
    $owner: String
  ) {
    onUpdateEnterprise(filter: $filter, owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteEnterprise = /* GraphQL */ `
  subscription OnDeleteEnterprise(
    $filter: ModelSubscriptionEnterpriseFilterInput
    $owner: String
  ) {
    onDeleteEnterprise(filter: $filter, owner: $owner) {
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
      owner
    }
  }
`;
