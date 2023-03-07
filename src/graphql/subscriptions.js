/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEnterprise = /* GraphQL */ `
  subscription OnCreateEnterprise(
    $filter: ModelSubscriptionEnterpriseFilterInput
  ) {
    onCreateEnterprise(filter: $filter) {
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
export const onUpdateEnterprise = /* GraphQL */ `
  subscription OnUpdateEnterprise(
    $filter: ModelSubscriptionEnterpriseFilterInput
  ) {
    onUpdateEnterprise(filter: $filter) {
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
export const onDeleteEnterprise = /* GraphQL */ `
  subscription OnDeleteEnterprise(
    $filter: ModelSubscriptionEnterpriseFilterInput
  ) {
    onDeleteEnterprise(filter: $filter) {
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
      }
      createdAt
      updatedAt
    }
  }
`;
