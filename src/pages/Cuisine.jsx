import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

function Cuisine () {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getRecipes = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(() => {
        getRecipes(params.type);
        console.log(params.type);
    }, [params.type]);

    return (
        <div></div>
    )
}

export default Cuisine;