module.exports = app => {
	const Tarefas = app.models.tarefas;
	
	app.get("/tarefas", (req, res) => {
			Tarefas.findAll({},(retorno)=>
							{res.json({tarefas: retorno})});
	});
	
	app.post("/tarefas", function(req, res) {
			
			var nome = req.nome;
 			var idAluno = req.idAluno;

			res.json(
				{
					nomeRecebido: nome,
					idRecebido: idAluno,
				}
			)
	});

};