const bodyParser = require('body-parser')

module.exports = app => {
	const Tarefas = app.models.tarefas;
	
	app.get("/tarefas", (req, res) => {
			Tarefas.findAll({},(retorno)=>
							{res.json({tarefas: retorno})});
	});
	// create application/json parser
	var jsonParser = bodyParser.json()
	app.post("/tarefas", jsonParser, function(req, res) {
		
			var nome = req.body.nome
 			var idAluno = req.body.idAluno;

			res.json(
				{
					nomeRecebido: nome,
					idRecebido: idAluno,
				}
			)
	});

};