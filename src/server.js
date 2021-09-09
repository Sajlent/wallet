import { Model, Factory, createServer } from 'miragejs';
import faker from 'faker';

const months = ['January', 'February', 'March', 'April', 'May', 'June'];
const categories = ['travel', 'food', 'pets', 'clothes', 'bills', 'misc'];

export const makeServer = ({ environment = 'test' } = {}) => {
    let server = createServer({
        environment,
        models: {
            expenses: Model
        },
        factories: {
            expense: Factory.extend({
                name() {
                    return faker.commerce.productName();
                },
                month() {
                    return months[Math.floor(Math.random() * months.length)].toLowerCase();
                },
                category() {
                    return categories[Math.floor(Math.random() * categories.length)];
                },
                cost() {
                    return faker.commerce.price();
                }
            })
        },
        seeds(server) {
            server.createList('expense', 50);
        },
        routes() {
            this.namespace = 'api';
            this.get('/expenses', (schema) => {
                return schema.expenses.all();
            });
            this.get('/months', () => {
                return months;
            });
            this.get('/categories', () => {
                return categories;
            });
            this.get('/expenses/:monthID', (schema, request) => {
                let month = request.params.monthID;

                return schema.expenses.where({ month: month });
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