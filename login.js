function login() {
    login_username= document.getElementById("login_input").value;
    if(login_username == "") {
        window.alert("please enter username");
      }
      else{
          localStorage.setItem("login_input", login_username);
          window.location= "chatroom.html";
      }
}