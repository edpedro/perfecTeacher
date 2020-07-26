
exports.up = function (knex) {
  return knex.schema.createTable('order', function (table) {
   
    table.increments()
    table.string('name').notNullable()
    table.string('data').notNullable()
    table.string('address')
    table.string('cel').notNullable()
    table.string('information').notNullable()
    table.string('teacher_id').notNullable()
    
    //course
    table.string('course_id')
    table.foreign('course_id').references('id').inTable('courses')

    //user
    table.string('user_id')
    table.foreign('user_id').references('id').inTable('users')

  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('order')
};
