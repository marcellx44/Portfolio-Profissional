import { Box } from "@mui/material";
import { styled } from "@mui/material";

export const SHome = styled(Box)(
    {
        width:"100%",
        background: '#cfe8fc', 
        minHeight: "60vh", 
        display: "flex",
        padding: "20px"
    }
)

export const SHomeContent = styled(Box)(
    {
        border:"1px solid red",
        width:"50%"
    }
)

export const SHomeImage = styled(Box)(
    {
        border:"1px solid black",
        width:"50%"
    }
)