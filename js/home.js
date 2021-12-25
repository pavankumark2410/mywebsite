$(document).ready(function() {
    $("#s1").click(function() {
        $("#stage1").show();
        $("#stage2").hide();
        $("#stage3").hide();
    });
 
     $("#s2").click(function() {
        $("#stage1").hide();
        $("#stage2").show();
        $("#stage3").hide();
    });

      $("#s3").click(function() {
        $("#stage1").hide();
        $("#stage2").hide();
        $("#stage3").show();
    });
      $("#t1").click(function() {
        $("#type1").show();
        $("#type2").hide();
    });
      $("#t2").click(function() {
        $("#type2").show();
        $("#type1").hide();
    });
});
