'use strict';

function printReceipt(inputs) {
	
	var allItem=loadAllItems();
	var count=new Array(0,0,0,0,0,0);
	var result="***<没钱赚商店>收据***\n";
	var temp="";
	var pay=0,i=0,j=0;
	for(i=0;i<inputs.length;i++){
		for(j=0;j<allItem.length;j++){
			if(inputs[i]==allItem[j].barcode){
				count[j]++;
				break;
			}
		}
	} 
	
	for(var i=0;i<6;i++){
		if(count[i]!=0){
			temp="名称："+allItem[i].name+
				 "，数量："+count[i]+allItem[i].unit+
				 "，单价："+allItem[i].price.toFixed(2)+
				 "(元)，小计："+(count[i]*allItem[i].price).toFixed(2)+"(元)\n";
			result+=temp;
			pay+=(count[i]*allItem[i].price);
		}
	}
	result+="----------------------\n总计："+pay.toFixed(2)+"(元)\n**********************";
	console.log(result);
}
