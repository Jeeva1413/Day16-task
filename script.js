const span=document.getElementById("span"); 

setTimeout(()=>{
    span.innerText="10";
    
    setTimeout(()=>{
        span.innerText="9";
        
        setTimeout(()=>{
            span.innerText="8";
            
            setTimeout(()=>{
                span.innerText="7";
                
                setTimeout(()=>{
                    span.innerText="6";

                    setTimeout(()=>{
                        span.innerText="5";

                        setTimeout(()=>{
                            span.innerText="4";

                            setTimeout(()=>{
                                span.innerText="3";

                                setTimeout(()=>{
                                    span.innerText="2";

                                    setTimeout(()=>{
                                        span.innerText="1";

                                        setTimeout(()=> {
                                           span.innerText="Happy Independence Day";

                                        },1000)

                                    },1000)

                                },1000)
                            },1000)
                        },1000)

                    },1000)

                },1000)

            },1000)

        },1000)

    },1000)

},1000);