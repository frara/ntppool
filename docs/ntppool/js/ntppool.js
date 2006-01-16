
  var netspeeds = [];

  function add_to_netspeeds(server) {
    netspeeds[ netspeeds.size ] = server;
  }

  function netspeed_updated(server_id, request) {
        try {
          // alert(request);
          $('netspeed_' + server_id ).innerHTML = request.responseText;
          Element.setOpacity($('netspeed_' + server_id ), 0);
          $('netspeed_' + server_id ).style.visibility = 'visible';
          Effect.Appear('netspeed_' + server_id, { duration: 0.7 } );
          

        //  $('netspeed_checkmark_' + server_id).style.visibility = 'visible';
        //  Effect.Pulsate('netspeed_checkmark_' + server_id, { duration: 0.5 } );
        }
        catch(e) {
            document.write(e.message + "<br/>");
        }     

        
  }

  function update_netspeed(server_id, netspeed) {
//     Object.dpDump(server_id);
//     Object.dpDump(netspeed);
     var pars = 'netspeed=' + netspeed + '&server=' + server_id;

     add_to_netspeeds(server_id);
     for ( i=0; i < netspeeds.size; i++ ) {
//        $()
     }

     $('netspeed_' + server_id ).style.visibility = 'hidden';

   // 'netspeed_' + server_id
     var onComp = function(request) { netspeed_updated(server_id, request) }
     new Ajax.Request( '/manage/update/netspeed', { parameters: pars,asynchronous: 1,onComplete: onComp } );
  }

Ajax.Responders.register({
  onCreate: function() {
    if($('busy') && Ajax.activeRequestCount>0) {
      Effect.Appear('busy',{duration:0.5,queue:'end'});
    }
  },
  onComplete: function() {
    if($('busy') && Ajax.activeRequestCount===0) {
      Effect.Fade('busy',{duration:0.5,queue:'end'});
    }
  }
});
