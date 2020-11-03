module.exports = app => {
	const Tarefas = app.models.tarefas;
	app.get("/tarefas", (req, res) => {
			Tarefas.findAll({},(retorno)=>
							{res.json({tarefas: retorno})});
	});
};