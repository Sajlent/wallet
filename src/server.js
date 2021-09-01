import { Model, createServer } from 'miragejs';

export const makeServer = ({ environment = 'test' } = {}) => {
    let server = createServer({
        environment,
        models: {
            expenses: Model,
            months: Model
        },
        seeds(server) {
            server.create('month', { id: 'january' })
            server.create('month', { id: 'february' })
            server.create('month', { id: 'march' })
            server.create('month', { id: 'april' })
            server.create('month', { id: 'may' })
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
            this.namespace = 'api';
            this.get('/expenses', (schema, request) => {
                return schema.expenses.all();
            });
            this.get('/months', (schema, request) => {
                return schema.months.all();
            });
            this.post('/', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);

                return schema.expenses.create(attrs);
            });
            this.patch('/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody);
                let id = request.params.id;
                let note = schema.expenses.find(id);

                return note.update(newAttrs);
            });
            this.delete('/:id', (schema, request) => {
                let id = request.params.id;

                return schema.expenses.find(id).destroy();
            });
        }
    });

    return server;
}