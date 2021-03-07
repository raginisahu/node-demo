	exports.submitForm = function(req, res) {
    console.log("Request param:",req.body);
    let a1 = req.body.a1.split(','); // getting body data 
    let a2 = req.body.a2.split(',');
    let a3 = req.body.a3.split(',');
    let combinaton = []
      a1.forEach(function(e1) {
        a2.forEach(function(e2){
            a3.forEach(function(e3){
                let pair = `${e1},${e2},${e3}` // pushing pair into array 
                if(!combinaton.includes(pair))
                combinaton.push(pair)
            })
         })  
      });
      const r1 = "possible Pairs can bar </br> "+""+combinaton.toString();
      res.send(combinaton)  
    };
    
    exports.calFabSeries = function(req, res) {
        let number = req.body.number;
        var i;
        var fib = []; // Initialize array!

        fib[0] = 0;
        fib[1] = 1;
        for (i = 2; i <= number; i++) {
        // Next fibonacci number = previous + one before previous
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
        }
        res.send(fib.toString())
    }