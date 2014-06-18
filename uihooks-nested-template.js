if (Meteor.isClient) {
  Session.setDefault('show', true);
  UI.body.show = function () {
    return Session.get('show');
  };

  UI.body.events({
    'click': function () {
      Session.set('show', false);
    }
  });
  
  // set up a basic null UI hook
  Template.hello.rendered = function() {
    this.firstNode.parentNode._uihooks = {
      removeElement: function(node) {
        console.log('remove element')
        // explicitly do nothing
      }
    }
  }
}
