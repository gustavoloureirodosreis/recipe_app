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
        <Grid>
            {cuisine.map((item) => (
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Card>
            ))}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;