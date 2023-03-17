import autores from "../models/autor.js"

class AutorController {

    static listarAutores = (req, res) => {
      autores.find((err, autores) => {
        res.status(200).json(autores)
    })
    }

    static listarPorId = (req, res) =>{
      const id =req.params.id;
      autores.findById(id, (err, autores) =>{
        if(err){
          res.status(400).send({message: `${err.message} - id do Autor não localizado`})
        }else{
          res.status(200).send(autores);
        }
      })
    }

    static cadastrarAutor = (req, res) =>{
      let autor = new autores(req.body);
      autor.save((err) =>{

        if(err){
          res.status(500).send({message: `$${err.message} Falha ao cadastrar o Autor. Confira os dados`})
        } else {
          res.status(201).send(autor.toJSON())
        }
      })
    }
    
    static atualizarAutor = (req, res) =>{
      const id = req.params.id;

      autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err){
          res.status(200).send({message: 'O livo foi atualizado com sucesso'})
        }else{
          res.status(500).send({message: err.message})
        }
      })

    }

    static excluirAutor = (req, res) =>{
      const id = req.params.id;

      autores.findByIdAndDelete(id, (err)=>{
        if(!err){
          res.status(200).send({message: 'Livo removido com sucesso.'})
        }else{
          res.status(500).send({message: err.message})
        }
      })
    }
}

export default AutorController; 