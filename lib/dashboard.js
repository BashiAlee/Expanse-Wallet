const electron = require('electron')
var Web3 = require('web3');
var web3 ;

exports.watchBalance = () =>  {
    var coinbase ;
    // Check web3 is responding 
    if(!web3.isConnected()) {
        // coonect to web3
        conenctWeb3.call();
    }
    console.log(web3,web3.personal);
//  var res = new web3.personal.newAccount("passphrase");

    coinbase = web3.eth.coinbase;
    console.log("--Coin base--");
    console.log(coinbase);
    var balance = web3.eth.getBalance(coinbase);
    console.log(balance);
    
/*  web3.eth.getBalance(coinbase).then(originalBalance => {
    
        document.getElementById('coinbase').innerText = 'coinbase: ' + coinbase;
        document.getElementById('original').innerText = ' original balance: ' + originalBalance + '    watching...';
        web3.eth.filter('latest').watch(function() {
        var currentBalance = web3.eth.getBalance(coinbase).toNumber();
        document.getElementById("current").innerText = 'current: ' + currentBalance;
        document.getElementById("diff").innerText = 'diff:    ' + (currentBalance - originalBalance);
    });
    }) */     
  }

  const conenctWeb3 = () => {
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9656"));

    if(!web3.isConnected()) {           
        console.log("Error: Connecting Web3");
        return false;
    } else {          
        console.log("Web3 is Connected");
        return true;
    }
    
  }


