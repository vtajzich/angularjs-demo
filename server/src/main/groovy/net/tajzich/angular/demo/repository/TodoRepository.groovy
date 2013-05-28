package net.tajzich.angular.demo.repository

import net.tajzich.angular.demo.domain.Todo
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/3/13
 */
@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {

}
