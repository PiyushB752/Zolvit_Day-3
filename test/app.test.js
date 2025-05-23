import request from "supertest"
import app from "../app.js"
import { expect } from "chai"

describe("Post /users",function(){
    describe("Given a username and password",function(){
        it("should respond with a 200 status code", async function(){
            const res = await request(app).post("/users").send({
                username:"username",
                password:"password"
            })
            expect(res.statusCode).to.equal(200)
        })

        it("should specify JSON in the Content-Type header",async function(){
            const res = await request(app).post("/users").send({
                username:"username",
                password:"password"
            })
            expect(res.headers["content-type"]).to.include("json")
        })

        it("response has userId",async function(){
            const res = await request(app).post("/users").send({
                username:"username",
                password:"password"
            })
            expect(res.body).to.have.property("userId")
        })
    })

    describe("When the username and password is missing",function(){
        it("should respond with a status code of 400 if there is no username.",async function(){
            const res = await request(app).post("/users").send({
                password:"password"
            })
            expect(res.statusCode).to.equal(400)         
        })

        it("should respond with a status code of 400 if there is no password.",async function(){
            const res = await request(app).post("/users").send({
                username:"username"
            })
            expect(res.statusCode).to.equal(400)         
        })

        it("should respond with a status code of 400 if there is neither username nor password.",async function(){
            const res = await request(app).post("/users").send({ })
            expect(res.statusCode).to.equal(400)         
        })
    })
})
