var jehong=jehong || {};

jehong.main=(()=>{
	var init=(ctx)=>{
		jehong.session.init(ctx);
		logic();
	};
	var logic=()=>{
		$('.box-image').click(()=>{
			alert('go Movie Detail !');
			$('#content').empty();
			location.href=sessionStorage.getItem('ctx')+"/movieDetail";
		});
				
	};
	return {
		init : init,
		logic : logic
	};
})();

jehong.session=
{
	init : function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+"/resources/js");
		sessionStorage.setItem('css',ctx+"/resources/css");
		sessionStorage.setItem('img',ctx+"/resources/img");
	},
	getPath : function(x){
		return sessionStorage.getItem(x);
	}
}
