
export interface CustomButtonProps {
    text: string;
    action: () => void;
    type: '1' | '2';
    outlined?: boolean;
    disabled?: boolean;
}