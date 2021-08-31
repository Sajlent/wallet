import { Model, createServer } from 'miragejs';

export const makeServer = ({ environment = 'test' } = {}) => {
    let server = createServer({
        environment,
        models: {
            expenses: Model
        },
        seeds(server) {
            server.create('expense', {
                name: 'Plane tickets',
                category: 'travel',
                cost: 330
            });
            server.create('expense', {
                name: 'Cat food',
                    category: 'pets',
                cost: 89,
            });
            server.create('expense', {
                name: 'Dinner in chinese restaurant',
                category: 'food',
                cost: 223,
            });
            server.create('expense', {
                name: 'Winter jacket',
                category: 'clothes',
                cost: 459,
            });
            server.create('expense', {
                name: 'Electricity bill',
                category: 'bill',
                cost: 230,
            });
        },
        routes() {
            this.namespace = 'api/expenses';
            this.get('/', (schema, request) => {
                return schema.expenses.all();
            });
        }
    });

    return server;
}