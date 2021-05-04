/* global THREE, cube, scene, camera, renderer */
/*
//Animate a cube to rotate around: x, and y axis
function animate_cube() {
    
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.04;
    cube.position.z = 1;
   
    renderer.render(scene, camera);
    requestAnimationFrame(animate_cube);
}
var clock = new THREE.Clock();
var time = 0;
var delta = 0;
//Animate a sphere to rotate around x axis and transform along y, z axis
function animate_sphere() {
    
    delta = clock.getDelta();
    time += delta;
    sphere.rotation.x = time*4;
    sphere.position.y = 0.5*Math.abs(Math.sin(time*3))*2;
    sphere.position.z = -1+Math.cos(time)*4;
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate_sphere);
}
*/

const speed = 0.005;


// x = d*cos(angle)
// z = d*sin(angle)

const d = 100;
var alpha = 0;
var dalpha = Math.PI/1000;

function renderScene(){
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(renderScene);
    //renderer.render(sceneHUD, cameraHUD);
}

function animate_sun(){
    sun.rotation.y += speed/2;
    sun.position.y = 1;
    requestAnimationFrame(animate_sun);
}

function animate_mercury(){
    alpha += dalpha;

    mercury.rotation.y += speed/58.6;
    mercury.position.y = 1;
    mercury.position.x = (-d*0.38)*Math.cos(alpha/0.24);
    mercury.position.z = (d*0.38)*Math.sin(alpha/0.24);
    requestAnimationFrame(animate_mercury);
}

function animate_venus(){
    venus.rotation += speed/243;
    venus.position.y = 1;
    venus.position.x = (-d*0.72)*Math.cos(alpha/0.616);
    venus.position.z = (d*0.72)*Math.sin(alpha/0.616);
    requestAnimationFrame(animate_venus);
}

function animate_earth(){
    earth.rotation.y += speed;
    earth.position.y = 1;
    earth.position.x = -d*Math.cos(alpha);
    earth.position.z = d*Math.sin(alpha);
    requestAnimationFrame(animate_earth);
}

function animate_moon(){
    moon.rotation.y += speed;
    moon.position.y = earth.position.y;
    moon.position.x = earth.position.x+5*Math.sin(alpha*20);
    moon.position.z = earth.position.z-5*Math.cos(alpha*20);
    requestAnimationFrame(animate_moon);
}

function animate_mars() {
    mars.rotation.y += speed*1.03;
    mars.position.y = 1;
    mars.position.x = (-d*1.524)*Math.cos(alpha/1.9);
    mars.position.z= (d*1.524)*Math.sin(alpha/1.9);
    requestAnimationFrame(animate_mars);
}

function animate_phobos(){
    phobos.position.y = mars.position.y;
    phobos.position.x = mars.position.x+3*Math.sin(alpha*43.2);
    phobos.position.z = mars.position.z-3*Math.cos(alpha*43.2);
    requestAnimationFrame(animate_phobos);
}

function animate_deimos(){
    deimos.position.y = mars.position.y;
    deimos.position.x = mars.position.x+5*Math.sin(alpha*3.68);
    deimos.position.z = mars.position.z-5*Math.cos(alpha*3.68);
    requestAnimationFrame(animate_deimos);
}

function animate_jupiter(){
    jupiter.rotation.y += speed*0.41;
    jupiter.position.y = 1;
    jupiter.position.x = (d*5.203)*Math.sin(alpha/11.862);
    jupiter.position.z = (d*5.203)*Math.cos(alpha/11.862);
    requestAnimationFrame(animate_jupiter);
}

function animate_io(){
    io.position.y = jupiter.position.y;
    io.position.x = jupiter.position.x+30*Math.sin(alpha*9.4);
    io.position.z = jupiter.position.z-30*Math.cos(alpha*9.4);
    requestAnimationFrame(animate_io);
}

function animate_europa() {
    europa.position.y = jupiter.position.y;
    europa.position.x = jupiter.position.x+40*Math.sin(alpha*4);
    europa.position.z = jupiter.position.z-40*Math.cos(alpha*4);
    requestAnimationFrame(animate_europa);
}

function animate_ganymede() {
    ganymede.position.y = jupiter.position.y;
    ganymede.position.x = jupiter.position.x+50*Math.sin(alpha*2);
    ganymede.position.z = jupiter.position.z-50*Math.cos(alpha*2);
    requestAnimationFrame(animate_ganymede);
}

function animate_callisto() {
    callisto.position.y = jupiter.position.y;
    callisto.position.x = jupiter.position.x+70*Math.sin(alpha);
    callisto.position.z = jupiter.position.z-70*Math.cos(alpha);
    requestAnimationFrame(animate_callisto);
}

function rotate(object) {
    object.rotation.x += Math.random()/50;
    object.rotation.z += Math.random()/50;
    object.rotation.y += Math.random()/50;
}

function animate_Asteroids() {
    //Rotate all cubes
    cubes.forEach(rotate);
    //Rotate the group around the Y axis
    asteroids.rotation.y += 0.0008;
    requestAnimationFrame(animate_Asteroids);
}

function animate_saturn() {
    saturn.rotation.y += speed*0.425;
    saturn.position.y = 1;
    saturn.position.x = (d*9.5)*Math.sin(alpha/29.456);
    saturn.position.z = (d*9.5)*Math.cos(alpha/26.456);
    requestAnimationFrame(animate_saturn);
}

function animate_saturnring() {
    rings.rotation.z = 0.47;
    rings.rotation.y += speed*0.425;
    rings.position.y = saturn.position.y;
    rings.position.x = saturn.position.x;
    rings.position.z = saturn.position.z;
    controls.update();
    requestAnimationFrame(animate_saturnring);
}

function animate_titan() {
    titan.position.y = saturn.position.y;
    titan.position.x = saturn.position.x+50*Math.sin(alpha/0.6);
    titan.position.z = saturn.position.z-50*Math.cos(alpha/0.6);
    requestAnimationFrame(animate_titan);
}

function animate_rhea() {
    rhea.position.y = saturn.position.y;
    rhea.position.x = saturn.position.x+41*Math.sin(alpha/0.2);
    rhea.position.z = saturn.position.z-41*Math.cos(alpha/0.2);
    requestAnimationFrame(animate_rhea);
}

function animate_iapetus() {
    iapetus.position.y = saturn.position.y;
    iapetus.position.x = saturn.position.x+145*Math.sin(alpha/2.9);
    iapetus.position.z = saturn.position.z-145*Math.cos(alpha/2.9);
    requestAnimationFrame(animate_iapetus);
}

function animate_dione() {
    dione.position.y = saturn.position.y;
    dione.position.x = saturn.position.x+30.4*Math.sin(alpha/0.1);
    dione.position.z = saturn.position.z-30.4*Math.cos(alpha/0.1);
    requestAnimationFrame(animate_dione);
}

function animate_uranus() {
    uranus.rotation.y -= speed*0.718;
    uranus.position.y = 1;
    uranus.position.x = (d*19.2)*Math.sin(alpha/83.7);
    uranus.position.z = (d*19.2)*Math.cos(alpha/83.7);
    requestAnimationFrame(animate_uranus);
}

function animate_titania() {
    titania.position.y = uranus.position.y;
    titania.position.x = uranus.position.x+20*Math.sin(alpha*2.5);
    titania.position.z = uranus.position.z-20*Math.cos(alpha*2.5);
    requestAnimationFrame(animate_titania);
}

function animate_oberon() {
    oberon.position.y = uranus.position.y;
    oberon.position.x = uranus.position.x+25*Math.sin(alpha*4.1);
    oberon.position.z = uranus.position.z-25*Math.cos(alpha*4.1);
    requestAnimationFrame(animate_oberon);
}

function animate_umbriel() {
    umbriel.position.y = uranus.position.y;
    umbriel.position.x = uranus.position.x+15*Math.sin(alpha*13.4);
    umbriel.position.z = uranus.position.z-15*Math.cos(alpha*13.4);
    requestAnimationFrame(animate_umbriel);
}

function animate_ariel() {
    ariel.position.y = uranus.position.y;
    ariel.position.x = uranus.position.x+12*Math.sin(alpha*8.7);
    ariel.position.z = uranus.position.z-12*Math.cos(alpha*8.7);
    requestAnimationFrame(animate_ariel);
}

function animate_neptune() {
    neptune.rotation.y += speed*0.673;
    neptune.position.y = 1;
    neptune.position.x = (d*30.05)*Math.sin(alpha/163.7);
    neptune.position.z = (d*30.05)*Math.cos(alpha/163.7);
    requestAnimationFrame(animate_neptune);
}

function animate_triton() {
    triton.position.y = neptune.position.y;
    triton.position.x = neptune.position.x+15*Math.sin(alpha*-5.876);
    triton.position.z = neptune.position.z-15*Math.cos(alpha*-5.876);
    requestAnimationFrame(animate_triton);
}

function animate_pluto() {
    pluto.rotation.y += speed*0.673;
    pluto.position.y = 1;
    pluto.position.x = (d*39.48)*Math.sin(alpha/247.9);
    pluto.position.z = (d*39.48)*Math.cos(alpha/247.9);
    requestAnimationFrame(animate_pluto);
}

//reposition camera
var raycaster = new THREE.Raycaster();

//Define a selected object
var selected = false;
var selectedobj;
var selectedobjname;

//add event listener
function onDocumentMouseDown(event) {
    var mouse = new THREE.Vector2;
    
    mouse.x = (event.clientX / renderer.domElement.clientWidth)*2-1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight)*2+1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, false);

    if (intersects.length > 0) {
        //object is selected
        if ((intersects[0].object.name.includes("planet")) && (!selected)) {
            selected = true;
            selectedobj = intersects[0].object;
            selectedobjname = intersects[0].object.name;
            var pos = selectedobj.position;
            dist = calculateCameraDistance(selectedobjname);
            camera.position.set(pos.x+dist, pos.y+(dist/10), pos.z);
            controls.update();
            //window.open("https://en.wikipedia.org/wiki/Earth");
            followPlanet();
        } else {
            //console.log("No object found");
        }
    }
}

function followPlanet() {
    if (selected) {
        //dist = calculateCameraDistance(selectedobjname);
        var pos = selectedobj.position;
        //camera.position.set(pos.x+dist, pos.y+(dist/10), pos.z);
        controls.target.set(pos.x, pos.y, pos.z);
        controls.update();
        requestAnimationFrame(followPlanet);
    }
} 

function calculateCameraDistance() {
    var name = selectedobjname.replace(' planet', '');
    var dist;
    switch(name) {
        case "Sun": return dist = 150; break;
        case "Mercury": return dist = 10; break;
        case "Venus": return dist = 20; break;
        case "Earth": return dist = 20; break;
        case "Moon": return dist = 5; break;
        case "Mars": return dist = 15; break;
        case "Jupiter": return dist = 150; break;
        case "Saturn": return dist = 150; break;
        case "Uranus": return dist = 70; break;
        case "Neptune": return dist = 70; break;
        case "Pluto": return dist = 4; break;
    }
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 27) {
        controls.reset();
        selected = false;
        selectedobjname = "";
    }
}

// Build the GUI
var testSpeed = 1;
function buildGui() {
    gui = new dat.GUI();
    var solarsystemfolder = gui.addFolder('Solar System Controls');
    var planetfolder = gui.addFolder('Planet Selection');
    var selectedplanetfolder = gui.addFolder('Selected Planet');
    var params={
        test: testSpeed,
        add: function() {},

        //select planet functions
        Sun: function() {/*followPlanet("Sun");*/},
        Mercury: function() {/*followPlanet("Mercury");*/},
        Venus: function() {},
        Earth: function() {},
        Moon: function() {},
        Mars: function() {},
        Jupiter: function() {},
        Saturn: function() {},
        Uranus: function() {},
        Neptune: function() {},
        Pluto: function() {}
    }
        gui.add(params, 'test', 0, 100).onChange(function(val){
            testSpeed = val;
        });
        gui.add(params, 'add');

        // planet selection folder
        planetfolder.add(params, 'Sun');
        planetfolder.add(params, 'Mercury');
        planetfolder.add(params, 'Venus');
        planetfolder.add(params, 'Earth');
        planetfolder.add(params, 'Moon');
        planetfolder.add(params, 'Mars');
        planetfolder.add(params, 'Jupiter');
        planetfolder.add(params, 'Saturn');
        planetfolder.add(params, 'Uranus');
        planetfolder.add(params, 'Neptune');
        planetfolder.add(params, 'Pluto');

        planetfolder.open();
    }