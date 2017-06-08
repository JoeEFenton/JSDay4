// Add your JS here.
function todolist() {
  var item = document.getelementbyid("new-todo").value
  var text = document.createtextnode(item)
  var newitem = document.createelement("li")
  newitem.appendchild(text)
  document.getelementbyid("todo-list").appendchid(newitem)
}
