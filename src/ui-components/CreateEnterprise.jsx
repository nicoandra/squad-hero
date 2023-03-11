/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, Heading, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function CreateEnterprise(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    name: "",
    officePhone: "",
    cellPhone: "",
    email: "",
    addressNumber: "",
    addressStreetName: "",
    addressZipCode: "",
    addressStateName: "",
    addressCountryName: "",
    latitude: "",
    longitude: "",
    radius: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [officePhone, setOfficePhone] = React.useState(
    initialValues.officePhone
  );
  const [cellPhone, setCellPhone] = React.useState(initialValues.cellPhone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [addressNumber, setAddressNumber] = React.useState(
    initialValues.addressNumber
  );
  const [addressStreetName, setAddressStreetName] = React.useState(
    initialValues.addressStreetName
  );
  const [addressZipCode, setAddressZipCode] = React.useState(
    initialValues.addressZipCode
  );
  const [addressStateName, setAddressStateName] = React.useState(
    initialValues.addressStateName
  );
  const [addressCountryName, setAddressCountryName] = React.useState(
    initialValues.addressCountryName
  );
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [longitude, setLongitude] = React.useState(initialValues.longitude);
  const [radius, setRadius] = React.useState(initialValues.radius);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setOfficePhone(initialValues.officePhone);
    setCellPhone(initialValues.cellPhone);
    setEmail(initialValues.email);
    setAddressNumber(initialValues.addressNumber);
    setAddressStreetName(initialValues.addressStreetName);
    setAddressZipCode(initialValues.addressZipCode);
    setAddressStateName(initialValues.addressStateName);
    setAddressCountryName(initialValues.addressCountryName);
    setLatitude(initialValues.latitude);
    setLongitude(initialValues.longitude);
    setRadius(initialValues.radius);
    setErrors({});
  };
  const validations = {
    name: [],
    officePhone: [{ type: "Phone" }],
    cellPhone: [{ type: "Phone" }],
    email: [{ type: "Email" }],
    addressNumber: [],
    addressStreetName: [],
    addressZipCode: [],
    addressStateName: [],
    addressCountryName: [],
    latitude: [],
    longitude: [],
    radius: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          name,
          officePhone,
          cellPhone,
          email,
          addressNumber,
          addressStreetName,
          addressZipCode,
          addressStateName,
          addressCountryName,
          latitude,
          longitude,
          radius,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "CreateEnterprise")}
      {...rest}
    >
      <Heading
        children="Enterprise"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <TextField
        label="Enterprise name"
        isRequired={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              officePhone,
              cellPhone,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Office Phone Number"
        isRequired={false}
        type="tel"
        value={officePhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone: value,
              cellPhone,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.officePhone ?? value;
          }
          if (errors.officePhone?.hasError) {
            runValidationTasks("officePhone", value);
          }
          setOfficePhone(value);
        }}
        onBlur={() => runValidationTasks("officePhone", officePhone)}
        errorMessage={errors.officePhone?.errorMessage}
        hasError={errors.officePhone?.hasError}
        {...getOverrideProps(overrides, "officePhone")}
      ></TextField>
      <TextField
        label="Cellphone number"
        isRequired={false}
        type="tel"
        value={cellPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone: value,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.cellPhone ?? value;
          }
          if (errors.cellPhone?.hasError) {
            runValidationTasks("cellPhone", value);
          }
          setCellPhone(value);
        }}
        onBlur={() => runValidationTasks("cellPhone", cellPhone)}
        errorMessage={errors.cellPhone?.errorMessage}
        hasError={errors.cellPhone?.hasError}
        {...getOverrideProps(overrides, "cellPhone")}
      ></TextField>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email: value,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Heading
        children="Address"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Address Number"
        value={addressNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email,
              addressNumber: value,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.addressNumber ?? value;
          }
          if (errors.addressNumber?.hasError) {
            runValidationTasks("addressNumber", value);
          }
          setAddressNumber(value);
        }}
        onBlur={() => runValidationTasks("addressNumber", addressNumber)}
        errorMessage={errors.addressNumber?.errorMessage}
        hasError={errors.addressNumber?.hasError}
        {...getOverrideProps(overrides, "addressNumber")}
      ></TextField>
      <TextField
        label="Address Street Name"
        value={addressStreetName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email,
              addressNumber,
              addressStreetName: value,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.addressStreetName ?? value;
          }
          if (errors.addressStreetName?.hasError) {
            runValidationTasks("addressStreetName", value);
          }
          setAddressStreetName(value);
        }}
        onBlur={() =>
          runValidationTasks("addressStreetName", addressStreetName)
        }
        errorMessage={errors.addressStreetName?.errorMessage}
        hasError={errors.addressStreetName?.hasError}
        {...getOverrideProps(overrides, "addressStreetName")}
      ></TextField>
      <TextField
        label="Address ZipCode"
        value={addressZipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode: value,
              addressStateName,
              addressCountryName,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.addressZipCode ?? value;
          }
          if (errors.addressZipCode?.hasError) {
            runValidationTasks("addressZipCode", value);
          }
          setAddressZipCode(value);
        }}
        onBlur={() => runValidationTasks("addressZipCode", addressZipCode)}
        errorMessage={errors.addressZipCode?.errorMessage}
        hasError={errors.addressZipCode?.hasError}
        {...getOverrideProps(overrides, "addressZipCode")}
      ></TextField>
      <TextField
        label="State Name"
        value={addressStateName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName: value,
              addressCountryName,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.addressStateName ?? value;
          }
          if (errors.addressStateName?.hasError) {
            runValidationTasks("addressStateName", value);
          }
          setAddressStateName(value);
        }}
        onBlur={() => runValidationTasks("addressStateName", addressStateName)}
        errorMessage={errors.addressStateName?.errorMessage}
        hasError={errors.addressStateName?.hasError}
        {...getOverrideProps(overrides, "addressStateName")}
      ></TextField>
      <TextField
        label="Country Name"
        value={addressCountryName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName: value,
              latitude,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.addressCountryName ?? value;
          }
          if (errors.addressCountryName?.hasError) {
            runValidationTasks("addressCountryName", value);
          }
          setAddressCountryName(value);
        }}
        onBlur={() =>
          runValidationTasks("addressCountryName", addressCountryName)
        }
        errorMessage={errors.addressCountryName?.errorMessage}
        hasError={errors.addressCountryName?.hasError}
        {...getOverrideProps(overrides, "addressCountryName")}
      ></TextField>
      <TextField
        label="Latitude"
        type="number"
        step="any"
        value={latitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude: value,
              longitude,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.latitude ?? value;
          }
          if (errors.latitude?.hasError) {
            runValidationTasks("latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("latitude", latitude)}
        errorMessage={errors.latitude?.errorMessage}
        hasError={errors.latitude?.hasError}
        {...getOverrideProps(overrides, "latitude")}
      ></TextField>
      <TextField
        label="Longitude"
        type="number"
        step="any"
        value={longitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude,
              longitude: value,
              radius,
            };
            const result = onChange(modelFields);
            value = result?.longitude ?? value;
          }
          if (errors.longitude?.hasError) {
            runValidationTasks("longitude", value);
          }
          setLongitude(value);
        }}
        onBlur={() => runValidationTasks("longitude", longitude)}
        errorMessage={errors.longitude?.errorMessage}
        hasError={errors.longitude?.hasError}
        {...getOverrideProps(overrides, "longitude")}
      ></TextField>
      <TextField
        label="Radius"
        type="number"
        step="any"
        value={radius}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              officePhone,
              cellPhone,
              email,
              addressNumber,
              addressStreetName,
              addressZipCode,
              addressStateName,
              addressCountryName,
              latitude,
              longitude,
              radius: value,
            };
            const result = onChange(modelFields);
            value = result?.radius ?? value;
          }
          if (errors.radius?.hasError) {
            runValidationTasks("radius", value);
          }
          setRadius(value);
        }}
        onBlur={() => runValidationTasks("radius", radius)}
        errorMessage={errors.radius?.errorMessage}
        hasError={errors.radius?.hasError}
        {...getOverrideProps(overrides, "radius")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
