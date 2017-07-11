function bankAcc(accName,accBal,accNo){
	this.accName=accName,
	this.accBal=accBal
	var accNo=accNo
	this.withdraw=function(amt){
		return(this.accBal=this.accBal-amt);
	},
	this.deposit=function(amt){
		return(this.accBal=this.accBal+amt);
	},
	this.getBal=function(amt){
		return(this.accBal);
	},
	this.getNo=function(amt){
		return(this.accNo);
	}
};
var b=new bankAcc("vikrant",500,123);
//document.write(b.withdraw(100));
//document.write(b.deposit(100));
document.write(b.getBal());