import Ember from 'ember';

export default Ember.Component.extend({
    actions: {

        update(post, params) {
            this.sendAction('update', post, params);
        }
    }
});
