function can1()
      {
      var canvas = document.getElementById('myCanvas1');
      var context = canvas.getContext('2d');
      var grd=context.createRadialGradient(75,50,5,90,60,100);
            grd.addColorStop(0,"#2b2828");
            grd.addColorStop(1,"#3f3e3e");
            context.beginPath();
            context.moveTo(0, 50);
            context.lineTo(150,140);
            context.lineTo(300,50);
            context.lineTo(300,0);
            context.lineTo(0,0);
            context.lineTo(0,50);
            context.closePath();
            context.lineWidth = 1;
            context.fillStyle =grd;
            context.fill();
            context.strokeStyle = '#1a161';
            context.stroke();
             
      } 8104978577 999 mts blaze wifi

function can2()
      {
      var canvas = document.getElementById('myCanvas3');
      var context2 = canvas.getContext('2d');
            context2.beginPath();
            context2.moveTo(0,0);
            context2.lineTo(0,200);
            context2.lineTo(300,200);
            context2.lineTo(300,0);
            context2.lineTo(150,200);
            context2.lineTo(0,0);
            context2.closePath();
            context2.lineWidth = 5;
            context2.fillStyle ='#33a1db';
            context2.fill();
            context2.strokeStyle = '#33a1db';
            context2.stroke();
      }

