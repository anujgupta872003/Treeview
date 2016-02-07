/**
 * Anuj Gupta
 * anujgupta872003@gmail.com
 */
$.noConflict();
jQuery(document).ready(function($) {

	
	//event.preventDefault();
	//$("div.treeview li a").addClass("glyphicon glyphicon-minus");
	//$("div.treeview li").has("ul").children("a").attr("class","glyphicon glyphicon-plus");
	$("div.treeview li").Initial_Setup();
	var rclickelement;
	
	//for class toggle b/w "+" & "-"

	$("div.treeview").on("click","a",function(){
		 $(this).ToggleOpenClose();
	  });
	
	
	//for right click options
	  $("div.treeview").on("contextmenu","a",function(event){
		  rclickelement=$(this).text();
		  $(this).RtClickMenu(event,rclickelement);		  
		  
	  });
	  
	  $(document).bind("mousedown", function (e) {
		    
		    // If the clicked element is not the menu
		    if (!$(e.target).parents(".custom-menu").length > 0) {
		        
		        // Hide it
		    	
		        $(".custom-menu").hide();
		    }
		});
	  
	  $(".custom-menu").on("click","li",function(){
		  
		        
		  var moveTo = $(this).attr("data-action");
		 $(this).MoveItem(moveTo,rclickelement);
		   
	  });
	  //add new node
	  $("#btnOK").on("click",function(){
		 // alert($("#NEW_NODE").val());
		  var new_node = $("#NEW_NODE").val();
		  
		  $(this).AddNewNode(new_node,rclickelement);
	  });
		  
		  
		   
	  
});