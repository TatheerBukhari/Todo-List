#! /usr/bin/env node
import inquirer from 'inquirer';
class TodoList {
    constructor() {
        this.todos = [];
    }
    async addTodo() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'TODO',
                message: 'What do you want to add to your todo list?',
            },
        ]);
        const { TODO } = answers;
        if (TODO) {
            this.todos.push(TODO);
            console.log('Added to your todo list:', TODO);
        }
        else {
            console.log('Kindly add a valid input.');
        }
    }
    async run() {
        let addMore = true;
        while (addMore) {
            await this.addTodo();
            const moreAnswers = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'addmore',
                    message: 'Do you want to add more todo items?',
                    default: false,
                },
            ]);
            addMore = moreAnswers.addmore;
        }
        this.showTodoList();
    }
    showTodoList() {
        if (this.todos.length > 0) {
            console.log('Your Todo List:');
            this.todos.forEach((todo) => {
                console.log(todo);
            });
        }
        else {
            console.log('No todos found.');
        }
    }
}
async function main() {
    const todoList = new TodoList();
    await todoList.run();
}
export default main();
