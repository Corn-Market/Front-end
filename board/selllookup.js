const showValue = (target) => {
    const value = target.value;
    
    document.querySelector("#sortchoice").innerHTML = `${value} 로 조회하기`;
  }