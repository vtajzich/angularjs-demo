package net.tajzich.angular.demo.repository

import net.tajzich.angular.demo.domain.Presentation
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/6/13
 */
@Repository
public interface PresentationRepository extends MongoRepository<Presentation, String> {

}
