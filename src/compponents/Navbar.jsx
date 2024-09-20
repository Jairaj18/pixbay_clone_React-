import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
    const { fetchImagesByCategory,setQuery } = useContext(PixabayContext);

    return (
        <>
        <div className="container text-center my-3">
            <button
                onClick={() => fetchImagesByCategory('nature')}
                type="button"
                className="btn btn-primary mx-3"
                aria-label="Fetch nature images"
            >
                Nature
            </button>
            <button
                onClick={() => fetchImagesByCategory('science')}
                type="button"
                className="btn btn-secondary mx-3"
                aria-label="Fetch science images"
            >
                Science
            </button>
            <button
                onClick={() => fetchImagesByCategory('computer')}
                type="button"
                className="btn btn-success mx-3"
                aria-label="Fetch computer images"
            >
                Computer
            </button>
            <button
                onClick={() => fetchImagesByCategory('buildings')}
                type="button"
                className="btn btn-danger mx-3"
                aria-label="Fetch buildings images"
            >
                Building
            </button>
            <button
                onClick={() => fetchImagesByCategory('sports')}
                type="button"
                className="btn btn-warning mx-3"
                aria-label="Fetch sports images"
            >
                Sports
            </button>
            <button
                onClick={() => fetchImagesByCategory('transportation')}
                type="button"
                className="btn btn-info mx-3"
                aria-label="Fetch transportation images"
            >
                Transportation
            </button>
            <button
                onClick={() => fetchImagesByCategory('travel')}
                type="button"
                className="btn btn-light mx-3"
                aria-label="Fetch travel images"
            >
                Travel
            </button>
            <button
                onClick={() => fetchImagesByCategory('food')}
                type="button"
                className="btn btn-dark mx-3"
                aria-label="Fetch food images"
            >
                Food
            </button>
        </div>

        <div className="container" style={{width:"800px"}}>
            <input 
            type="text" 
            onChange={(e)=>setQuery(e.target.value)}
            className="form-control bg-dark text-light"></input>
        </div>
        </>
        
    );
};

export default Navbar;
