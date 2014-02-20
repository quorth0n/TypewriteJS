(function($){$.fn.typeWrite=function(s){
    var o={content:$(this).text(),delay:50,t:this,i:0};
    if(s){$.extend(o,s);}o.t.text('');
    var i=setInterval(function() {
        o.t.text(o.t.text()+o.content.charAt(o.i++));    
        if(o.i==o.content.length){clearInterval(i);}}
    ,o.delay);
  return o.t;  
};})(jQuery);