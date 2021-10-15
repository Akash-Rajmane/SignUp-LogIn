function registerUser(){

  (function (){
    if( document.getElementById('uname').value==='' || document.getElementById('pw').value==='' ||
    document.getElementById('mail1').value==='' || document.getElementById('mail2').value==='' ||
    document.getElementById('mob').value==='' || document.getElementById('mob').value===''){
      alert('please fill all the fields');
    }
    else if( document.getElementById('mail1').value!==document.getElementById('mail2').value ){
      alert('Please enter the same email');
    }
    else{
      localStorage.setItem("mail1", document.getElementById('mail1').value);
      localStorage.setItem("mail2", document.getElementById('mail2').value);
      localStorage.setItem("username1", document.getElementById('uname').value);
      localStorage.setItem("password1", document.getElementById('pw').value);
      localStorage.setItem("dob", document.getElementById('dob').value);
      localStorage.setItem("mob", document.getElementById('mob').value);
      window.location.href = "file:///F:/Front%20End/HTML%20Practice/mock/logIn.html";
    }
  })();
  
}

function logInUser(){
  if( document.getElementById('user').value===localStorage.getItem("username1") &&
  document.getElementById('password').value===localStorage.getItem("password1") ){
    window.location.href = "https://www.interviewbit.com/practice/";
  }
  else{
    alert('Please enter a valid username or password');
  }
}