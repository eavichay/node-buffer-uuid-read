'use strict';

module.exports = {

	asUUID: function(buffer) {
		var result = '';
		for (var i = 0; i < buffer.length; i++) {
			var chardId;
			chardId = buffer.readUInt(8).toString(16);
			if ([8,12,16,20].indexOf( (i * 2) ) >= 0) {
				result = result + '-';
			}
			result = result + chardId;
		}
	},

	asUINT: function(buffer) {
		return buffer.readUInt8(0).toString(10);
	}
};

