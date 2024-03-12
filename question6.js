const PaymentStatus = (Status)=>{
    switch(Status){
        case 'processing' : console.log("first"); break; 
        case 'paid' : console.log("second"); break; 
        case 'new' : console.log("third"); break; 
        default : console.log("fourth"); 
    }
}

PaymentStatus('new');
