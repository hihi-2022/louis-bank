exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bank')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bank').insert([
        { id: 1, name: 'banana' },
        { id: 2, name: 'apple' },
        { id: 3, name: 'feijoa' },
      ])
    })
}
