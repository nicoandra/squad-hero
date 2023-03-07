/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateEnterpriseInputValues = {
    Field1?: string;
    Field0?: string;
    Field2?: string;
    Field3?: string;
};
export declare type CreateEnterpriseValidationValues = {
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateEnterpriseOverridesProps = {
    CreateEnterpriseGrid?: PrimitiveOverrideProps<GridProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
    Field3?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateEnterpriseProps = React.PropsWithChildren<{
    overrides?: CreateEnterpriseOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CreateEnterpriseInputValues) => void;
    onChange?: (fields: CreateEnterpriseInputValues) => CreateEnterpriseInputValues;
    onValidate?: CreateEnterpriseValidationValues;
} & React.CSSProperties>;
export default function CreateEnterprise(props: CreateEnterpriseProps): React.ReactElement;
