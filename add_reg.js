const firebaseConfig = {
    apiKey: "AIzaSyDlEPsim5lBwatlxSVfTIsoZ_dSjLSxAPA",
    authDomain: "suffragio-7cb77.firebaseapp.com",
    databaseURL: "https://suffragio-7cb77-default-rtdb.firebaseio.com",
    projectId: "suffragio-7cb77",
    storageBucket: "suffragio-7cb77.appspot.com",
    messagingSenderId: "55330073671",
    appId: "1:55330073671:web:ee7094654a1fdc88e19562"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
    var adminDB = firebase.database().ref("admin_reg");
    
    document.getElementById("adminform").addEventListener("submit", submitForm);
    
    function submitForm(e) {
      e.preventDefault();
    
      var mail = getElementVal("new_admin_mail");
      var password = getElementVal("new_admin_password");
      var insttype = getElementVal("inst_type");
      var instname = getElementVal("inst_name");
      
  
    
      saveMessages(mail, password, insttype, instname);
    
      //   enable alert
      //document.querySelector(".alert").style.display = "block";
    
      //   remove the alert
      //setTimeout(() => {
      //  document.querySelector(".alert").style.display = "none";
      //}, 3000);
    
      //   reset the form
      //document.getElementById("sellForm").reset();
    }
    
    const saveMessages = (mail, password, insttype, instname) => {
      var newadminForm = adminDB.push();
    
      newadminForm.set({
        new_admin_mail : mail,
        new_admin_password : password,
        inst_type : insttype ,
        inst_name : instname,
        
      });
    };
    
    const getElementVal = (id) => {
      return document.getElementById(id).value;
    };