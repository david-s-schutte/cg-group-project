/* global THREE, scene, renderer, camera */

const group = new THREE.Group();
var n = Math.random() * 150;
var cubes = [];

//Create a cube using variable w, h, d
function createCube(w, h, d, color) {
    var material = new THREE.MeshPhongMaterial();
    material.color = new THREE.Color(color);
    material.wireframe = false;
    var geometry_cube = new THREE.BoxGeometry(w, h, d);
    var square = new THREE.Mesh(geometry_cube, material);
    square.castShadow = true;
    return square;
}

//Create a sphere using variable radius, vertical lines, horizontal lines
function createSphere(radius, hlines, vlines, color) {
    var material = new THREE.MeshPhongMaterial();
    material.color = new THREE.Color(color);
    material.wireframe = false;
    material.shininess = 100;
    var geometry_sphere = new THREE.SphereGeometry(radius, hlines, vlines);
    var ball = new THREE.Mesh(geometry_sphere, material);
    ball.castShadow = true;
    return ball;
}

//Character Materials
var shirt_material = new THREE.MeshNormalMaterial();
shirt_material.color = new THREE.Color(1, 0, 0);
shirt_material.flatShading = true;
var pant_material = new THREE.MeshToonMaterial();
pant_material.color = new THREE.Color(0.37, 0.37, 0.37);
pant_material.flatShading = true;
var body_material = new THREE.MeshToonMaterial();
body_material.color = new THREE.Color(1, 0.79, 0.64);
var nose_material = new THREE.MeshToonMaterial();
nose_material.color = new THREE.Color(1, 0.41, 0.70);
var glove_material = new THREE.MeshToonMaterial();
glove_material.color = new THREE.Color(1, 1, 1);
var eye_material = new THREE.MeshToonMaterial();
eye_material.color = new THREE.Color(0, 0, 1);
var mustache_material = new THREE.MeshPhongMaterial();
mustache_material.color = new THREE.Color(0.82, 0.41, 0.12);

//Character Geometries
var torso_geo = new THREE.SphereGeometry(5, 5, 5, 0, 3.1);
var leg_geo = new THREE.CylinderGeometry(0.5, 0.5, 7);
var foot_geo = new THREE.BoxGeometry(3, 1, 1);
var arm_geo = new THREE.CylinderGeometry(1, 1, 4);
var hand_geo = new THREE.SphereGeometry(1.15, 16, 16);
var head_geo = new THREE.SphereGeometry(2, 8, 8);
var nose_geo = new THREE.TetrahedronGeometry(0.5, 0);
var eye_geo = new THREE.SphereGeometry(0.5, 8, 8);
var mustache_geo = new THREE.ConeGeometry(1, 3, 7);

//Creates Eggman geometry by calling different methods and adding them to a group
function createEggman()
{
    var eggman = new THREE.Group();

    var head = createHead();
    var torso = createTorso();
    var arms = createArms();
    var legs = createLegs();

    eggman.add(head);
    eggman.add(torso);
    eggman.add(arms);
    eggman.add(legs);

    return eggman;
}

//Generates a torso for the Eggman geometry
function createTorso()
{
    var torso = new THREE.Group();

    var toptorso = new THREE.Mesh(torso_geo, shirt_material);
    toptorso.position.y = -3;
    toptorso.rotation.x = 1.5;
    toptorso.rotation.y = 3.15;

    var bottomtorso = new THREE.Mesh(torso_geo, pant_material);
    bottomtorso.position.y = -2.8;
    bottomtorso.rotation.x = 1.5;
    bottomtorso.rotation.y = 0;

    torso.add(toptorso);
    torso.add(bottomtorso);

    return torso;
}

//Generates a head for the Eggman geometry
function createHead()
{
    var head = new THREE.Group();

    var skull = new THREE.Mesh(head_geo, body_material);
    skull.position.y = 3;

    var nose = new THREE.Mesh(nose_geo, nose_material);
    nose.position.y = 2.5
    nose.position.z = 2;
    nose.rotation.z = 0.8;

    var leye = new THREE.Mesh(eye_geo, eye_material);
    leye.position.y = 3
    leye.position.x = -0.6;
    leye.position.z = 1.8;

    var reye = new THREE.Mesh(eye_geo, eye_material);
    reye.position.y = 3;
    reye.position.x = 0.6;
    reye.position.z = 1.8;

    var lmustache = new THREE.Mesh(mustache_geo, mustache_material);
    lmustache.position.y = 2.3;
    lmustache.position.x = -1.4
    lmustache.position.z = 2;
    lmustache.rotation.z = -1.5;

    var rmustache = new THREE.Mesh(mustache_geo, mustache_material);
    rmustache.position.y = 2.3;
    rmustache.position.x = 1.4
    rmustache.position.z = 2;
    rmustache.rotation.z = 1.5;
    rmustache.rotation.x = 6;

    head.add(skull);
    head.add(leye);
    head.add(reye);
    head.add(nose);
    head.add(lmustache);
    head.add(rmustache);

    return head;
}

//Generates arms for the Eggman geometry
function createArms()
{
    var arms = new THREE.Group();

    //Creating the left arm
    var left_arm = new THREE.Group();

    var larm = new THREE.Mesh(arm_geo, shirt_material);
    larm.position.y = -0.5;
    larm.position.x = -5.5;
    larm.rotation.z = 1.5;

    var lhand = new THREE.Mesh(hand_geo, glove_material);
    lhand.position.y = -0.35;
    lhand.position.x = -8.3;

    left_arm.add(larm);
    left_arm.add(lhand);

    //Creating the right arm
    var right_arm = new THREE.Group();

    var rarm = new THREE.Mesh(arm_geo, shirt_material);
    rarm.position.y = -0.5;
    rarm.position.x = 5.5;
    rarm.rotation.z = 1.6;

    var rhand = new THREE.Mesh(hand_geo, glove_material);
    rhand.position.y = -0.35;
    rhand.position.x = 8.3;

    right_arm.add(rarm);
    right_arm.add(rhand);

    arms.add(left_arm);
    arms.add(right_arm);

    return arms;
}

//Generates legs for the Eggman geometry
function createLegs()
{
    var legs = new THREE.Group

    //Creating the left leg
    var left_leg = new THREE.Group();

    var lleg = new THREE.Mesh(leg_geo, pant_material);
    lleg.position.y = -10;
    lleg.position.x = -3;
    lleg.rotation.z = -0.3;

    var lfoot = new THREE.Mesh(foot_geo, pant_material);
    lfoot.position.x = -4;
    lfoot.position.y = -13;
    lfoot.position.z = 1;
    lfoot.rotation.y = 1.4;

    left_leg.add(lleg);
    left_leg.add(lfoot);

    //Creating the right leg
    var right_leg = new THREE.Group();

    var rleg = new THREE.Mesh(leg_geo, pant_material);
    rleg.position.y = -10;
    rleg.position.x = 3;
    rleg.rotation.z = 0.3;

    var rfoot = new THREE.Mesh(foot_geo, pant_material);
    rfoot.position.x = 4;
    rfoot.position.y = -13;
    rfoot.position.z = 1;
    rfoot.rotation.y = 2;

    right_leg.add(rleg);
    right_leg.add(rfoot);

    legs.add(left_leg);
    legs.add(right_leg);

    return legs;
}

//Create the shapes and add them to a group
function createShapes() {
    for (let i = 0; i < n; i++) {
        var rot2 = new THREE.Matrix4();
        var sca = new THREE.Matrix4();
        var rot = new THREE.Matrix4();
        var tra = new THREE.Matrix4();
        var combined = new THREE.Matrix4();

        sca.makeScale(1.5, 1.5, 1.5);
        rot2.makeRotationZ(i * (Math.PI / n));
        tra.makeTranslation(10, 6, 0);
        rot.makeRotationY(i * (2 * Math.PI / n));
        combined.multiply(rot);
        combined.multiply(tra);
        combined.multiply(rot2);
        combined.multiply(sca);
        var color = new THREE.Color(0xffe2ab);
        cubes[i] = createCube(1, 1, 1, color);
        cubes[i].applyMatrix(combined);
        cubes[i].geometry.computeBoundingBox();
        cubes[i].castShadow = true;
        group.add(cubes[i]);
    }
    var sphere_color = new THREE.Color(0xcc9966);
    var sphere = createSphere(5, 24, 24, sphere_color);
    //var eggman = createEggman();
    sphere.castShadow = true;
    sphere.position.y = 6;
    //addSpotlight over the sphere object
    //addSpotlight(sphere);
    group.add(sphere);
}


//Lab 5 - Add spotlight for an object
function addSpotlight(object)
{
    var spotlight = new THREE.SpotLight(new THREE.Color(1, 1, 1), 0.5);
    spotlight.position.y = 30;
    spotlight.angle = Math.PI/8;
    spotlight.penumbra = 0.3;
    spotlight.castShadow = true;
    spotlight.target = object;
    group.add(spotlight);
    var helper = new THREE.SpotLightHelper(spotlight);
    group.add(helper);
}

//Add all shapes to the scene
function addShapes() {
    scene.add(group);
    scene.add(camera);
    scene.add(ambientlight);
}