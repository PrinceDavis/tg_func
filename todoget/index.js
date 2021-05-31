const todoService = require("../services/handler");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        body: todoService.getTodos(context)
    };
}
