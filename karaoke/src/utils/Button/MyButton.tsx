import { ReactNode } from "react";
import Button from '@mui/material/Button';

type Props = {
    children: ReactNode;
    btn_size: 'small' | 'medium' | 'large' | string;
    variant: 'contained'| 'outlined' | 'text' | string

};

const MyButton = ({ children, btn_size }: Props) => (
    <Button
        size="small"
    >
        {children}
    </Button>
);

export default MyButton