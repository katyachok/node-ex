# Task 2

There are routes for working with notes. It is possible to create, edit, delete or view notes.

GET - /api/notes - returns empty array.

POST - /api/notes - returns note sent in the request.

PUT - /api/notes/:id - returns note sent in the request.

DELETE - /api/notes/:id - returns { success: true, id: 'value of id' }.


postman collection of requests is in file [node_task2.postman_collection](https://github.com/katyachok/node-ex/blob/node-develop-task2/node_task2.postman_collection.json)


to try in browser follow [link](https://evening-harbor-31701.herokuapp.com/api/notes)
