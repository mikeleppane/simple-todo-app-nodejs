### General

Simple todo app to create, modify and delete todos. Todos are kept in-memory stopping the container will not keep the existing todos.

### How to Run

```docker run --init -d -p 8000:8000 mikkolep/devops-with-docker-part1-ex15:v2```  
Default port is 8000. You can change that by setting the PORT env.

### How to Use
Running the container will start the application server. The application works via APIs. A todo item contains three properties, complete, id, and text. A user can set the text property during todo creation.
The following apis can be used:
* /todos => get all todos:  GET
* /todo => create todo  POST (e.g. todo="My todo")
* /todo/:id => show todo item by ID  GET
* /todo/:id => delete todo item by ID  DELETE
* /todo/update => update item by ID  POST (e.g. ?id=123&complete=true)


### Links
[Link to Docker Hub page](https://hub.docker.com/repository/docker/mikkolep/devops-with-docker-part1-ex15)