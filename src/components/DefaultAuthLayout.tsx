import {  Grid,  Paper,  } from "@mui/material";

interface DefaultAuthLayoutProps {
    children: React.ReactNode;
}

export function DefaultAuthLayout({ children }: DefaultAuthLayoutProps) {
    return (
        <Grid container height={"100vh"} width={"100vw"}>
          <Grid size={{
            xs: false,
            sm: 4,
            md: 7
  
          }}
          sx={{
            backgroundImage: 'url(https://picsum.photos/1920/1080)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#3a3a3a',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          >
            
          </Grid>
  
          <Grid
            size={{
              xs: 12,
              sm: 8,
              md: 5
            }}
            component={Paper}
            elevation={6}
          >
            {children}
          </Grid>
        </Grid>
      )
}