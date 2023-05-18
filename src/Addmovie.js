import { useState } from "react"
import "./Addmovie.css";
export default function Admovie({movieDetail,setDataMovie,setStatus})
{
    console.log(movieDetail);
    const[image,setImage]=useState("");
    const[overview,setOverview]=useState("");
    const[title,setTitle]=useState("");
    const[rating,setRating]=useState("");
    const[releaseDate,setReleaseDate]=useState("");
    const handleSubmit=(e)=>
    {
        if(image===""||title===""||overview===""||rating===""||releaseDate==="")
        {
            alert("Input a field first");
            return;
        }
        if(rating<0||rating>11)
        {
            alert("Rating should not be more than 10 of less than 1");
            return;
        }
        const newMovie = {
            backdrop_path:image,
            video:true,
            original_title:title,
            overview:overview,
            vote_average:rating,
            release_date:releaseDate
        }
        setStatus(false);
        e.preventDefault();
        setDataMovie([...movieDetail, newMovie]);
    }
    return(
        <>
        <div className="addmovie-box"></div>
        <div className="addmovie-form">
        <form onSubmit={handleSubmit}>
            <h3>Movie Description</h3><hr/><br/>
        <span>Choose a Image:</span><input className="input input1" type="file" onChange={(e)=>{
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      const imageContent = e.target.result;
                      setImage(imageContent);
                    };
                    reader.readAsDataURL(file);
                }
            }}/><br/><br/>
            <span>Movie Title:</span><input className="input input2" type="text"placeholder="Enter Movie Title"onChange={(e)=>{
                setTitle(e.target.value);
            }}/><br/><br/>
            <span>Overview of Movie:</span><textarea className="input input3" placeholder="Enter Movie Overview"onChange={(e)=>{
                setOverview(e.target.value);
            }}/><br/><br/>
            <span>Rating of Movie:</span><input className="input input4" type="number"placeholder="rating(1 to 10)"onChange={(e)=>{
                setRating(e.target.value);
            }}/><br/><br/>
            <span>Release Date:</span><input className="input input5" type="date"onChange={(e)=>{
                setReleaseDate(e.target.value);
            }}/>
            <button className="button">Submit Movie Description</button>
        </form></div>
        </>
    );
};