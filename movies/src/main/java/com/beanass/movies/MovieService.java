package com.beanass.movies;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepositry movieRepositry;
    public List<Movie> allMovies(){
        return movieRepositry.findAll();
    }

    public Optional<Movie> SingleMovie(String imdbId){
        return movieRepositry.findMovieByImdbId(imdbId);
    }
}
