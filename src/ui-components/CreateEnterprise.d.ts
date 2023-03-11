/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateEnterpriseInputValues = {
    name?: string;
    officePhone?: string;
    cellPhone?: string;
    email?: string;
    addressNumber?: string;
    addressStreetName?: string;
    addressZipCode?: string;
    addressStateName?: string;
    addressCountryName?: string;
    latitude?: string;
    longitude?: string;
    radius?: string;
};
export declare type CreateEnterpriseValidationValues = {
    name?: ValidationFunction<string>;
    officePhone?: ValidationFunction<string>;
    cellPhone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    addressNumber?: ValidationFunction<string>;
    addressStreetName?: ValidationFunction<string>;
    addressZipCode?: ValidationFunction<string>;
    addressStateName?: ValidationFunction<string>;
    addressCountryName?: ValidationFunction<string>;
    latitude?: ValidationFunction<string>;
    longitude?: ValidationFunction<string>;
    radius?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateEnterpriseOverridesProps = {
    CreateEnterpriseGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    officePhone?: PrimitiveOverrideProps<TextFieldProps>;
    cellPhone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    addressNumber?: PrimitiveOverrideProps<TextFieldProps>;
    addressStreetName?: PrimitiveOverrideProps<TextFieldProps>;
    addressZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    addressStateName?: PrimitiveOverrideProps<TextFieldProps>;
    addressCountryName?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
    radius?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateEnterpriseProps = React.PropsWithChildren<{
    overrides?: CreateEnterpriseOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CreateEnterpriseInputValues) => void;
    onChange?: (fields: CreateEnterpriseInputValues) => CreateEnterpriseInputValues;
    onValidate?: CreateEnterpriseValidationValues;
} & React.CSSProperties>;
export default function CreateEnterprise(props: CreateEnterpriseProps): React.ReactElement;
