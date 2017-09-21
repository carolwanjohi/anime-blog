import Ember from 'ember';

export default Ember.Component.extend({
    updatePostForm: false,

    actions: {
        showUpdateForm() {
            this.set('updatePostForm', true);
        },

        update(post) {
            var params = {
                title: this.get('title'),
                author: this.get('author'),
                content: this.get('content')
            };
            this.set('updatePostForm', false);
            this.sendAction('update', post, params);
        }
    }
});
