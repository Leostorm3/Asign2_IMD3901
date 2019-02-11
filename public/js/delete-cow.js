'use strict';

AFRAME.registerComponent('delete-cow-mode',
    {

        schema: {},
        init: function () {
            const Context_AF = this;

            Context_AF.el.addEventListener('click', function () {
                console.log('click');
                Context_AF.TurnOnDelete();
            });

        },
        TurnOnDelete: function () {
            //we are gonna get all the cow currenttly genarated and delete them is a neat trick 
            DeleteCowmode= true;
            document.getElementById("text").setAttribute('value', "You have activated the delete mode look at cows to delete them"); 
          
        }

    });






AFRAME.registerComponent('delete-cow-component',
    {

        schema: {},
        init: function () {
            const Context_AF = this;

            Context_AF.el.addEventListener('click', function () {
                console.log('click');
                Context_AF.DeleteCow();
            });

        },
        DeleteCow: function () {
            //can create functions during runtime
            const Context_AF = this;
            if( DeleteCowmode== true){
                Context_AF.el.parentNode.removeChild(Context_AF.el);
            }
        }

    });