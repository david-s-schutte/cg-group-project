/* global THREE, scene, renderer, camera */

//Create a cube using variable w, h, d
function createCube(w, h, d, color) {
    var material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(color);
    //material.wireframe = true;
    var geometry_cube = new THREE.BoxGeometry(w, h, d);
    var cube = new THREE.Mesh(geometry_cube, material);
    return cube;
}

//Create a sphere using variable radius, vertical lines, horizontal lines
function createSphere(radius, hlines, vlines, color) {
    var material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(color);
    material.wireframe = true;
    var geometry_sphere = new THREE.SphereGeometry(radius, hlines, vlines);
    var sphere = new THREE.Mesh(geometry_sphere, material);
    return sphere;
}

//var cube = createCube(2, 2, 2, 0, 1, 0);
//var sphere = createSphere(1, 20, 20, 1, 0, 1);

var pluto = createSphere(0.465,8.184,8.184,0x9ca6b7);
var triton = createSphere(0.526,9.2,9.2,0x828f88);
var neptune = createSphere(9.7,170,170,0x4b70dd);
var ariel = createSphere(0.224,3.956,3.956,0x8e7c72);
var umbriel = createSphere(0.227,3.99,3.99,0x7b7b7b);
var oberon = createSphere(0.296,5.169,5.169,0xc0a99f);
var titania = createSphere(0.306,5.39,5.39,0xd2c6b9);
var uranus = createSphere(10,176,176,0x4FD0E7);
var dione = createSphere(0.216,3.8,3.5,0x7d7d7d);
var iapetus = createSphere(0.284,4.99,4.99,0x493729);
var rhea = createSphere(0.297,5.227,5.227,0xb8b8b8);
var titan = createSphere(1.07,17.464,17.464,0xd7c461);
var saturn = createSphere(22.74,400,400,0xf1b954)
var callisto = createSphere(0.945,16.6,16.6,0x7c6d60)
var ganymede = createSphere(1.03,18.16,18.16,0xb4b1b2)
var europa = createSphere(0.61,10.77,10.77,0xac966f)
var io = createSphere(0.7,12.57,12.57,0xcabf55)
var jupiter = createSphere(27.2,482,482, 0xc99039);
var deimos = createSphere(0.002,0.035,0.035,0x2596be);
var phobos = createSphere(0.004,0.07,0.07,0x2596be);
var mars = createSphere(1.33,23.43,23.43,0xc1440e);
var earth = createSphere(2.5,44,44,0x6b93d6);
var moon = createSphere(0.675,11.88,11.88,0xFEFCD7);
var venus = createSphere(2.5,44,44,0x8b7d82);
var mercury = createSphere(1,32,32,0x747b81)
var sun = createSphere(30,55,55,0xFDB813);

//asteroids
var n = 300;
var cubes = [];
var asteroids = new THREE.Group();

//saturn's ring
var r = 40;
var ring = [];
var rings = new THREE.Group();

function createAsteroids(){
    
    for(let i=0; i < n; i++)
    {
        var rot2 = new THREE.Matrix4();
        var sca = new THREE.Matrix4();
        var rot = new THREE.Matrix4();
        var tra = new THREE.Matrix4();
        var combined = new THREE.Matrix4();

        sca.makeScale(0.5, 3, 1.5);
        rot2.makeRotationZ(i * (Math.PI/n));
        tra.makeTranslation(270, ((Math.random()*15)-(Math.random()*15)), (Math.random()*200));
        rot.makeRotationY(i * (2*Math.PI/n));

        combined.multiply(rot);
        combined.multiply(tra);
        combined.multiply(rot2);
        combined.multiply(sca);
        
        cubes[i] = createSphere(1, 3, 3, 0x594433)
        cubes[i].applyMatrix(combined);
        asteroids.add(cubes[i]);
    }
}

function createsaturnring(){
    
    for(let b=0; b < r; b++)
    {
        var rot2 = new THREE.Matrix4();
        var sca = new THREE.Matrix4();
        var rot = new THREE.Matrix4();
        var tra = new THREE.Matrix4();
        var combined = new THREE.Matrix4();

        sca.makeScale(2, 0.1, 4);
        //rot2.makeRotationX(b * (Math.PI/r));
        tra.makeTranslation(30, 0, 0);
        rot.makeRotationY(b * (2*Math.PI/r));

        combined.multiply(rot);
        combined.multiply(tra);
        combined.multiply(rot2);
        combined.multiply(sca);
        
        ring[b] = createCube(2, 1, 1.25, 0xD8AE6D)
        ring[b].applyMatrix(combined);
        rings.add(ring[b]);
    }
}

function addShapes() {
    scene.add(pluto);
    scene.add(triton);
    scene.add(neptune);
    scene.add(ariel);
    scene.add(umbriel);
    scene.add(oberon);
    scene.add(titania);
    scene.add(uranus);
    scene.add(dione);
    scene.add(iapetus);
    scene.add(rhea);
    scene.add(titan);
    scene.add(rings);
    scene.add(saturn);
    scene.add(callisto);
    scene.add(ganymede);
    scene.add(europa);
    scene.add(io);
    scene.add(jupiter);
    scene.add(asteroids);
    scene.add(deimos);
    scene.add(phobos);
    scene.add(mars);
    scene.add(earth);
    scene.add(moon);
    scene.add(venus);
    scene.add(mercury);
    scene.add(sun)

}