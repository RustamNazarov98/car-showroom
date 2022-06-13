export interface Option{
    id?: number,
    name: string,
}

export interface SelectProps {
    name: string,
    form?: string,
    placeholder: string,
    options: Option[],
    onChange?: (key: string, value: string | number) => void;
    objKey?: string,
}
