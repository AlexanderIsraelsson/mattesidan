console.log("hejsan");
function readValue() {
    var p_str = document.getElementById("p").value;
    var p = parseInt(p_str);
    var q_str = document.getElementById("q").value;
    var q = parseInt(q_str);
    
    
    calculate(p, q);
  }


  function calculate(p, q) {
    //Genomför beräkningen
    // -(p/2) +- Math.sqrt( Math.pow(p/2, 2) -q )
     var calc1 = -(p/2) + Math.sqrt( Math.pow(p/2, 2) -q );

     var calc2 = -(p/2) - Math.sqrt( Math.pow(p/2, 2) -q );

     document.getElementById("svar").innerHTML = "Svar 1 = " + calc1 + " Svar 2 = " + calc2;
  }


  //Pythagoras sats a^2+b^2=sqrt(c)
  function getValue() {
    var a_str = document.getElementById("a").value;
    var a = parseInt(a_str);
    var b_str = document.getElementById("b").value;
    var b = parseInt(b_str);
    
    
    compute(a, b);
  }
  
  function compute(a, b) {
    //Genomför beräkningen
     var pyth1 = Math.pow(a, 2) + Math.pow(b, 2);
     var svar1 = Math.sqrt(pyth1);
     document.getElementById("svar1").innerHTML = "Svar: C = " + svar1;
  }
  //c^2-b^2=sqrt(a) 
  function acquireValue() {
    var c_str = document.getElementById("c").value;
    var c = parseInt(c_str);
    var b2_str = document.getElementById("b2").value;
    var b2 = parseInt(b2_str);
    
    
    compute2(c, b2);
  }
  
  function compute2(c, b2) {
    //Genomför beräkningen
     var pyth2 = Math.pow(c, 2) - Math.pow(b2, 2);
     var svar2 = Math.sqrt(pyth2);
     document.getElementById("svar2").innerHTML = "Svar: A = " + svar2;
  }

  //c^2-a^2=sqrt(b)
  function gatherValue() {
    var c2_str = document.getElementById("c2").value;
    var c2 = parseInt(c2_str);
    var a2_str = document.getElementById("a2").value;
    var a2 = parseInt(a2_str);
    
    
    compute3(c2, a2);
  }
  
  function compute3(c2, a2) {
    //Genomför beräkningen
     var pyth3 = Math.pow(c2, 2) - Math.pow(a2, 2);
     var svar3 = Math.sqrt(pyth3);
     document.getElementById("svar3").innerHTML = "Svar: B = " + svar3;
  }

  //Räta linjens ekvation
  function takeValue() {
    var x1_str = document.getElementById("x1").value;
    var x1 = parseInt(x1_str);
    var x2_str = document.getElementById("x2").value;
    var x2 = parseInt(x2_str);
    var y1_str = document.getElementById("y1").value;
    var y1 = parseInt(y1_str);
    var y2_str = document.getElementById("y2").value;
    var y2 = parseInt(y2_str);
    
    
    determine(x1, x2, y1, y2);
  }
  
  function determine(x1, x2, y1, y2) {
    //Genomför beräkningen
     var k1 = (y2) - (y1);
     var k2 = (x2) - (x1);
     var answrK = (k1) / (k2);
     var answrM = y1 - answrK*x1;
     document.getElementById("answrRetLinje").innerHTML = "Svar: K = " + answrK + " Svar: M = " + answrM;
     

  }