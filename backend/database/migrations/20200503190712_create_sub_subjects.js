exports.up = function (knex) {
  return knex.schema.createTable('sub_subjects', function (table) {
    table.increments()
    table.string('subMatter').notNullable()

    table.string('subjects_id').notNullable()
    table.foreign('subjects_id').references('id').inTable('subjects')

    table.string('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('sub_subjects')
};

