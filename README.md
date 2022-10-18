# Task 3

Add validation and logger for requests.

Validation rules:

`{

    id: required during updating,

    title: required. min 3 characters,

    content: required, min 3 characters, max 500 characters,

    createdAt: date of creation,

    updatedAt: date of update, can be null

}`


postman collection of requests is in file [node_task3.postman_collection](https://github.com/katyachok/node-ex/blob/node-develop-task2/node_task3.postman_collection.json)


to try in browser follow [link](https://evening-harbor-31701.herokuapp.com/api/notes)
