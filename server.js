const express = require('express')
const app = express()
app.use(express.json())
const data = require('./data.json')

app.listen(4000,()=>
{
console.log("Servidor ok")
})

//GET
app.get('/alunos', (req,res)=>
{
res.json(data)
})

//GET
app.get('/alunos/:id', (req,res)=>
{
const { id } =req.params
const aluno = data.find(alu =>alu.id==id)
if(!aluno)
{
  return res.status(404).json({message: 'Aluno não encontrado'})
}
res.json(aluno)
})


//POST
app.post('/alunos', (req,res)=>{
 
    const {id,nome,idade,curso,ano}=req.body
    //salvar base dados
    res.json({id,nome,idade,curso,ano})

})

//PUT
app.put('/alunos/:id',(req,res)=>
{
const { id } =req.params
const aluno = data.find(alu =>alu.id==id)
if(!aluno)
{
    res.status(404).json({message: "Aluno nâo encontrado"})
}

const {nome}=req.body

aluno.nome=nome

res.json(aluno)
} )



app.delete('/alunos/:id',(req,res)=>
{
    
const { id } =req.params
const alunoF = data.filter(aluno => aluno.id != id);
res.json(alunoF)

})


