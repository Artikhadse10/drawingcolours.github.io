	
	

	jQuery(document).ready(function($){


		
		if($('.wpcf7-form-control.wpcf7-repeater-add').length>0){
			$('.wpcf7-form-control.wpcf7-repeater-add').on('click', function(){
				wpdp_refresh_733(jQuery, true);
			});
		}
		
	
});
var wpdp_refresh_first_733 = 'yes';
var wpdp_counter_733 = 0;
var wpdp_month_array_733 = [];
var wpdp_dateFormat = "mm/dd/yy";
var wpdp_defaultDate = "";
function wpdp_refresh_733($, force){
				if(typeof $.datepicker!='undefined' && typeof $.datepicker.regional["en-GB"]!='undefined'){
					
				wpdp_month_array_733 = $.datepicker.regional["en-GB"].monthNames;
									
				}
				
		
		
				


				if($(".datepickerdata").length>0){
					
				$(".datepickerdata").attr("autocomplete", "off");
					
				//document.title = wpdp_refresh_first=='yes';
				force = true;
				if(wpdp_refresh_first_733 == 'yes' || force){
					
					if(typeof $.datepicker!='undefined')
					$(".datepickerdata").datepicker( "destroy" );
					
					$(".datepickerdata").removeClass("hasDatepicker");
					wpdp_refresh_first_733 = 'done';
					
				}
				$('body').on('mouseover, mousemove', function(){//
				
			
									
				if ($('.datepickerdata').val()!= "") {
					$('.datepickerdata').attr('data-default-val', $('.datepickerdata').val());
				}		
							
				if(wpdp_counter_733 > 2)
				clearInterval(wpdp_intv_733);
				
				if(!$(".datepickerdata").hasClass('hasDatepicker')){

				
					
				$(".datepickerdata").datepicker($.extend(  
					{},  // empty object  
					$.datepicker.regional[ "en-GB" ],       // Dynamically  
					{  
 					dateFormat: wpdp_dateFormat
					}
				)).on( "change", function() {
						
				}); 
				
				
				
				
				
				$(".datepickerdata").datepicker( "option", "dateFormat", "mm/dd/yy" );


setTimeout(function(){ 

	 $.each($(".datepickerdata"), function(){

        
            $(this).prop('autocomplete', 'on');


         		 		
		var expected_default = $(this).data('default');		

		
		var expected_stamp = $(this).data('default_stamp');
		var expected_stamp_date = new Date(expected_stamp*1000);
		var expected_stamp_str = $.datepicker.formatDate('mm/dd/yy', expected_stamp_date);		 
	 
		if(expected_default != undefined && expected_default!=''){ $(this).datepicker().datepicker('setDate', expected_default); }
		if(expected_stamp != undefined && expected_stamp!=''){ $(this).datepicker().datepicker('setDate', expected_stamp_str); }		
		
	});
	
}, 100);
	






					$.each($(".datepickerdata"), function(){
						var this_selector = $(this);
						var parent_form = this_selector.closest('form');
						
						parent_form.on('reset', function(){
							if(this_selector.data('default-val')!= ""){
								setTimeout(function(){
									if(this_selector.val() == ''){
										this_selector.val(this_selector.data('default-val'));
									}
								});
							}
						});
						if($(this).data('default-val')!= ""){
							$(this).val($(this).data('default-val'));
						}
						
					});
						
				
				}
				});
				}
		


		
		$('.ui-datepicker').addClass('notranslate');
}
	var wpdp_intv_733 = setInterval(function(){
		wpdp_counter_733++;
		wpdp_refresh_733(jQuery, false);
	}, 500);

	                jQuery(document).ready(function($){

                        $(".datepickerdata").on('click', function(){

                            $('.ui-datepicker-div-wrapper').prop('class', 'ui-datepicker-div-wrapper wp_datepicker_option-1 ');

                        });

                        setTimeout(function () {
                                $(".datepickerdata").click();
                                //$("//").focusout();
                        }, 1000);



                });

            
    //wpdp_refresh_//(jQuery, false);
	
	    
