import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        // Delete a post
        delete(post) {
            if(confirm("Are you sure you want to delete this post?")) {
                this.sendAction('destroyPost', post);
            }
        },

        // Delete a comment
        destroyComment(comment) {
            this.sendAction('destroyComment', comment);
        }
    }
});
