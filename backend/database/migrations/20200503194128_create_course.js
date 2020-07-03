
exports.up = function(knex) {
  return knex.schema.createTable('courses', function(table){
    table.increments()
    table.string('competence')//competencia
    table.string('teach')//ensinar
    table.boolean('homeClasses')//aulas em casa
    table.boolean('webCamClasses')//aulas webCam
    table.boolean('studentClasses')//aulas aluno
    table.string('title')    
    table.string('methodology')//metodologia
    table.string('presentation')//apresentacao
    table.decimal('hourValue')//valor da hora
    table.decimal('offsetValue')//valor do deslocamento
    table.decimal('webValue')//valor da web
    table.decimal('packageValue')//valor do pacote
    //user
    table.string('user_id')
    table.foreign('user_id').references('id').inTable('users')
    //subjects
    table.string('subjects_id')
    table.foreign('subjects_id').references('id').inTable('subjects')

    //sub_subjects
    table.string('sub_subjects_id')
    table.foreign('sub_subjects_id').references('id').inTable('sub_subjects')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('courses')
};
