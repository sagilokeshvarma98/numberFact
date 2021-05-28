
$(document).ready(
    function(){
      $('#numberfact').click(function(){
        let number1 = $('#itsnumber').val();
        if(number1){
          $.get("http://numbersapi.com/"+number1,function(data){
            $("#result").text(data);
            console.log(data);
        }) 
        }  
        else{
          alert("Please enter a number")
        }   
        }
      )
      $('#mathfact').click(function(){
        let number2 = $('#itsnumber').val();
        if(number2){
          $.get("http://numbersapi.com/"+number2+"/math",function(data){
            $("#result").text(data);
        })
        }  
        else{
          alert("Please enter a number")
        } 
        }
      )
      $('#datefact').click(function(){
        let day = $('#itsday').val();
        let month = $('#itsmonth').val();
        if(day && month && day<32 && month<13){
          $.get("http://numbersapi.com/"+day+"/"+month+"/date",function(data){
            $("#result").text(data);
        })  
        }
        else{
          alert("Please enter correct day and month")
        }        
     
        }
      )
    }
    )