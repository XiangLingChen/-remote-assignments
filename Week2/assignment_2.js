function calculate(args){ 
    let result; 
    if(args.op==="+"){ 
        result=args.n1+args.n2; 
    } else if(args.op==="-"){ 
        result=args.n1-args.n2; }
      else{ 
        result="Not supported"; 
    } 
        return result; 
        
    
    } 
   

    calculate({n1:3, n2:4,op:"+"}); 
    document.write(calculate({n1:3, n2:4,op:"+"}));

    calculate({n1:8, n2:2,op:"-"}); 
    document.write(calculate({n1:8, n2:2,op:"-"}));

    calculate({n1:3, n2:3,op:"*"}); 
    document.write(calculate({n1:3, n2:3,op:"*"}));
