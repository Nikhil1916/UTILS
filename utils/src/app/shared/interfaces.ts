import { DynamicFieldType } from "./enums";

export interface DynamicField {
    readonly type: DynamicFieldType.BUTTON | DynamicFieldType.COMPONENT | DynamicFieldType.GROUP | DynamicFieldType.LABEL,
    readonly value?:string,
    readonly label?:string,
    readonly class?:string,
    readonly title?:string,
    onClick?:()=>void,
    fields?:DynamicField[],
    readonly fieldClass?:string,
    readonly valueClass?:string,
    readonly parentClass?:string,
}