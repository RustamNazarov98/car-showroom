export interface TextareaProps {
    value: string;
    rows: number,
    cols: number,
    onChange: (value: string) => void;
    placeholder: string;
}
