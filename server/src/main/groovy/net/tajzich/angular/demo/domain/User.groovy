package net.tajzich.angular.demo.domain

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import net.tajzich.angular.demo.MD5Util
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/28/13
 */
@Document
@EqualsAndHashCode(includes = 'id')
@ToString(includes = ['id', 'email'])
class User {

    @Id
    String id

    String name
    String fullName
    String email
    String gavatarHash

    String getGavatarHash() {

        if(!gavatarHash) {
            gavatarHash = MD5Util.md5Hex(email);
        }

        return gavatarHash
    }
}
