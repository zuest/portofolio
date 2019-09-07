var scene, camera, light, renderer, texture3,ball1,ball2,baLL3,height,width, texture1,texture2;

function load() {
    var loader;

    loader = new THREE.TextureLoader(new THREE.LoadingManager());

    loader.load('textures/resume.jpg', function(obj) {
         texture1 = loader.load('textures/github.png');
         texture2 = loader.load('textures/linkedin.jpg');
        console.log("not running here")
        texture3 = obj;
        init();
        console.log("init")

        animate();
    });
}

load();

function init() {
     height = window.innerHeight, width = window.innerWidth, bg = '#210039';
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 800 / 400, 0.1, 1000);
    camera.position.set(1.5, 1.5, 1.5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);
    light = new THREE.PointLight(0xffffff,1,500);
    light.position.set(10,0,25)
    scene.add(light);
    var mat1 = new THREE.MeshBasicMaterial({map:    texture3});
    var mat2 = new THREE.MeshBasicMaterial({map:    texture1});
    var mat3 = new THREE.MeshBasicMaterial({map:    texture2});
    var ballgeo = new THREE.SphereGeometry( 0.3, 60,60 );
    ball1 = new THREE.Mesh( ballgeo , mat1 );
    ball1.position.x = 0.1;
    ball1.position.y = 0.65;
    scene.add(ball1);





    var ballgeo = new THREE.SphereGeometry( 0.3, 60,60 );
    ball2 = new THREE.Mesh( ballgeo , mat2 );
    ball2.userData = { URL: "http://stackoverflow.com"};

    ball2.position.x = 0.5;
    ball2.position.y = -0.8;
    scene.add(ball2);




    var ballgeo = new THREE.SphereGeometry( 0.23, 60,60 );
    ball3 = new THREE.Mesh( ballgeo , mat3 );
    ball3.position.x = 1.32;
    ball3.position.y = 0.65;
    scene.add(ball3);



    ball3.rotation.x = -0.5;
    ball2.rotation.x = -0.8;
    ball1.rotation.x = -0.8;

    renderer = new THREE.WebGLRenderer({ antialias: true } );
    renderer.setClearColor(bg);
    renderer.setSize(width, height);
    var d = document.getElementById('scene');
    document.body.appendChild(d);
    d.appendChild(renderer.domElement);


    var domEvents	= new THREEx.DomEvents(camera, renderer.domElement)


    var url	= 'https://docs.google.com/document/d/1O8S2wXhmeed4K-G-ZeQRBmy9qipTJjILxRiUFerfRgI/export?format=pdf'
    THREEx.Linkify(domEvents, ball1, url)

    var url	= 'https://github.com/zuest'
    THREEx.Linkify(domEvents, ball2, url)

    var url	= 'https://www.linkedin.com/in/abdulfatah-elhamarnah-847937146/'
    THREEx.Linkify(domEvents, ball3, url)
}

function mousemove(event){
    mouse.x = ( event.clientX / player.width ) * 2 - 1;
    mouse.y = - ( event.clientY / player.height ) * 2 + 1;
}


function onDocumentMouseDown(event) {
    console.log("onMouseDown")
    // console.log("yo: ",this.getObjectByName())
    event.preventDefault();
    var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
    var intersects = raycaster.intersectObjects(ball2);
    if (intersects.length > 0) {
        window.open(intersects[0].object.userData.URL);
    }
}

function animate() {
    requestAnimationFrame(animate);
    height = window.innerHeight, width = window.innerWidth;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    ball1.rotation.y += 0.01;
    ball2.rotation.y += 0.02;
    ball3.rotation.y += 0.03;

    renderer.render(scene, camera);
}