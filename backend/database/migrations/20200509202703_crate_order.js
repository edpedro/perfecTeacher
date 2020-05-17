
exports.up = function (knex) {
  return knex.schema.createTable('order', function (table) {
    table.increments()
    
    //course
    table.string('courses_id')
    table.foreign('courses_id').references('id').inTable('courses')

    //user
    table.string('user_id')
    table.foreign('user_id').references('id').inTable('users')

  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('order')
};
