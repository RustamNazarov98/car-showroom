export interface TextareaProps {
    value: string | number;
    rows: number,
    cols: number,
    onChange: (key: string, value: string | number) => void;
    placeholder: string;
    objKey: string;
}
