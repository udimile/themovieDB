import { api_key } from "../../constants/apiKEY"
import { BASE_URL } from "../../constants/URL"
import useRequestData from "../../hooks/useRequestData"
import moment from "moment";
import { goToDetails } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card, CircularProgress} from "@mui/material";
import { CardStyled} from "./styled";


export default function SuggestionCard({ id }) {
    const navigate = useNavigate()
    const [data, loading] = useRequestData({}, `${BASE_URL}/${id}/similar?${api_key}`)

    const similar = data.results && data.results.map(movie => {
        return (
           
            <CardStyled key={movie.id} onClick={() => goToDetails(navigate, movie.id)} sx={{width: 200}} >
                <Card>
                    <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`Poster do ${movie.title}`}
                        sx={{ padding: 0.5, height: 290}}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h2" fontSize={16} component="div">
                            {movie.title}
                        </Typography>
                        <Typography gutterBottom variant="h3" fontSize={14} component="div">
                            {moment.utc(movie.release_date).format('DD MMM YYYY')}
                        </Typography>
                    </CardContent>
                </Card>
            </CardStyled>
           
        )
})

return (<>
    {loading ? <CircularProgress/> : similar}
</>)
}