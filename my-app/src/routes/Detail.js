import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const [isLoading, setIsLoading] = useState(true);
    const [JSON, setJSON] = useState(null);
    const {id} = useParams();
    const getMovie = async()=>{
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setJSON(json.data.movie.title);
    }
    useEffect(() => {
        getMovie();
        setIsLoading(false);
    }, [])
    return <h1>{isLoading ? "Detail" : <h1>{JSON}</h1>}</h1>;
    }
export default Detail;