package com.beanass.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReviewRepositry extends MongoRepository<Review, ObjectId> {
}
