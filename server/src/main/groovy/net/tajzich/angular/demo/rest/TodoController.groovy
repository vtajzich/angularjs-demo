package net.tajzich.angular.demo.rest

import net.tajzich.angular.demo.domain.Todo
import net.tajzich.angular.demo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

/**
 * Created with IntelliJ IDEA.
 * User: vtajzich
 * Date: 5/3/13
 */
@Controller
@RequestMapping('/rest')
class TodoController {

    TodoRepository repository

    @RequestMapping(value = '/todos', method = RequestMethod.GET)
    @ResponseBody
    public List<Todo> list() {
        return repository.findAll()
    }

    @RequestMapping(value = '/todos/{id}', method = RequestMethod.GET)
    @ResponseBody
    public Todo findOne(@PathVariable String id) {
        return repository.findOne(id)
    }

    @RequestMapping(value = '/todos/{id}', method = RequestMethod.DELETE)
    @ResponseBody
    public void delete(@PathVariable String id) {
        repository.delete(id)
    }

    @RequestMapping(value =  '/todos', method = RequestMethod.POST, consumes = 'application/json')
    @ResponseBody
    public Todo save(@RequestBody Todo todo) {
        return repository.save(todo)
    }

    @RequestMapping(value = '/todos', method = RequestMethod.PUT, consumes = 'application/json')
    @ResponseBody
    public Todo update(@RequestBody Todo todo) {
        return repository.save(todo)
    }

    @Autowired
    void setRepository(TodoRepository repository) {
        this.repository = repository
    }
}
