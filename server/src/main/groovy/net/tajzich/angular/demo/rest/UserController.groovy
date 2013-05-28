package net.tajzich.angular.demo.rest

import net.tajzich.angular.demo.domain.User
import net.tajzich.angular.demo.domain.User
import net.tajzich.angular.demo.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/28/13
 */
@Controller
@RequestMapping('/rest')
class UserController {

    UserRepository repository

    @RequestMapping(value = '/users', method = RequestMethod.GET)
    @ResponseBody
    public List<User> list() {
        return repository.findAll()
    }

    @RequestMapping(value = '/users/{id}', method = RequestMethod.GET)
    @ResponseBody
    public User findOne(@PathVariable String id) {
        return repository.findOne(id)
    }

    @RequestMapping(value = '/users/{id}', method = RequestMethod.DELETE)
    @ResponseBody
    public void delete(@PathVariable String id) {
        repository.delete(id)
    }

    @RequestMapping(value =  '/users', method = RequestMethod.POST, consumes = 'application/json')
    @ResponseBody
    public User save(@RequestBody User User) {
        return repository.save(User)
    }

    @RequestMapping(value = '/users', method = RequestMethod.PUT, consumes = 'application/json')
    @ResponseBody
    public User update(@RequestBody User User) {
        return repository.save(User)
    }

    @Autowired
    void setRepository(UserRepository repository) {
        this.repository = repository
    }


}
