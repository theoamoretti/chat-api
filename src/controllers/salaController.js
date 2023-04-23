const salaModel = require('../models/salaModel');

exports.get=async()=>{
    return await salaModel.listarSalas()
}

/*nao sei se é aqui*/
exports.get=()=>{
    let salaModel = require('../models/salaModel')
    return salaModel.listarSalas()
}
/*nao sei se é aqui*/