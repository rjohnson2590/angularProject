// Register `phoneList` component, along with its associated controller and template
angular.
module('todoApp').
component('todoList', {
    templateUrl:"/angularfiles/todo-list.template.html",
    //'<ul>' +
    //'<li ng-repeat="phone in $ctrl.phones">' +
    //'<span>{{phone.name}}</span>' +
    //'<p>{{phone.snippet}}</p>' +
    //'</li>' +
    //'</ul>',
    controller: function todoListController() {
        this.todos = [

            {
                task: 'Create partial view for reviews',
                snippet:'Ask Nick or Nahn how to create a partial view, specifically how to do so for the es, pt, and en review pages for reviews.aspx.'
            },
            {
                task: 'Express Routing',
                snippet: 'Re-learn how to route with expressJs.'
            }, {
                task: 'Angular routes',
                snippet: 'Learn how to use the route provider for angular. Is Express routing above enough? '
            }, {
                task: 'MongoDb',
                snippet: 'Make this a full stack app by using Mongodb for the database.'
            }
        ];


    }
});