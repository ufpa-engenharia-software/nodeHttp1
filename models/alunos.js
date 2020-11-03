module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
						{id:1, nome:"João"},
						{id:2, nome:"Maria"},
					]
				)				
			}
	}
};