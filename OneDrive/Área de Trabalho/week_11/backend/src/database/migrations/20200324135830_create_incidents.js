
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments('id'); //cria uma chave primaria int auto increment

        table.string('title').notNullable();
        table.string('description').notNullable();;
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //cria o campo

        table.foreign('ong_id').references('id').inTable('ongs'); //torna ele em chave estrangeira
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
