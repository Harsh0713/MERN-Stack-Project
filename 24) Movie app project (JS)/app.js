// movie app => API => fetch the details of any movie we want
// trending movie of the year
// genere => thriller / comedy / action / suspense / romance etc
// fetch the most rated imdb movie

const api = 'https://www.omdbapi.com/?apikey=61e576a4&t='
let notFound = document.getElementById('notFound');
let title = document.getElementById('title');
let poster = document.getElementById('poster');
let genre = document.getElementById('genre');
let actors = document.getElementById('actor');
 


function searchMovie(){
    let movieName = document.getElementById('movieName');
    let query = api+movieName.value;
    fetch(query).then((data)=>{
        console.log(data)
          return data.json()
    }).then((data)=>{
        if (data.Error){
            notFound.classList.remove('d-none');
            document.getElementById('name').innerText = movieName.value
        }
        else{
            notFound.classList.add('d-none');
            title.innerText = data.Title;
            poster.src = data.Poster;
            genre.innerText = data.Genre;
            actors.innerText = data.Actors;
             document.getElementById('collection').innerText = data.BoxOffice;
             document.getElementById('awards').innerText = data.Awards;
             document.getElementById('director').innerText = data.Director;
             document.getElementById('writer').innerText = data.Writer;






        }
    })



}