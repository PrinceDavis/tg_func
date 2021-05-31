const todoService = require("../services/handler");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if (req.body && req.body.task) {
        context.res = {
            status: 200,
            body: todoService.addTodos(context)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
}