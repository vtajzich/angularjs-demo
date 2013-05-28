package net.tajzich.angular.demo.repository

import net.tajzich.angular.demo.domain.User
import org.springframework.data.mongodb.repository.MongoRepository

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/28/13
 */
public interface UserRepository extends MongoRepository<User, String> {

}
