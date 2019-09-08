var scene, camera, light, renderer, texture3,ball1,ball2,baLL3,height,width, texture1,texture2,parent, controls;

init();
animate();

function init() {

        loader = new THREE.TextureLoader(new THREE.LoadingManager());
        texture1 = loader.load('textures/github.png');
        texture2 = loader.load('textures/linkedin.jpg');
        console.log("not running here")
        texture3 = loader.load('textures/resume.jpg');


    var bg = '#210039';
    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(bg);
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
    camera.position.set( 20, 20, 20 );

    // controls
    controls = new THREE.OrbitControls( camera );
    controls.minDistance = 70;
    controls.maxDistance = 50;

    // axes
    // scene.add( new THREE.AxisHelper( 20 ) );

    // geometry
    var geometry1 =  new THREE.SphereGeometry( 4, 60,60 );
    var geometry2 =  new THREE.SphereGeometry( 4, 60,60 );
    var geometry3 =  new THREE.SphereGeometry( 4, 60,60 );





    // material
    var mat1 = new THREE.MeshBasicMaterial({map:    texture3});
    var mat2 = new THREE.MeshBasicMaterial({map:    texture1});
    var mat3 = new THREE.MeshBasicMaterial({map:    texture2});

    // parent
    parent = new THREE.Object3D();
    scene.add( parent );



    // pivots
    var pivot1 = new THREE.Object3D();
    var pivot2 = new THREE.Object3D();
    var pivot3 = new THREE.Object3D();
    pivot1.rotation.y = 0;
    pivot2.rotation.y = 2 * Math.PI / 3;
    pivot3.rotation.y = 4 * Math.PI / 3;
    parent.add( pivot1 );
    parent.add( pivot2 );
    parent.add( pivot3 );

    // mesh
    var mesh1 = new THREE.Mesh( geometry1, mat1 );
    var mesh2 = new THREE.Mesh( geometry2, mat2 );
    var mesh3 = new THREE.Mesh( geometry3, mat3 );
    mesh1.position.x = 20;
    mesh2.position.x = 20;
    mesh3.position.x = 20;



    pivot1.add( mesh1 );
    pivot2.add( mesh2 );
    pivot3.add( mesh3 );

    var domEvents = new THREEx.DomEvents(camera, renderer.domElement)
    var url	= 'https://docs.google.com/document/d/1O8S2wXhmeed4K-G-ZeQRBmy9qipTJjILxRiUFerfRgI/export?format=pdf'
    THREEx.Linkify(domEvents, mesh1, url)

    var url	= 'https://github.com/zuest'
    THREEx.Linkify(domEvents, mesh2, url)

    var url	= 'https://www.linkedin.com/in/abdulfatah-elhamarnah-847937146/'
    THREEx.Linkify(domEvents, mesh3, url)

}

function animate() {

    requestAnimationFrame( animate );

    parent.rotation.y += 0.01;

    controls.update();

    renderer.render( scene, camera );

}
