import React from 'react'
import moment from "moment";
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import { api_key } from '../../constants/apiKEY'
import SuggestionCard from './SuggestionCard'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardStyled, DetailCardStyled, DetailMovieStyled } from './styled';
import { ScrollArea } from '@mantine/core';

export default function DetailCard({ detail, id }) {
    const [data, loading] = useRequestData({}, `${BASE_URL}${id}/credits?${api_key}`)

    const genres = detail.genres && detail.genres.map(genre => {
        return <Typography key={genre.name} variant='h4' display={'inline'} margin={0.5} fontSize={16}>{genre.name}</Typography>
    })

    const cast = data.cast && data.cast.filter(
        acting => {
            return acting.order <= 9
        }).map(credit => {
            return (

                
                    <CardStyled key={credit.id} sx={{}} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
                                alt={`Foto do ${credit.name}`}
                                sx={{ padding: 0.5 }}

                            />
                            <CardContent sx={{ padding: 0.5 }}>
                                <Typography variant="h5" component="div" fontSize={15}>
                                    {credit.name}
                                </Typography>
                                <Typography variant="p" component="div" sx={{}}>
                                    {credit.character}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </CardStyled>
            

            )
        })

    const crews = data.crew && data.crew.filter(
        crew => {
            return crew.job === "Screenplay" || crew.job === "Director" || crew.job === "Characters"
        }
    ).map(crew => {
        return (
            <div key={crew.id}>
                <Typography variant='h2' fontSize={16}>{crew.name}</Typography>
                <Typography variant='h3' fontSize={14}>{crew.job}</Typography>
            </div>
        )
    })


    return (
        <div>
            {detail &&
                <DetailMovieStyled key={detail.id}>
                    <img src={`https://image.tmdb.org/t/p/w400${detail.poster_path}`} alt={`Poster do ${detail.title}`} />
                    <div>
                        <Typography variant='h1' fontSize={24} >{detail.title}</Typography>
                        <Typography variant='h3' fontSize={14} display={'inline'}>{moment.utc(detail.release_date).format('DD/MM/YYYY')}</Typography>
                        <Typography variant='h3' fontSize={14} display={'inline'}>{genres}</Typography>
                        <Typography variant='h3' fontSize={14} display={'inline'}> {(detail.runtime / 60).toFixed()}h{detail.runtime % 60}min </Typography>


                        <Typography variant='h2' fontSize={18}>Sinopse</Typography>
                        <Typography variant='h3' fontSize={14}>{detail.overview}</Typography>

                        <div>{loading ? <p> Carregando...</p> : crews}</div>

                    </div>


                </DetailMovieStyled>
            }
        <div>
            <Typography variant='h1' fontSize={19}>Elenco original</Typography>
            <ScrollArea>
                {loading ?
                    <p> Carregando...</p> : <DetailCardStyled>{cast}</DetailCardStyled>
                    }
            </ScrollArea>
        </div>
            
            <div>
                <Typography variant='h1' fontSize={19}>Recomendações</Typography>
                <ScrollArea> <DetailCardStyled> <SuggestionCard id={id} /></DetailCardStyled></ScrollArea>
            </div>

        </div>

    )
}