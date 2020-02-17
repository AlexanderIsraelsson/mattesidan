function sum(a, b) {
    return a+b;
}

function calculate(p, q) {
    //Genomför beräkningen
    // -(p/2) +- Math.sqrt( Math.pow(p/2, 2) -q )
     var calc1 = -(p/2) + Math.sqrt( Math.pow(p/2, 2) -q );

     var calc2 = -(p/2) - Math.sqrt( Math.pow(p/2, 2) -q );

     return "Svar 1 = " + calc1 + " Svar 2 = " + calc2;
  }

  function compute(a, b) {
    //Genomför beräkningen
     var pyth1 = Math.pow(a, 2) + Math.pow(b, 2);
     var svar1 = Math.sqrt(pyth1);
     return "Svar: C = " + svar1;
  }

  function compute2(c, b2) {
    //Genomför beräkningen
     var pyth2 = Math.pow(c, 2) - Math.pow(b2, 2);
     var svar2 = Math.sqrt(pyth2);
     return "Svar: A = " + svar2;
  }

  function compute3(c2, a2) {
    //Genomför beräkningen
     var pyth3 = Math.pow(c2, 2) - Math.pow(a2, 2);
     var svar3 = Math.sqrt(pyth3);
     return "Svar: B = " + svar3;
  }

//   function determine(x1, x2, y1, y2) {
//     //Genomför beräkningen
//      var k1 = (y2) - (y1);
//      var k2 = (x2) - (x1);
//      var answrK = (k1) / (k2);
//      var answrM = 
//      return "Svar: K = " + answrK;
//      return "Svar: M = " + answrM
//   }

module.exports = { sum, calculate, compute, compute2, compute3 };