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
export declare type UpdateEnterpriseInputValues = {
    name?: string;
    cellPhone?: string;
    officePhone?: string;
    email?: string;
};
export declare type UpdateEnterpriseValidationValues = {
    name?: ValidationFunction<string>;
    cellPhone?: ValidationFunction<string>;
    officePhone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateEnterpriseOverridesProps = {
    UpdateEnterpriseGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    cellPhone?: PrimitiveOverrideProps<TextFieldProps>;
    officePhone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
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
