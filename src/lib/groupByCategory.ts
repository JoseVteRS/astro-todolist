// Typescript interface for Todo
export interface Todo {
    id: string;
    title: string;
    description: string;
    category: string;
    completed: boolean;
}

export interface Category {
    name: string;
    todos: Todo[];
}

export const groupByCategory = (todos: Todo[]) => {
    const categories = todos.reduce((acc, todo) => {
        const category = acc.find((item) => item.name === todo.category);
        if (category) {
            category.todos.push(todo);
        } else {
            acc.push({
                name: todo.category,
                todos: [todo],
            });
        }
        return acc;
    }, [] as Category[]);
    return categories;
};

