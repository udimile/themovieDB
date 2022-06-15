import React from 'react'
import { goToDetails } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


export default function MovieCard({ movie }) {

    const navigate = useNavigate()

    return (
        <>
            {movie &&
                <Card key={movie.id} onClick={() => goToDetails(navigate, movie.id)} sx={{ maxWidth: 200, marginLeft: 3, }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`Poster do ${movie.title}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{}}>
                                {movie.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>}
        </>
    )
}