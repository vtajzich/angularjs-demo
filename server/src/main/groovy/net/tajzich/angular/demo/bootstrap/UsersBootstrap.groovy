package net.tajzich.angular.demo.bootstrap

import net.tajzich.angular.demo.domain.User
import net.tajzich.angular.demo.repository.UserRepository
import org.springframework.beans.factory.InitializingBean
import org.springframework.beans.factory.annotation.Autowired

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/28/13
 */
class UsersBootstrap implements InitializingBean {

    @Autowired
    UserRepository repository

    @Override
    void afterPropertiesSet() throws Exception {

        def list = []

        list << new User(name: 'kvasnovsky', fullName: 'Ondra Kvasnovsky', email: 'ondrej.kvasnovsky@gmail.com')
        list << new User(name: 'bedy', fullName: 'Martin Bednar', email: 'xxbedy@gmail.com')
        list << new User(name: 'rudovsky', fullName: 'Jan Rudovsky', email: 'rudovsky@gmail.com')
        list << new User(name: 'tajzich', fullName: 'Vitek Tajzich', email: 'v.tajzich@gmail.com')

        def found = repository.findAll()

        if(!found || found.isEmpty()) {
            repository.save(list)
        }
    }
}
