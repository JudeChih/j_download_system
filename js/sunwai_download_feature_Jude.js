jQuery(function(){
	console.log('1');
	function SaveToDisk(fileURL, fileName) {
	// for non-IE
	    if (!window.ActiveXObject) {
	        var save = document.createElement('a');
	        save.href = fileURL;
	        save.target = '_blank';
	        save.download = fileName || 'unknown';

	        var evt = new MouseEvent('click', {
	            'view': window,
	            'bubbles': true,
	            'cancelable': false
	        });
	        save.dispatchEvent(evt);

	        (window.URL || window.webkitURL).revokeObjectURL(save.href);
	    }

	    // for IE < 11
	    else if ( !! window.ActiveXObject && document.execCommand)     {
	        var _window = window.open(fileURL, '_blank');
	        _window.document.close();
	        _window.document.execCommand('SaveAs', true, fileName || fileURL)
	        _window.close();
	    }
	}
		

		jQuery('.dl_button>em').on('click',function(){
		var i_index = jQuery(this).data('index');
		console.log(i_index);
		SaveToDisk('/templates/as002057/images/download_packages_Jude/'+i_index+'.png',i_index+'.png');
		});
		var a = jQuery('.dl_button>em').data('index');
		console.log(a);	
})

