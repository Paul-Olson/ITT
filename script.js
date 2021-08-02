var d = new Date();
var n = d.getDay();



function itt(){
    
    if ( n == 2 ) {
        document.write('<h2>Yes, it is Tuesday.</h2>')
        
        
    } else  {
        document.getElementById('isIt').innerHTML = '<h3>No, it is not Tuesday</h3>';
    };
   
};