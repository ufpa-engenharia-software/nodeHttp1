module.exports = app => {
	app.get('/', (req, res) => {
		res.send('Ola Mundo com Express em TOPES 2020/ERE')
	});
};
