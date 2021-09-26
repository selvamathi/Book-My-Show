import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import MovieLayout from '../layouts/MovieLayout';
const MovieHOC =({component: Component,...rest}) => {

    return(
        <>
            <Route
            {...rest} 
            component={(props)=>
            (    
                <MovieLayout>
                    <Component {...props}/>
                </MovieLayout>
            )}
            />
        </>
    )
}

export default MovieHOC;