import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Carousel from './Carousel';


const DetailsCard = () => {
  const {nameMovie, movieId} = useParams();
  const [moviesDatas, setMoviesDatas] = useState([]);
  const [Data, setData] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const [signUp, setSignUp] = useState(true);

  useEffect(() => {
  
try {

  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=65bb91b037f20d50a722883e4a68fe58&query=${nameMovie}&language=fr-FR`)
  .then((res) => setMoviesDatas(res.data.results))


} catch(err)

{
  console.log(err)
}
  },[nameMovie])

console.log(filterMovie)
  const dateFormater = (date) => {
   let [yy, mm, dd] = date.split("-");
   return [dd, mm, yy].join("-");
 };
 
 const genreFinder = (props) => {
    let genreArray = []; 
 
console.log(props)
return moviesDatas.filter(mv =>   mv.id == movieId )?.map((elm) => {
   for (let index = 0; index < elm.genre_ids.length; index++) {

        switch (elm.genre_ids[index]) {
          case 28:
            genreArray.push(`Action`);
            break;
          case 12:
            genreArray.push(`Aventure`);
            break;
          case 16:
            genreArray.push(`Animation`);
            break;
          case 35:
            genreArray.push(`Comédie`);
            break;
          case 80:
            genreArray.push(`Policier`);
            break;
          case 99:
            genreArray.push(`Documentaire`);
            break;
          case 18:
            genreArray.push(`Drame`);
            break;
          case 10751:
            genreArray.push(`Famille`);
            break;
          case 14:
            genreArray.push(`Fantasy`);
            break;
          case 36:
            genreArray.push(`Histoire`);
            break;
          case 27:
            genreArray.push(`Horreur`);
            break;
          case 10402:
            genreArray.push(`Musique`);
            break;
          case 9648:
            genreArray.push(`Mystère`);
            break;
          case 10749:
            genreArray.push(`Romance`);
            break;
          case 878:
            genreArray.push(`Science-fiction`);
            break;
          case 10770:
            genreArray.push(`Téléfilm`);
            break;
          case 53:
            genreArray.push(`Thriller`);
            break;
          case 10752:
            genreArray.push(`Guerre`);
            break;
          case 37:
            genreArray.push(`Western`);
            break;
          default:
            break;
        }
  
      }

      return genreArray.map((genre) => <li key={genre} className='listCard tagColor'>{genre}</li>);
}
 ) 
  };




const Refresh = () =>
{
  let items = document.querySelectorAll('.carousel .carousel-item')
  items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i <minPerSlide; i++) {
      if (!next) {
          // wrap carousel by using first child
          next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
  }
})
  setTimeout(() => {
    setRefresh(1 + 1)
  }, 100);
}

   return (

    moviesDatas.filter(mv =>   mv.id == movieId )?.map((mov) => ( 
 
  <div className='container-details'>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" /><div className="pd-wrap ">
           <div className="container2">
        
            <div className="row row-detail" style={{marginLeft: '15px',   marginRight: '0'}}>
              <div className="col-md-6" >
               <img src={
              "https://image.tmdb.org/t/p/original/" + mov.poster_path} alt="" srcset=""  style={{width: '60%',     marginLeft: '50px'}}/>

            </div>
              <div className="col-md-6 detailsCard">
                <div className="product-dtl">
                  <div className="product-info">
                <h1>{mov.title}</h1>
                    <div className="product-price-discount"><span> {mov.release_date ? (
                 <h5 className='tagColor'> {dateFormater(mov.release_date)}  / {mov.vote_average.toFixed(1)}<span>⭐</span></h5> ) : null} </span>
                 
                 </div>
               </div>   
              <div className="row">
                 <div className="col-md-6">
                <ul className='genreCard' style={{paddingLeft: '0'}}>
                 {genreFinder()}
                  </ul>
                </div>                    
            </div>                 
              </div>
                <div className="product-info-tabs">
                 <ul className="nav nav-tabs" id="myTab" role="tablist">
                   <li className="nav-item" onClick={() => setSignUp(true)}>
                         <a  className={" nav-link active tagColor"} style={signUp ? {backgroundColor: 'red', color: 'white'} : {backgroundColor: 'unset'}} id="description-tab" data-toggle="tab"  role="tab" aria-controls="description" aria-selected="true">Synopsis</a>
                     </li>
                    <li className="nav-item" onClick={() => setSignUp(false)}>
                     {console.log(signUp)}
                     <a    className={  "active-btn nav-link  tagColor"} style={signUp ? {backgroundColor: 'unset'} : {backgroundColor: 'red',  color: 'white'}}id="review-tab" data-toggle="tab"  role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
                   </li>
                 </ul>
                <div className="tab-content" id="myTabContent">
              <div>

              {signUp ?  (    
              <> 
           {mov.overview ? (<>
            <div className="tab-pane fade show active tagColor" id="description" role="tabpanel" aria-labelledby="description-tab">
            {mov.overview}
            </div>
           </>
           ) : (<div className="tab-pane fade show active tagColor" id="description" role="tabpanel" aria-labelledby="description-tab">
              <h1>Aucun synopsis</h1>
                </div>

            )}

            </>

           ) : ( 
              <>
            <div className="tab-pane fade show active tagColor" id="description" role="tabpanel" aria-labelledby="description-tab">
{mov.overview}
          </div>
          </>
         )}

            </div>
  {
    mov?.genre_ids[0] ? (
    <>
    
  <div class="container text-center my-3" >
		<div class="row mx-auto my-auto justify-content-center">
			<div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner" role="listbox">
       <Carousel genre={mov?.genre_ids[0]} />
          {Refresh()}
				</div>
        
				<a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				</a>
				<a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
				</a>
			</div>
		</div>		
	</div>

    </>

  ):(
  <h1> aucun film en commun </h1>
  )
}

                
                   </div>
              </div>        
           </div>             
        </div>      
      </div>
   </div>
</div>

    ))
  )
};

export default DetailsCard;