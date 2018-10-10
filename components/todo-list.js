angular.module("todo-list").component("todoList", {
  bindings: {
    todos: "<",
    delete: "<"
  },
  template: `
        <div ng-repeat='todo in $ctrl.todos track by $index'>
            {{todo}}
            <button ng-click='$ctrl.delete($index)'>&#10004;</button>
        </div>
    `
});
