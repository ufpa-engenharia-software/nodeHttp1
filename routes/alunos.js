module.exports = app => {
	const Tarefas = app.models.alunos;
	app.get("/alunos", (req, res) => {
			Tarefas.findAll(  
				 {},(retorno) =>
							{
								res.json({alunos: retorno})
							}
			);
	});	
};