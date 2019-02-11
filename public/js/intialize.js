function GenerateGround() {
    //can create functions during runtime
    //we will create our music right here
    var bagMusic = new Audio('/assets/sound/Lon_Lon_Ranch_The Legend_of_Zelda.mp3');
    bagMusic.volume = 0.5;
    bagMusic.loop = true;
    bagMusic.play();



   
    var i;
    var y;
    //this will be used to create the ground
        for (y = 0; y < 5; y++) {
            for (i = 0; i < 5; i++) {
                let groundAsset = document.createElement('a-entity');//create new element
                groundAsset.setAttribute('obj-model', { obj: '/assets/models/ground_/grassPlane.obj' });
                groundAsset.setAttribute('position',(-35+(14*y)) + " " + -2.2 + " " + (-35+(14*i)));
                groundAsset.setAttribute('rotation',0 + " " + 0 + " " + 0);
                groundAsset.setAttribute('scale',1 + " " + 1 + " " + 1);
                groundAsset.setAttribute('material', { src: '/assets/textures/grasstexture.jpg' });
                const scene = document.querySelector('a-scene');
                scene.appendChild(groundAsset);

            }
    }
}