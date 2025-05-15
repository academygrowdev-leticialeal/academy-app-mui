import { Avatar } from "@mui/material";
import { pink } from "@mui/material/colors";

interface AvatarIconProps {
    icon: React.ReactNode;
}

export function AvatarIcon({ icon }: AvatarIconProps) {
    return (
        <Avatar sx={{ bgcolor: pink[500], marginY: 1 }}>
            {icon}
        </Avatar>
    )
}