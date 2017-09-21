import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('post');
    },

    actions: {
        // Delete an existing Post
        destroyPost(post) {
            post.destroyRecord();
            this.transitionTo('index');
        },

        // Create a new post
        savePost(params) {
            var newPost = this.store.createRecord('post', params);
            newPost.save();
            this.transitionTo('index');
        },

        // Update an existing post
        update(post, params){
            Object.keys(params).forEach(function(key) {
                if(params[key]!==undefined) {
                post.set(key,params[key]);
                }
            });
            post.save();
            this.transitionTo('index');
        },
    }
});
