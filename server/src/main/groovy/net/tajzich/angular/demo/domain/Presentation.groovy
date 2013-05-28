package net.tajzich.angular.demo.domain

import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/6/13
 */
@Document
class Presentation {

    String name
    List<Slide> slides = []
}
