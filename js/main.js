//###################################################### 
//
// stampa primi 100 numeri
// multipli 3 > Fizz
// multipli 5 > Buzz
// multipli 3 e 5 > FizzBuzz

// form sources
var totalNumbersForm = document.getElementById('total_numbers');
var factor1Form      = document.getElementById('factor_1');
var factor2Form      = document.getElementById('factor_2');
var msg1Form         = document.getElementById('msg_1');
var msg2Form         = document.getElementById('msg_2');

// info display hooks
var msgHtml           = document.getElementById('msg');
var checkMsgHtml      = document.getElementById('check_msg');
var displayResultHtml = document.getElementById('display_result');
var resultListHtml    = document.getElementById('result_list');

// button hooks
var checkBtn     = document.getElementById('check_btn');
var eraseBtn     = document.getElementById('erase_btn');
var resumeBtn    = document.getElementById('resume_btn');

checkBtn.addEventListener('click', 
  function() { 

    // form data retrieving
    var N = totalNumbersForm.value,
        n1 = factor1Form.value,
        n2 = factor2Form.value,
        msg1 = msg1Form.value,
        msg2 = msg2Form.value;

    // consistency
    if (N=='' || n1=='' || n2=='' || msg=='' || msg2=='' || isNaN(N) || isNaN(n1)|| isNaN(n2)) {
      msgHtml.className = 'show';
      checkMsgHtml.innerHTML = 
          'Compila bene tutti i campi:<br>'+
          '<strong>Numeri totali</strong>,<br>'+
          '<strong>Divisore 1</strong> e <strong>Divisore 2</strong><br>'+
          'devono essere dei numeri!';
    } else {

      for (var i = 1; i<=N; i++) {
  
        var j=i, msg, flag1, flag2;
        flag1 = (i % n1 == 0) ? true : false;
        flag2 = (i % n2 == 0) ? true : false;
  
        if      ( flag1 && !flag2) msg = msg1;
        else if (!flag1 &&  flag2) msg = msg2;
        else if ( flag1 &&  flag2) msg = msg1 + msg2;
        else                       msg = i;
  
        console.log(j+': '+msg);
        resultListHtml.innerHTML += '<tr><td>'+j+'</td><td>'+msg+'</td><tr>';
  
        // view
        checkMsgHtml.innerHTML = 
              'Lista di <strong>'+N+' numeri</strong>:<br>'+
              'I multipli di <strong>'+n1+'</strong>: etichetta <strong>'+msg1+'</strong><br>'+
              'I multipli di <strong>'+n2+'</strong>: etichetta <strong>'+msg2+'</strong><br>'+
              'I multipli di <strong>'+n1+'</strong> e <strong>'+n2+'</strong>: etichetta <strong>'+msg1+msg2+'</strong><br>';
        msgHtml.className = 'show';
        displayResultHtml.className = 'show';

      }
    }
  }
);

eraseBtn.addEventListener('click', 
  function() { 
    
    msgHtml.className = 'hide';
    checkMsgHtml.innerHTML = '';

    resultListHtml.innerHTML = '';
    displayResultHtml.className = 'hide';

    totalNumbersForm.value = '';
    factor1Form.value = '';
    factor2Form.value = '';
    msg1Form.value = '';
    msg2Form.value = '';

  }
);

resumeBtn.addEventListener('click', 
  function() { 
    
    msgHtml.className = 'hide';
    checkMsgHtml.innerHTML = '';

    resultListHtml.innerHTML = '';
    displayResultHtml.className = 'hide';
    
  }
);
//###################################################### 
//

