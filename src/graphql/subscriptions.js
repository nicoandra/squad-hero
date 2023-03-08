/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract(
    $filter: ModelSubscriptionContractFilterInput
    $owner: String
  ) {
    onCreateContract(filter: $filter, owner: $owner) {
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
        owner
        contracts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract(
    $filter: ModelSubscriptionContractFilterInput
    $owner: String
  ) {
    onUpdateContract(filter: $filter, owner: $owner) {
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
        owner
        contracts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract(
    $filter: ModelSubscriptionContractFilterInput
    $owner: String
  ) {
    onDeleteContract(filter: $filter, owner: $owner) {
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
        owner
        contracts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
