'use strict';

AFRAME.registerComponent('size-cow-component',
    {

        schema: {},
        init: function () {
            const Context_AF = this;

            Context_AF.el.addEventListener('click', function () {
                console.log('click');
                Context_AF.cahngeSize();
            });

        },
        cahngeSize: function () {
            //can create functions during runtime
            const Context_AF = this;
            Context_AF.el.setAttribute('scale',2 + " " + 2 + " " + 2);
          
        }

    });