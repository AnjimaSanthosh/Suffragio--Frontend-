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
    var voterDB = firebase.database().ref("voter_reg");
    
    document.getElementById("voterform").addEventListener("submit", submitForm);
    
    function submitForm(e) {
      e.preventDefault();
    
      var firstname = getElementVal("vfirstName");
      var lastName = getElementVal("vlastName");
      var birthdayDate = getElementVal("vbirthdayDate");
      var emailAddress = getElementVal("vemailAddress");
      var phoneNumber = getElementVal("vphoneNumber");
      var electionid = getElementVal("electionid");
      var new_voter_password = getElementVal("new_voter_password");
  
    
      saveMessages(firstname, lastName, birthdayDate, emailAddress,phoneNumber,electionid,new_voter_password);
    
      //   enable alert
      //document.querySelector(".alert").style.display = "block";
    
      //   remove the alert
      //setTimeout(() => {
      //  document.querySelector(".alert").style.display = "none";
      //}, 3000);
    
      //   reset the form
      //document.getElementById("sellForm").reset();
    }
    
    const saveMessages = (firstname, lastName, birthdayDate, emailAddress,phoneNumber,electionid,new_voter_password) => {
      var newvoterForm = voterDB.push();
    
      newvoterForm.set({
        new_firstname : firstname,
        new_lastname : lastName,
        birthdayDate : birthdayDate ,
        emailAddress : emailAddress,
        phoneNumber : phoneNumber,
        electionid : electionid,
        new_voter_password : new_voter_password,
        
      });
    };
    
    const getElementVal = (id) => {
      return document.getElementById(id).value;
    };