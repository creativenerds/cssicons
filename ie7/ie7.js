/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'essential-icons_Creative-Nerds\'">' + entity + '</span>' + html;
	}
	var icons = {
		'cn-reload1': '&#xe900;',
		'cn-up-arrow': '&#xe901;',
		'cn-down-arrow': '&#xe902;',
		'cn-right-arrow': '&#xe903;',
		'cn-left-arrow': '&#xe904;',
		'cn-go-left': '&#xe905;',
		'cn-go-right': '&#xe906;',
		'cn-go-down': '&#xe907;',
		'cn-go-up': '&#xe908;',
		'cn-up-and-left': '&#xe909;',
		'cn-down-and-right': '&#xe90a;',
		'cn-loop': '&#xe90b;',
		'cn-calculation': '&#xe90c;',
		'cn-tungsten-bulb': '&#xe90d;',
		'cn-zoom-out': '&#xe90e;',
		'cn-zoom-in': '&#xe90f;',
		'cn-zoom': '&#xe910;',
		'cn-business-man': '&#xe911;',
		'cn-id-card': '&#xe912;',
		'cn-floppy': '&#xe913;',
		'cn-loss': '&#xe914;',
		'cn-profit': '&#xe915;',
		'cn-stcok-decrease': '&#xe916;',
		'cn-stock-increase': '&#xe917;',
		'cn-abacus': '&#xe918;',
		'cn-calculator': '&#xe919;',
		'cn-profit-loss-board': '&#xe91a;',
		'cn-finance-board': '&#xe91b;',
		'cn-music-board': '&#xe91c;',
		'cn-play-board': '&#xe91d;',
		'cn-picture-board': '&#xe91e;',
		'cn-board': '&#xe91f;',
		'cn-profit-board': '&#xe920;',
		'cn-box': '&#xe921;',
		'cn-bag': '&#xe922;',
		'cn-suitcase-3': '&#xe923;',
		'cn-suitcase-2': '&#xe924;',
		'cn-suitcase': '&#xe925;',
		'cn-shredder': '&#xe926;',
		'cn-printer': '&#xe927;',
		'cn-file-storage': '&#xe928;',
		'cn-drawer': '&#xe929;',
		'cn-sand-time': '&#xe92a;',
		'cn-dustbin': '&#xe92b;',
		'cn-recycle-bin': '&#xe92c;',
		'cn-call-mute': '&#xe92d;',
		'cn-call-loudspeaker': '&#xe92e;',
		'cn-call-answer': '&#xe92f;',
		'cn-old-telephone': '&#xe930;',
		'cn-land-line-phone': '&#xe931;',
		'cn-wall-clock': '&#xe932;',
		'cn-alarm': '&#xe933;',
		'cn-wrist-watch': '&#xe934;',
		'cn-key': '&#xe935;',
		'cn-files': '&#xe936;',
		'cn-paper-plane': '&#xe937;',
		'cn-paint-brush': '&#xe938;',
		'cn-pin': '&#xe939;',
		'cn-eraser': '&#xe93a;',
		'cn-scissor': '&#xe93b;',
		'cn-pencil-scale': '&#xe93c;',
		'cn-scale': '&#xe93d;',
		'cn-pen-point': '&#xe93e;',
		'cn-feather': '&#xe93f;',
		'cn-pen': '&#xe940;',
		'cn-crayons': '&#xe941;',
		'cn-pencil': '&#xe942;',
		'cn-page-linked': '&#xe943;',
		'cn-folder-linked': '&#xe944;',
		'cn-page-connected': '&#xe945;',
		'cn-folder-connected': '&#xe946;',
		'cn-storage-connected': '&#xe947;',
		'cn-iphone-connector': '&#xe948;',
		'cn-usb-pen-drive': '&#xe949;',
		'cn-pin-plug': '&#xe94a;',
		'cn-pin-plug1': '&#xe94b;',
		'cn-paint-palette': '&#xe94c;',
		'cn-wifi-low-signal': '&#xe94d;',
		'cn-wifi-medium-signal': '&#xe94e;',
		'cn-wifi-full-signal': '&#xe94f;',
		'cn-low-bright': '&#xe950;',
		'cn-half-bright': '&#xe951;',
		'cn-full-bright': '&#xe952;',
		'cn-contrast': '&#xe953;',
		'cn-brightness': '&#xe954;',
		'cn-wireless-signal': '&#xe955;',
		'cn-battery-charging': '&#xe956;',
		'cn-empty-battery': '&#xe957;',
		'cn-per-battery': '&#xe958;',
		'cn-per-battery1': '&#xe959;',
		'cn-full-battery': '&#xe95a;',
		'cn-mute-volume': '&#xe95b;',
		'cn-medium-volume': '&#xe95c;',
		'cn-high-volume': '&#xe95d;',
		'cn-joystick': '&#xe95e;',
		'cn-keyboard': '&#xe95f;',
		'cn-mouse-2': '&#xe960;',
		'cn-mouse': '&#xe961;',
		'cn-radio': '&#xe962;',
		'cn-projector': '&#xe963;',
		'cn-wifi': '&#xe964;',
		'cn-loud-speaker': '&#xe965;',
		'cn-paint-brush1': '&#xe966;',
		'cn-paint-roller': '&#xe967;',
		'cn-hammer': '&#xe968;',
		'cn-magic-wand': '&#xe969;',
		'cn-spanner': '&#xe96a;',
		'cn-filler': '&#xe96b;',
		'cn-screw-driver': '&#xe96c;',
		'cn-unlink': '&#xe96d;',
		'cn-link': '&#xe96e;',
		'cn-message': '&#xe96f;',
		'cn-wind-mill': '&#xe970;',
		'cn-solar-panel': '&#xe971;',
		'cn-network-connect': '&#xe972;',
		'cn-calendar': '&#xe973;',
		'cn-office-chair': '&#xe974;',
		'cn-graduate-hat': '&#xe975;',
		'cn-profit-chart': '&#xe976;',
		'cn-pie-chart-2': '&#xe977;',
		'cn-pie-chart': '&#xe978;',
		'cn-book': '&#xe979;',
		'cn-umberlla': '&#xe97a;',
		'cn-security': '&#xe97b;',
		'cn-sun': '&#xe97c;',
		'cn-car-steering': '&#xe97d;',
		'cn-battery': '&#xe97e;',
		'cn-flag': '&#xe97f;',
		'cn-cd': '&#xe980;',
		'cn-home': '&#xe981;',
		'cn-reload': '&#xe982;',
		'cn-mic': '&#xe983;',
		'cn-mobile-note': '&#xe984;',
		'cn-mobile-music': '&#xe985;',
		'cn-truck': '&#xe986;',
		'cn-gas': '&#xe987;',
		'cn-lightning-bulb': '&#xe988;',
		'cn-mobile': '&#xe989;',
		'cn-message1': '&#xe98a;',
		'cn-laptop': '&#xe98b;',
		'cn-led': '&#xe98c;',
		'cn-euro-bag': '&#xe98d;',
		'cn-dollar-bag': '&#xe98e;',
		'cn-currency-decrease': '&#xe98f;',
		'cn-currency-increase': '&#xe990;',
		'cn-coins': '&#xe991;',
		'cn-bank-safe': '&#xe992;',
		'cn-bank': '&#xe993;',
		'cn-atm-money': '&#xe994;',
		'cn-dollars': '&#xe995;',
		'cn-dollar': '&#xe996;',
		'cn-tags': '&#xe997;',
		'cn-tag': '&#xe998;',
		'cn-cash-register': '&#xe999;',
		'cn-purse': '&#xe99a;',
		'cn-picnic-bag-upload': '&#xe99b;',
		'cn-picnic-bag-download': '&#xe99c;',
		'cn-picnic-bag--': '&#xe99d;',
		'cn-picnic-bag-': '&#xe99e;',
		'cn-minus-cart': '&#xe99f;',
		'cn-add-cart': '&#xe9a0;',
		'cn-download-cart': '&#xe9a1;',
		'cn-upload-cart': '&#xe9a2;',
		'cn-cart': '&#xe9a3;',
		'cn-do-not-disturb': '&#xe9a4;',
		'cn-plugin': '&#xe9a5;',
		'cn-satellite': '&#xe9a6;',
		'cn-gift-box': '&#xe9a7;',
		'cn-male-sign': '&#xe9a8;',
		'cn-female-sign': '&#xe9a9;',
		'cn-female-user': '&#xe9aa;',
		'cn-user-with-hat': '&#xe9ab;',
		'cn-download-user': '&#xe9ac;',
		'cn-uplad-user': '&#xe9ad;',
		'cn-minus-user': '&#xe9ae;',
		'cn-add-user': '&#xe9af;',
		'cn-three-user': '&#xe9b0;',
		'cn-two-user': '&#xe9b1;',
		'cn-male-user': '&#xe9b2;',
		'cn-unlike': '&#xe9b3;',
		'cn-like': '&#xe9b4;',
		'cn-cloud-minus': '&#xe9b5;',
		'cn-cloud-add': '&#xe9b6;',
		'cn-cloud-download': '&#xe9b7;',
		'cn-cloud-upload': '&#xe9b8;',
		'cn-settings': '&#xe9b9;',
		'cn-empty-star': '&#xe9ba;',
		'cn-half-star': '&#xe9bb;',
		'cn-full-star': '&#xe9bc;',
		'cn-minus-heart': '&#xe9bd;',
		'cn-add-heart': '&#xe9be;',
		'cn-empty-heart': '&#xe9bf;',
		'cn-half-heart': '&#xe9c0;',
		'cn-heart': '&#xe9c1;',
		'cn-visibility-off': '&#xe9c2;',
		'cn-visibility-on': '&#xe9c3;',
		'cn-alarm-off': '&#xe9c4;',
		'cn-alarm-on': '&#xe9c5;',
		'cn-radiation': '&#xe9c6;',
		'cn-speedometer': '&#xe9c7;',
		'cn-life-saver': '&#xe9c8;',
		'cn-hot-pot': '&#xe9c9;',
		'cn-eco-leaf': '&#xe9ca;',
		'cn-medal': '&#xe9cb;',
		'cn-heart-plus': '&#xe9cc;',
		'cn-egg': '&#xe9cd;',
		'cn-coal-trolly': '&#xe9ce;',
		'cn-flower': '&#xe9cf;',
		'cn-wine-bottle': '&#xe9d0;',
		'cn-pin1': '&#xe9d1;',
		'cn-compass': '&#xe9d2;',
		'cn-resturant': '&#xe9d3;',
		'cn-lightning-storm': '&#xe9d4;',
		'cn-raining-cloud': '&#xe9d5;',
		'cn-wind': '&#xe9d6;',
		'cn-water': '&#xe9d7;',
		'cn-train': '&#xe9d8;',
		'cn-truck1': '&#xe9d9;',
		'cn-bus': '&#xe9da;',
		'cn-car': '&#xe9db;',
		'cn-icecream-van': '&#xe9dc;',
		'cn-van': '&#xe9dd;',
		'cn-swiss-knife': '&#xe9de;',
		'cn-torch': '&#xe9df;',
		'cn-axe': '&#xe9e0;',
		'cn-cactus': '&#xe9e1;',
		'cn-leaf': '&#xe9e2;',
		'cn-rice-bowl': '&#xe9e3;',
		'cn-cake': '&#xe9e4;',
		'cn-chef-hat': '&#xe9e5;',
		'cn-bone': '&#xe9e6;',
		'cn-meat': '&#xe9e7;',
		'cn-icecream': '&#xe9e8;',
		'cn-milk': '&#xe9e9;',
		'cn-plant-pot': '&#xe9ea;',
		'cn-coffee-cup': '&#xe9eb;',
		'cn-coffee-beans': '&#xe9ec;',
		'cn-burger': '&#xe9ed;',
		'cn-sushi': '&#xe9ee;',
		'cn-plate': '&#xe9ef;',
		'cn-beans': '&#xe9f0;',
		'cn-pine-apple': '&#xe9f1;',
		'cn-grapes': '&#xe9f2;',
		'cn-cherry': '&#xe9f3;',
		'cn-carrot': '&#xe9f4;',
		'cn-fruits': '&#xe9f5;',
		'cn-fruits1': '&#xe9f6;',
		'cn-fruits2': '&#xe9f7;',
		'cn-half-apple': '&#xe9f8;',
		'cn-paint-splash': '&#xe9f9;',
		'cn-paint-bucket': '&#xe9fa;',
		'cn-apple': '&#xe9fb;',
		'cn-passport': '&#xe9fc;',
		'cn-point-to-shoot': '&#xe9fd;',
		'cn-globe': '&#xe9fe;',
		'cn-chat-message': '&#xe9ff;',
		'cn-webcam': '&#xea00;',
		'cn-processor': '&#xea01;',
		'cn-exhaust-fan': '&#xea02;',
		'cn-cap': '&#xea03;',
		'cn-tooth': '&#xea04;',
		'cn-siringe': '&#xea05;',
		'cn-blood': '&#xea06;',
		'cn-hand-cut': '&#xea07;',
		'cn-olive-oil': '&#xea08;',
		'cn-atom': '&#xea09;',
		'cn-test-tube': '&#xea0a;',
		'cn-dustbin1': '&#xea0b;',
		'cn-headphone': '&#xea0c;',
		'cn-diamond': '&#xea0d;',
		'cn-coconut-tree': '&#xea0e;',
		'cn-tree': '&#xea0f;',
		'cn-paint-tube': '&#xea10;',
		'cn-shovel': '&#xea11;',
		'cn-pine-tree': '&#xea12;',
		'cn-camera': '&#xea13;',
		'cn-files1': '&#xea14;',
		'cn-battle-ship': '&#xea15;',
		'cn-hanger': '&#xea16;',
		'cn-electric-plug': '&#xea17;',
		'cn-winning-cup': '&#xea18;',
		'cn-lab-beaker': '&#xea19;',
		'cn-lab-flask': '&#xea1a;',
		'cn-dna': '&#xea1b;',
		'cn-light-house': '&#xea1c;',
		'cn-music-note': '&#xea1d;',
		'cn-information': '&#xea1e;',
		'cn-filler1': '&#xea1f;',
		'cn-hours-support': '&#xea20;',
		'cn-ecg': '&#xea21;',
		'cn-star-award': '&#xea22;',
		'cn-film-roll': '&#xea23;',
		'cn-lamp': '&#xea24;',
		'cn-hot-air-balloon': '&#xea25;',
		'cn-rocket': '&#xea26;',
		'cn-night-lamp': '&#xea27;',
		'cn-helium-balloon': '&#xea28;',
		'cn-airplane': '&#xea29;',
		'cn-construction-helmet': '&#xea2a;',
		'cn-rugby-football': '&#xea2b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/cn-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());