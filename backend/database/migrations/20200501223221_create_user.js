
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('hasePassword').notNullable()
    table.string('type').notNullable()
    table.string('image')
    table.string('code')
    table.string('city')
    table.string('district')
    table.string('uf')   
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
