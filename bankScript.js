class Bank {
    accountcreate() {
        let cust_name = customername.value;
        let ac_no = accountnumber.value;
        let u_name = username.value;
        let pwd = password.value;
        let bal= minimumbalance.value;
        
    }
    static getAccountDetails() {
        let users = {
            1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
            1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
            1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },
            1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000 }

        }
        return users
    }
    static login() {
        let ac_no = acno.value;
        let u_name = uname.value;
        let password = pwd.value;

        let userdat = Bank.getAccountDetails()
        if (ac_no in userdat) {
            //username==userdata[username] password==userdata[password]
            if (u_name == userdat[ac_no].username & password == userdat[ac_no].password) {
                alert("Login Success")
                window.location.href = "transaction.html"
            }
            else {
                alert("invalid credentials")
            }
        }
        else {
            alert("Invalid")
        }

    }
    static withdrawal() {
        let cust_name = customername.value;
        let ac_no = accountnumber.value;
        let amt = Amt.value;
        let userdat = Bank.getAccountDetails()

        if (ac_no in userdat) {
            if (cust_name == userdat[ac_no].username) {
                if (amt <= userdat[ac_no].balance) {
                    userdat[ac_no].balance = (userdat[ac_no].balance) - amt;
                    displayArea.innerHTML = `${amt} RS withdrawn successfully. Current balance is ${userdat[ac_no].balance}`

                }
                else {
                    displayArea.innerHTML = "Insufficient Funds"
                }
            }
            else {
                alert("Check UserName")
            }
        }
        else {
            alert("Check your Account Number")
        }

    }
    static deposit() {
        let cust_name = customername.value;
        let ac_no = accountnumber.value;
        let amt = Amt.value;
        let userdat = Bank.getAccountDetails()

        if (ac_no in userdat) {
            if (cust_name == userdat[ac_no].username) {

                userdat[ac_no].balance = parseFloat(userdat[ac_no].balance + amt);
                displayArea.innerHTML = `${amt} RS Deposited successfully. Current balance is ${userdat[ac_no].balance}`


            }
            else {
                alert("Check UserName")
            }
        }
        else {
            alert("Check your Account Number")
        }
    }
    static check_bal() {
        let ac_no = acno.value;
        let userdata = Bank.getAccountDetails()

        if (ac_no in userdata) {
            outp.value = `Balance is ${userdata[ac_no].balance}`
        }
        else {
            alert("Account Number does not Exist")
        }
    }
}

// key,value
// localStorage.setItem("username","ajay")