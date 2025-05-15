import { Typography } from "@mui/material";

interface TitleProps {
    text: string;
}

export function Title({ text }: TitleProps) {
    return (
        <Typography variant="h5" component="h1" marginBottom={1}>{text}</Typography>
    )
}