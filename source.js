const insert = (num) => (document.forms.answer.value += num);

const equal = () => {
  let eql = document.forms.answer.value;
  if (eql) {
    document.forms.answer.value = eval(eql);
  }
};

const clean = () => (document.forms.answer.value = '');

const back = () => {
  let bc = document.forms.answer.value;
  document.forms.answer.value = bc.substring(0, bc.length - 1);
};
