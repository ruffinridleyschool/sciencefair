$(document).ready(show_result);

function show_result(){
    var enc_result = location.search.split('r=')[1];
    // console.log('enc', enc_result);
    if (enc_result == undefined) {
	enc_result = '"missing data"';
    }
    var result = JSON.parse(decodeURIComponent(enc_result));
    // console.log('Spreadsheet returned: ', result);
    if (result.result == 'success'){
	let success = '<i class="fa fa-check"></i>'+"<P>We'll see you at the fair!</P>"
	$('div#reg_status').html(success).addClass("alert alert-success");
    } else {
	let warning = '<i class="fa fa-warning"></i>' +
	    '<P>There seems to be a problem, we may not have recorded your registration properly.</P>' +
	    '<P><code>' + JSON.stringify(result) + '</code></P>' +
	    '<P>Please contact <a href="mailto:steve@strassmann.com">Steve Strassmann</a> for further help.</P>'
	$('div#reg_status').html(warning).addClass("alert alert-warning");
    }
}
