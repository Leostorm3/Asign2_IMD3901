'use strict';
function generationNumber() {
    return (Math.floor(Math.random() * 60) - 30);
}

function generationNumber360() {
    return (Math.floor(Math.random() * 360));
}

function gerataPV() {


    return (generationNumber() + " " + -2 + " " + generationNumber());

}

function gerataRotate() {


    return (0 + " " + generationNumber360() + " " + 0);

}


AFRAME.registerComponent('create-cow-component',
    {

        schema: {},
        init: function () {
            const Context_AF = this;

            Context_AF.el.addEventListener('click', function () {
                console.log('click');
                Context_AF.createCow();
            });

        },
        createCow: function () {
             DeleteCowmode= false;
             
            //can create functions during runtime
            document.getElementById("text").setAttribute('value', "You have activated the size mode look at cows to change them"); 
            const Context_AF = this;
            var i;
            for (i = 0; i < 10; i++) {
                let CowElem = document.createElement('a-entity');//create new element
                CowElem.setAttribute('obj-model', { obj: '/assets/models/Cow.obj' });
                CowElem.setAttribute('position', gerataPV());
                CowElem.setAttribute('rotation', gerataRotate());
                CowElem.setAttribute('scale',1 + " " + 1 + " " + 1);
                CowElem.setAttribute('material', { src: '/assets/textures/Cow.png' });
                CowElem.setAttribute('size-cow-component', {});
                CowElem.setAttribute('delete-cow-component', {});
                const scene = document.querySelector('a-scene');
                scene.appendChild(CowElem);

            }
        }

    });

    