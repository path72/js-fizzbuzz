//###################################################### 
//
// stampa primi 100 numeri
// multipli 3 > Fizz
// multipli 5 > Buzz
// multipli 3 e 5 > FizzBuzz

var N = 100, 
    n1 = 3, 
    n2 = 5,
    msg1 = 'Fizz';
    msg2 = 'Buzz';

for (var i = 1; i<=N; i++) {

  // console.log(i+' % 3 = '+(i % 3));
  var j=i, msg, flag1=false, flag2=false;
  flag1 = (i % n1 == 0) ? true : false;
  flag2 = (i % n2 == 0) ? true : false;

  if      ( flag1 && !flag2) msg = msg1;
  else if (!flag1 &&  flag2) msg = msg2;
  else if ( flag1 &&  flag2) msg = msg1 + msg2;
  else msg = i;

  console.log(j+': '+msg);

  document.getElementById('result_list').innerHTML += '<tr><td>'+j+'</td><td>'+msg+'</td><tr>';

}

//###################################################### 
//

