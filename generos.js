


const dateIs = {
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D"

}

const dateIsNot = {
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D"

}
const dateIsWath = {
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D",
    formula: "D"

}

const cargarGeneros = async () => {
   

    try {
        const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9f7031622a3c84ce82bbf384f262391a&language=en-US`);
        
        if (genres.status === 200) {
            const datosGenres = await genres.json();

            datosGenres.genres.forEach(genre => {
                
            });
           

        } else if (genres.status === 401) {
            console.log("erorrrr")
        }
        } catch (error) {
        console.log(error)
        }
}

cargarGeneros();




