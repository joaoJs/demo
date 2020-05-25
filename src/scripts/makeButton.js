const makeButton = (className, text = 'click me') => {
  const btn = document.createElement("button");
  btn.innerHTML = text;

  btn.className = className
  
  return btn;
};

export default makeButton;