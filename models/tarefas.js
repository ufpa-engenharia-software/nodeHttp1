module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
						{nome:"Algoritmo", idAluno:1},
						{nome:"Serviços", idAluno:1},
						{nome:"Capa do Trabalho", idAluno:2},
						{nome:"Power Point", idAluno:2},
						{nome:"Email com Tarefa", idAluno:2},
					]
				)				
			}
	}
};