import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    review: DS.attr(),
    post: DS.belongsTo('post', {asyc: true})
});
