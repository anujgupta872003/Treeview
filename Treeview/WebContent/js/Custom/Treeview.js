/**
 * Anuj Gupta
 * anujgupta872003@gmail.com
 */
(function ( $ ) {
	
	/**
	 * Initial setup
	 * Calling this function is mandatory
	 */
    $.fn.Initial_Setup = function() {
        this.children("a").addClass("glyphicon glyphicon-minus");
    	this.has("ul").children("a").attr("class","glyphicon glyphicon-plus");
        return this;
    };
    /**
	 * Toggle between + & -
	 * Calling this function is mandatory
	 */
    $.fn.ToggleOpenClose = function() {
    	$(this).toggleClass("glyphicon-minus");
        return this;
    };
    /**
	 * Showing up right Click Menu
	 * event -- Event of page
	 * rclickelement -- Right Clicked Element
	 */
    $.fn.RtClickMenu = function(event,rclickelement) {
    	//do not show context menu if top node is clicked
		  if ($(this).attr('href')=="#-99999999999999999"){
			 // alert("hi");
			  event.preventDefault();
			  return;
			  
		  }
		// In the right position (the mouse)
		  else{
			  event.preventDefault();
			  rclickelement=$(this).text();
			  
			  $(".custom-menu").finish().toggle().css({
			        top: event.pageY + "px",
			        left: event.pageX + "px"
			    });
			  $(".custom-menu li").each(function(){
				  if($(this).text()==rclickelement ){
					  $(this).addClass("menu_item_disabled");
				  }
				  else{
					  $(this).removeClass("menu_item_disabled");
				  }
			  });
		  }
    };
    /**
	 * Moving Item Under Specific Item & Deleting Specific Item
	 * moveTo -- Target Parent Item 
	 * rclickelement -- Right Clicked Element to be moved under Target Parent Item
	 */
    $.fn.MoveItem = function(moveTo,rclickelement) {
    	if($(this).attr("data-action")=="ADD_NEW"){

			  $("#myModal").modal("show");
			  $(".custom-menu").hide();
			  return false;
		  }
		  if($(this).attr("data-action")=="DELETE"){

			  $("div.treeview ul li a").each(function(){
					 if($(this).text()==rclickelement){
							 if($(this).siblings("ul").size()>0){
								 $(this).parent("li").parent().append($(this).siblings().html());
								 $(this).parent("li").remove();
							 }
							 else{
								 $(this).parents().each(function(){
									 if($(this).siblings().size()>0)
									 {
										 $(this).remove();
										 return false;
									 }
							 });
						
							}
							return false;
					 }
				  });
			  $(".custom-menu").hide();
			  return false;
		  }
		  else{
			  //loop for removing item
			  $("div.treeview ul li a").each(function(){
					 if($(this).text()==rclickelement){
							 if($(this).siblings("ul").size()>0){
								 $(this).parent("li").parent().append($(this).siblings().html());
								 $(this).parent("li").remove();
							 }
							 else{
								 $(this).parents().each(function(){
									 if($(this).siblings().size()>0)
									 {
										 $(this).remove();
										 return false;
									 }
							 });
						
							}
							return false;
					 }
				  });
			 //loop for appending item
				  $("div.treeview ul li a").each(function(){
					
					 if($(this).text()==moveTo) {
						 
							 if($(this).siblings("ul").size()>0){
								 //alert("hi");
								 $(this).parent("li").children("ul").append("<li>" +
								 		"<a data-toggle=\"collapse\" class=\"glyphicon glyphicon-minus\" href=#"+rclickelement+">"+rclickelement+"</a></li>");
							 
							 }
							 else{
								 	//alert("hello");
									 $(this).parent("li").append("<ul id="+moveTo+" class=\"collapse\"><li>" +
									 		"<a data-toggle=\"collapse\" class=\"glyphicon glyphicon-minus\" href=#"+rclickelement+">"+rclickelement+"</a></li></ul>");
									 $(this).attr("class","glyphicon glyphicon-plus");
								 }
							 return false; 
					 }
			  });
		  }
		  $(".custom-menu").hide();
    };
    /**
	 * Add New Node to the Tree
	 * new_node -- New Item to be added
	 * rclickelement -- Right Clicked Element below which the newly added item will be added
	 */
    $.fn.AddNewNode = function(new_node,rclickelement) {
    	
		  var dup_node = false;
		  $(".custom-menu li").each(function(){
			  if(new_node == $(this).text()){
				  dup_node = true;
				  return false; 
			  }
		  });
		  
		  if(dup_node){
			  alert("Duplicate Column Name");
		  }
		  else{
			 $(".treeview ul li a").each(function(){
					
					 if($(this).text()==rclickelement) {
						 
							 if($(this).siblings("ul").size()>0){
								 alert("hi");
								 $(this).parent("li").children("ul").append("<li>" +
								 		"<a data-toggle=\"collapse\" class=\"glyphicon glyphicon-minus\" href=#"+new_node+">"+new_node+"</a></li>");
							 }
							 else{
								 	//alert("hello");
									 $(this).parent("li").append("<ul id="+rclickelement+" class=\"collapse\"><li>" +
									 		"<a data-toggle=\"collapse\" class=\"glyphicon glyphicon-minus\" href=#"+new_node+">"+new_node+"</a></li></ul>");
									 $(this).attr("class","glyphicon glyphicon-plus");
								 }
							 $("ul.custom-menu").append("<li data-action="+new_node+">"+new_node+"</li>");
							 return false; 
					 }
			  });
	  }
    };
}( jQuery ));

