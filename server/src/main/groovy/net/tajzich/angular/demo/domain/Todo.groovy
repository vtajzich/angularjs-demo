package net.tajzich.angular.demo.domain

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/3/13
 */
@Document
@EqualsAndHashCode(includes = 'id')
@ToString(includes = ['id', 'label'])
class Todo {

    @Id
    String id
    String label
    String description
    boolean done
    User user

    public boolean isDone() {
        return done
    }
}
