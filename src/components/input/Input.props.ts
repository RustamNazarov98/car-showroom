export interface InputProps{
    value: string | number;
    onChange: (key: string, value: string | number) => void;
    placeholder?: string;
    objKey?: string;
    type?: string;
}
