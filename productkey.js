//Yeah theyre public
let jsonKeys = '{' +
	'"keys":[' +
		'{"deviceID":"155149BD4FAAB84", "productKey":"5NEU-VG62-LKPP-QRW4-F6QQ"},' +
		'{"deviceID":"159B882BE677695", "productKey":"MFWG-N54F-0EP3-MFWY-BQ8Q"},' +
		'{"deviceID":"159D0326C535440", "productKey":"B401-GMNV-PE90-MD6N-RVHQ"},' +
		'{"deviceID":"15669E2B34F5191", "productKey":"U1A3-UJRX-9RU4-BPRE-CJEQ"},' +
		'{"deviceID":"155D6021B0397E6", "productKey":"D9K3-XFYH-UNUE-PXDA-ABHQ"},' +
		'{"deviceID":"1532D87603591EC", "productKey":"WLXA-G0MJ-1VY0-VDUT-9PNR"},' +
		'{"deviceID":"159A24BAC35AAD0", "productKey":"F5ED-Q7JL-TYLJ-VWLG-XG2Q"},' +
		'{"deviceID":"15AD2C73B11F8F1", "productKey":"HRG0-GWMY-9V31-HFUY-0XHQ"},' +
		'{"deviceID":"15660CBB0701827", "productKey":"1CF1-72NW-N7EK-AXB6-CHJR"},' +
		'{"deviceID":"15D14CAE4859B61", "productKey":"W80L-22CP-KYOD-RYJ9-E57R"},' +
		'{"deviceID":"152050365E60933", "productKey":"U5YK-2U8T-98GH-435P-MFRQ"},' +
		'{"deviceID":"1505B1EFE27DCB1", "productKey":"KV5X-6UAP-8EDV-W8HX-WRPQ"},' +
		'{"deviceID":"15B777E5F9D9D4D", "productKey":"KTCQ-U454-HLG7-9E51-VG9Q"},' +
		'{"deviceID":"150A087D478459E", "productKey":"KU1F-1M9A-DE9G-HAHX-W1QQ"},' +
		'{"deviceID":"1528F5637CA4255", "productkey":"PLYR-T54L-8K14-VGDT-B7DR"},' +
		'{"deviceID":"15DD3C09C26AFC8", "productkey":"R720-0C2F-NAC1-2XW2-GC2R"},' +
		'{"deviceID":"158EE8688AC541D", "productkey":"WJF5-6NT1-H5DR-EDGQ-DROQ"},' +
		'{"deviceID":"1510ECD37FCE073", "productkey":"M99J-JE4V-HCR6-KL3K-J6XR"}' +
	']' +
'}';

//convert to JS array
const keyList = JSON.parse(jsonKeys);

function printKey() {
	let id = document.getElementById("idInput").value;

	//macOS client adds a leading zero, we need to remove it
	if (id.startsWith(0)) {
		id = id.substring(1);
	}

	//find device ID in the list
	for (let i = 0; i < keyList.keys.length; i++) {
		if (id == keyList.keys[i].deviceID) {
			document.getElementById("result").innerHTML = '<label>Product key:</label><br>' + keyList.keys[i].productKey;
			var found = true;
		}
	}

	if (!found) {
		document.getElementById("result").innerHTML = "Device ID not found.";
	}
}
