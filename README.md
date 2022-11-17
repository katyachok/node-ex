# Task 4

Work with DB. 

Now all notes are collected in mongo db. The request for getting all notes has pagination (max 10 notes per page), the ability to filter notes by date of creation, as well as search by name.

For filtering by date of creation provide dateFilters with values 

| Value | Description |
| ----- | ----------- |
| $eq | Matches values that are equal to a specified value. |
| $gt | Matches values that are greater than a specified value. |
| $gte | Matches values that are greater than or equal to a specified value. |
| $in | Matches any of the values specified in an array. |
| $lt | Matches values that are less than a specified value. |
| $lte | Matches values that are less than or equal to a specified value. |
| $ne | Matches all values that are not equal to a specified value. |
| $nin | Matches none of the values specified in an array. |


ex. ``/api/notes?dateFilters=$gte:2022-10-13,$lte:2022-10-17``



postman collection of requests is in file [node_task4.postman_collection](https://github.com/katyachok/node-ex/blob/node-develop-task2/node_task4.postman_collection.json)



to try in browser follow [link](https://warm-bayou-85750.herokuapp.com/api/notes)
