export interface Option{
    value: string,
}

export interface SelectProps {
    name: string,
    form?: string,
    placeholder: string,
    options: Option[]
}
