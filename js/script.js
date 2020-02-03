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

     document.getElementById("Svar").innerHTML = "Svar 1 = " + calc1 + " Svar 2 = " + calc2;
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
  //c^2-b^2=sqrt(a) //här är du atm
  function acquireValue() {
    var c_str = document.getElementById("a").value;
    var c = parseInt(a_str);
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