import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('post', params.post_id);
    },

    actions: {   
        // Delete an existing Post and its comments
        destroyPost(post) {
            var comment_deletions = post.get('comments').map(function (post){
                return post.destroyRecord();
            });
            Ember.RSVP.all(comment_deletions).then( function() {
                return post.destroyRecord();
            });
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

        // Create a comment
        saveComment(params) {
            debugger;
            var newComment = this.store.createRecord('comment', params);
            var post = params.post;
            post.get('comments').addObject(newComment);
            newComment.save().then( function() {
                return post.save();
            });
            this.transitionTo('post', post);
        },

        // Delete a comment
        destroyComment(comment) {
            comment.destroyRecord();
            this.transitionTo('index');
        }

    }
});
