import { db } from "../db.js";
import { Router } from "express";

const rout_user = Router();

rout_user.post("/user", (req, res) => {
    const { nome, email, tarefa, data } = req.body;

    db.query(`insert into usuarios (nome, email, tarefa, data) values ('${nome}', '${email}','${tarefa}','${data}')`, (err, result) => {
        if (err) {
            res.json("Erro ao inserir user: " + err.message)
        }

        res.json(`Usuário ${nome} inserido com sucesso!`)
    });
})

rout_user.get("/lista", (req, res) => {
    db.query(`select * from usuarios`, (err, result) => {
        if (err) {
            return res.json("erro ao listar" + err.message)
        }

        res.json(result);
    })
})

rout_user.delete("/delete", (req, res) => {
    const { id } = req.body;
    db.query(`delete from usuarios where id=${id}`), (err, result) => {
        if (err) {
            return res.json(err.message)
        }
    }

    res.json({
        Deletado: `produto deletado com sucesso`
    });
});

rout_user.put("/atualizacao", (req, res) => {
    const { nome, email, tarefa, data, id } = req.body;

    db.query(`update usuarios set nome='${nome}',${email}','${tarefa}',${data}',
    where id=${id}`, (err, result) => {

        res.json({
            Edição: `tarefa alterado com sucesso!`
        })
    })
})



export { rout_user }