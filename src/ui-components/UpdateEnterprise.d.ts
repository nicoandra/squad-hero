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
export declare type UpdateEnterpriseInputValues = {
    name?: string;
    cellPhone?: string;
    officePhone?: string;
    email?: string;
    addressNumber?: string;
    addressStreetName?: string;
    latitude?: string;
    longitude?: string;
    radius?: string;
};
export declare type UpdateEnterpriseValidationValues = {
    name?: ValidationFunction<string>;
    cellPhone?: ValidationFunction<string>;
    officePhone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    addressNumber?: ValidationFunction<string>;
    addressStreetName?: ValidationFunction<string>;
    latitude?: ValidationFunction<string>;
    longitude?: ValidationFunction<string>;
    radius?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateEnterpriseOverridesProps = {
    UpdateEnterpriseGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    cellPhone?: PrimitiveOverrideProps<TextFieldProps>;
    officePhone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    addressNumber?: PrimitiveOverrideProps<TextFieldProps>;
    addressStreetName?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
    radius?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateEnterpriseProps = React.PropsWithChildren<{
    overrides?: UpdateEnterpriseOverridesProps | undefined | null;
} & {
    initialData?: UpdateEnterpriseInputValues;
    onSubmit: (fields: UpdateEnterpriseInputValues) => void;
    onChange?: (fields: UpdateEnterpriseInputValues) => UpdateEnterpriseInputValues;
    onValidate?: UpdateEnterpriseValidationValues;
} & React.CSSProperties>;
export default function UpdateEnterprise(props: UpdateEnterpriseProps): React.ReactElement;
