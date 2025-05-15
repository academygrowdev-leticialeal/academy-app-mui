import { Box, Typography } from "@mui/material";

export function Copyright() {
    return (
        <Box marginTop={4}>
            <Typography variant="body2" color="textSecondary">
                Copyright © Growdev {new Date().getFullYear()}.
            </Typography>
        </Box>
    )
}