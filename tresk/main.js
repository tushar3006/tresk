(function(){

var main=angular.module('main',[]);


//sample data of customer order
var customerOrder=[
{
name:"Shahi paneer",
repeat:false,
quantity:[2],
locality:"gurgaon",
address:" K.No. 12/3/1, 4/1/1 V.P.O Begampur Khatola Behrampur Road.",	
comments:"Please keep it spicy",
canView:true,
orderDate:Date.now(),
status:"completed"
//deliverTime:date.Now()

},
{
name:"Rajma rice,ShahiPaneer",
repeat:false,
quantity:[2,3],
locality:"gurgaon",
address:" K.No. 12/3/1, 4/1/1 V.P.O Begampur Khatola Behrampur Road.",	
comments:"Please keep it spicy",
canView:true,
orderDate:Date.now(),
status:"completed"
//deliverTime:date.Now()

},
{
name:"Shahi paneer",
repeat:false,
quantity:[2],
locality:"gurgaon",
address:" K.No. 12/3/1, 4/1/1 V.P.O Begampur Khatola Behrampur Road.",	
comments:"Please make it less spicy and onionless",
canView:true,
orderDate:Date.now(),
status:"completed"
//deliverTime:date.Now()

}
];

//Sample Dishes
var dishes=[
{
dishId:'0101',
name:'Aloo Parantha',
origin:"North-Indian",
ingd:"Mashed Potatoes,Onion,Wheat flour",
img:"images/aloo-thumb.jpg",
price:50

},
{
dishId:'0101',
name:'Shahi Paneer',
origin:"North-Indian",
ingd:"Paneer,Onion,Garam masala and our secret recipie",
img:"images/shahi-paneer-thumb.jpg",
price:50

},
{
dishId:'0101',
name:'Baingan Bartha',
origin:"North-Indian",
ingd:"Brinjal,Onion,Garam masala and our secret recipie",
img:"images/baingan-bharta-thumb.jpg",
price:50

},
{
dishId:'0101',
name:'Rajma Rice',
origin:"North-Indian",
ingd:"Rajma,Rice,Garam masala and our secret recipie",
img:"images/Rajma-rice.jpg",
price:50

}
];
//alert(products[0].name);


//order controller
main.controller('custOrders',function(){
this.view=false;
this.orderDetails=customerOrder;

});

//button controller
main.controller('btnCtrl',function(){
this.count=1;
this.ctrl=false;
this.toggle=function(){this.count++; if(this.count%2===0){this.ctrl=true;} else{this.ctrl=false;} };

});


//add cards controller
main.controller('addCards',function(addDish){
//alert('asd');
this.count=0;
this.getCount=function(val){if(val===1){return this.count++;} else {if(this.count<=0)return 0; else return this.count--;}};
this.cardDetails={};
var x=addDish.getItem();
this.cardDetails.quantity=x.quantity; 
this.cardDetails.name=addDish.getItem();
this.addCard=function(card){
//alert(card.orderDetails[1].locality);
this.cardDetails.orderDate=Date.now();
this.cardDetails.canView=true;

for(var i=0;i<card.orderDetails.length-2;i++)
{
if(card.orderDetails[i].status==="completed")
{
card.orderDetails[i].canView=false;
}
else
{
card.orderDetails[i].orderDate=Date.now();
continue;

}
}
this.cardDetails.repeat=true;

card.orderDetails.push(this.cardDetails);
	
this.cardDetails={};
};

});



// add dishes to card controller

main.controller('dishCtrl',function(addDish){
this.selected=[];
this.view=[];
this.add=function(val,c){if(c>0){addDish.addItem(val,c); }  else{addDish.remove(val,c); }};
this.get=function(){this.selected=addDish.getItem();};
this.rem=function(val){addDish.remove(val) };
this.dishes=dishes;
});

//a service top add dish to addCards and addDish controllers

main.factory('addDish',function(){

var itemList=[];

 itemList.quantity=[];
var item={
addItem:function(object,quantity){
				itemList.push(object.name);
				itemList.quantity.push(quantity);
			}
				,
getItem:function(){
				//alert('asd');
				return itemList;
						},
remove:function(object){
				for(var i=0;i<itemList.length;i++){
				if(itemList[i]===object.name)
				{
				itemList.splice(i,1);
				itemList.quantity.splice(i,1);
				}
					}						}
						
};

return item;
}); 











})();