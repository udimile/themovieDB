import useRequestData from "../../hooks/useRequestData"
import { BASE_URL_GENRE } from "../../constants/URL"
import { api_key } from "../../constants/apiKEY"
import { Chip } from '@mantine/core';
import { CardStyled } from "./styled";
import { CircularProgress } from "@mui/material";


export default function GenreCard() {

    const [genres, loadingGenres] = useRequestData({}, `${BASE_URL_GENRE}list?${api_key}`)

    const genresList = genres.genres && genres.genres.map(genre => {
        return (

                <Chip multiple value={genre.id} onClick={() => console.log(genre.id)} >{genre.name}</Chip>    
       
        )
    })

    return (
        <CardStyled>
            {loadingGenres ? <CircularProgress /> : genresList}
        </CardStyled>
    )
}