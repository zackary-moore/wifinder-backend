
exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([
        {id: 1, title: 'Nice place', body: 'nice upstairs area to work in with couches, etc. Great spot to grab food as well! ', location_id: 3},
        {id: 2, title: 'Sam Jones', body: 'great open area with free wifi, tons of leather couches and places to sit. Nice bar as well!', location_id: 2},
        {id: 3, title: 'Cozy spot', body: 'Cool building, lots of glass and steel. People are pretty friendly.', location_id: 1}
      ]);
    });
};