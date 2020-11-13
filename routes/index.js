const rp = require('request-promise')
module.exports = app => {
	app.get('/', (req, res) => {
		res.send('Ola Mundo com Express em TOPES 2020/ERE')
	});
	app.get('/cep/:cep', (req, res) => {
		var cep = req.params.cep;	
		const getViaCep = {
            uri: 'https://viacep.com.br/ws/'+cep+'/json/',
            method: 'GET'            
        }
        
		rp(getViaCep).then(function (parsedBody) {
                res.send(parsedBody);
            }).catch(function (err) { 

            });
	});


};
