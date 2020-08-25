
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
     
var engine = Engine.create();

window.onload=function(){

var boundaries;
var things;
 
var render = Render.create({
                element: document.body,
                engine: engine,
                options: {
                    width: 400,
                    height: 400,
                    wireframes: false
                }
             });

var ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });
var leftWall = Bodies.rectangle(10, 200, 810, 60, { isStatic: true, angle: 1.57});
var rightWall = Bodies.rectangle(380, 200, 810, 60, { isStatic: true, angle: 1.57});
var ceiling = Bodies.rectangle(400, 10, 810, 60, { isStatic: true });

boundaries = [ground, leftWall, rightWall, ceiling]
   
var boxA = Bodies.rectangle(140, 200, 20, 20);
var ballA = Bodies.circle(280, 100, 10);
var ballB = Bodies.circle(120, 10, 10);
var chicken = Bodies.rectangle(140, 200, 20, 20,
	{isStatic: true, isSensor: true, render: {
		sprite: {
			texture: "chicken.png",
			
						xScale: 0.215,
						yScale: 0.215,
		}
	}
	});
things = [boxA, ballA, ballB, chicken];

World.add(engine.world, boundaries);
World.add(engine.world, things);
 
Engine.run(engine);
Render.run(render);
}

window.onclick=function(){
		setInterval(function(){
			var newBall = Bodies.circle(280, 100, 10, {
				render: {
					strokeStyle: "#ffffff",
					sprite: {
						texture: "ball.png",
						xScale: 0.215,
						yScale: 0.215,
						}
					},
				restitution: 1.2,
				}
				);
			World.add(engine.world, newBall);
		}, 1000);
	}