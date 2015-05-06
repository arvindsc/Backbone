(function() {
    var Rectangle = Backbone.Model.extend({});
    var RectangleView = Backbone.View.extend({
      tagName: 'div',
      className: 'rectangle',
      events: {
        'click': 'move'
      },

      render: function() {
        this.setDimentions();
        this.setPositions();
        this.setColor();
        return this;
      },
      setColor: function() {
        this.$el.css('background-color', this.model.get('color'));
      },
      setDimentions: function() {
        this.$el.css({
          width: this.model.get('width') + 'px',
          height: this.model.get('height') + 'px'
        });
      },
      setPositions: function() {
        var position = this.model.get('position');
        this.$el.css({
          left: position.x,
          top: position.y
        });
      },
      move: function() {
        this.$el.css('left', this.$el.position().left + 10);
      }

    });
    
    
    
    var models = [
      new Rectangle({
        width: 200,
        height: 150,
        position: {
          x: 300,
          y: 150
        },
        color: 'red'

      }),
      new Rectangle({
        width: 200,
        height: 150,
        position: {
          x: 200,
          y: 50
        },
        color: 'red'

      }),
      new Rectangle({
        width: 200,
        height: 150,
        position: {
          x: 70,
          y: 150
        },
        color: 'red'

      }),
      new Rectangle({
        width: 200,
        height: 150,
        position: {
          x: 260,
          y: 90
        },
        color: 'red',
      }),
      new Rectangle({
        width: 200,
        height: 150,
        position: {
          x: 300,
          y: 70
        },
        color: 'red'

      })];

    _(models).each(function(model) {
        $('div#canvas').append(new RectangleView({
          model: model
        }).render().el);
      });
    
})();