/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEnterprise = /* GraphQL */ `
  mutation CreateEnterprise(
    $input: CreateEnterpriseInput!
    $condition: ModelEnterpriseConditionInput
  ) {
    createEnterprise(input: $input, condition: $condition) {
      id
      name
      officePhone
      cellPhone
      addressStreetName
      addressNumber
      addressZipCode
      addressStateName
      addressCountryName
      latitude
      longitude
      radius
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
export const updateEnterprise = /* GraphQL */ `
  mutation UpdateEnterprise(
    $input: UpdateEnterpriseInput!
    $condition: ModelEnterpriseConditionInput
  ) {
    updateEnterprise(input: $input, condition: $condition) {
      id
      name
      officePhone
      cellPhone
      addressStreetName
      addressNumber
      addressZipCode
      addressStateName
      addressCountryName
      latitude
      longitude
      radius
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
export const deleteEnterprise = /* GraphQL */ `
  mutation DeleteEnterprise(
    $input: DeleteEnterpriseInput!
    $condition: ModelEnterpriseConditionInput
  ) {
    deleteEnterprise(input: $input, condition: $condition) {
      id
      name
      officePhone
      cellPhone
      addressStreetName
      addressNumber
      addressZipCode
      addressStateName
      addressCountryName
      latitude
      longitude
      radius
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
export const createContract = /* GraphQL */ `
  mutation CreateContract(
    $input: CreateContractInput!
    $condition: ModelContractConditionInput
  ) {
    createContract(input: $input, condition: $condition) {
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
        addressStreetName
        addressNumber
        addressZipCode
        addressStateName
        addressCountryName
        latitude
        longitude
        radius
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
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $input: UpdateContractInput!
    $condition: ModelContractConditionInput
  ) {
    updateContract(input: $input, condition: $condition) {
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
        addressStreetName
        addressNumber
        addressZipCode
        addressStateName
        addressCountryName
        latitude
        longitude
        radius
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
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $input: DeleteContractInput!
    $condition: ModelContractConditionInput
  ) {
    deleteContract(input: $input, condition: $condition) {
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
        addressStreetName
        addressNumber
        addressZipCode
        addressStateName
        addressCountryName
        latitude
        longitude
        radius
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
