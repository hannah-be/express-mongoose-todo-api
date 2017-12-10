## Challenge

1. Create a model for a todo item with description and completed
## Model

### Item
- description: string
- complete: boolean

2. Write out the steps (generate model) for making it using Rails

``rails g model Item description: string complete:boolean``

3. Write out the steps (schema code) for making it using Mongoose

```Javascript
var Item = mongoose.model('Item', {
  description: { type: String, required: [true, 'You need to enter a description for this item.']},
  complete: { type: Boolean, required: [true, 'This item needs a completion status']}
})
```

4. Write Rails code for querying the following:
- All todo items
``` Ruby
def index
  @todos = Todo.all
end
```
- All completed todo items
``` Ruby
def show_complete
  @completed_todos = Todo.where(completed == true)
end
```
- All incomplete todo items
``` Ruby
def show_incomplete
  @completed_todos = Todo.where(completed == false)
end
```
- Finding a todo item with a particular id
``` Ruby
def show_incomplete
  @completed_todos = Todo.where(completed == false)
end
```
- Changing a todo item’s description and persisting it to the database

5. Write Mongoose code for the above list of items

