
document.getElementById('clear').onclick = function () {
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
  document.getElementById('steps').innerHTML = "";
  document.getElementById('result').innerHTML = "";
};


document.getElementById('perform_action').onclick = function () {
  var factor1 = document.getElementById('num1').value;
  var factor2 = document.getElementById('num2').value;
  var foo = factor1;
  var bar = factor2;
  var col1 = new Array();
  var col2 = new Array();
  var total = 0;
  var steps = "";
  col1.push(foo);
  col2.push(bar);
  while(bar != 1 && bar != -1)
  {
    foo = parseInt(foo * 2);
    bar = parseInt(bar / 2);
    col1.push(foo);
    col2.push(bar);
  }


  for(var i = 0; i < col1.length; i++)
  {
    if(parseInt(col2[i]) % 2 != 0) {
      total = parseInt(total) + parseInt(col1[i]);
    } else {
      col1[i] = '<strike>' + col1[i] + '</strike>';
      col2[i] = '<strike>' + col2[i] + '</strike>';
    }
  }
  for(var i = 0; i < col1.length; i++)  {
    steps = steps + col1[i] + ", " + col2[i] + "<br>";
  }
  if(factor1 < 0 && factor2 < 0)  {
    total = Math.abs(total);
  } else if(factor2 < 0) {
    total = total * (-1);
  }

  document.getElementById('steps').innerHTML = steps;
  document.getElementById('result').innerHTML = "<br>" + col1[0] + " * " + col2[0] + " = " + total;
};
