import Ajv, { JSONSchemaType } from 'ajv';

export class SchemaValidator {
    private ajv: Ajv;

    constructor() {
        this.ajv = new Ajv();
    }

    validate<T>(schema: JSONSchemaType<T>, data: T): boolean {
        const validate = this.ajv.compile(schema);
        const valid = validate(data);

        if (!valid) {
            console.error('Validation errors:', validate.errors);
        }

        return valid;
    }
}
