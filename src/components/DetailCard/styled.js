import { Card } from "@mui/material";
import styled from "styled-components";

export const DetailCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 400vh;
    
`

export const CardStyled = styled(Card)`
    display: flex;
    flex-direction: row;
    margin: 0.2%;
`
export const DetailMovieStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5px;

`