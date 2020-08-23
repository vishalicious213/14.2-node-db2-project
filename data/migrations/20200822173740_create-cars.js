
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        // create primary key called id
        tbl.increments();
        // VIN, make, model, and mileage
        tbl.text('vin').unique().notNullable();
        tbl.text('make').notNullable();
        tbl.text('model').notNullable();
        tbl.decimal('mileage').notNullable();
    })
};

exports.down = function(knex) {
    // drop the whole table
    return knex.scheme.dropTableIfExists('cars');
};
