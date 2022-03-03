const User = require('../model/Usermodel');
const File = require('../model/Filemodel')
const { app, redisClient } = require('../app')
const request= require('supertest');

describe('Admin', () => {
    
    test('should create a new admin user', (done) => {
        jest.setTimeout(30000);
       request(app)
        .post('/auth/register-admin')
        .send({
            fullname: "admin test",
            username: "admin-test",
            email: "admin-test@gmail.com",
            password: "testingAdmin12345",
        })
        .expect(200)
        .expect((res) => {
                //res.body.data.length = 8;
                res.body.fullname = "admin test";
                res.body.username = "admin-test";
                res.body.email = "admin-test@gmail.com";
                res.body.role = "admin";
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test('should login admin user', (done)=>{
        jest.setTimeout(300000);
        request(app)
            .post('/auth/signin-admin')
            .send({
                email: "admin-test@gmail.com",
                password: "testingAdmin12345",
            })
            .expect(200)
            .expect((res) => {
               // res.body.data.length = 7;
                res.body.fullname = "admin test";
                res.body.username = "admin-test";
                res.body.role = "admin";
                res.body.status = "successfully logged in";
                res.body.success = true;
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    
});

describe('user', () => {
   
    test('should create a new user', (done) => {
        jest.setTimeout(30000);
        request(app)
            .post('/auth/register-user')
            .send({
            fullname: "user test",
            username: "user-test",
            email: "user-test@gmail.com",
            password: "testingUser12345",
            })
            .expect(200)
            .expect((res) => {
                //res.body.data.length = 8;
                res.body.fullname = "user test";
                res.body.username = "user-test";
                res.body.email = "user-test@gmail.com";
                res.body.role = "user";
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
     });

    test('should login user', (done)=>{
        jest.setTimeout(300000);
        request(app)
            .post('/auth/signin-user')
            .send({
                email: "user-test@gmail.com",
                password: "testingUser12345",
            })
            .expect(200)
            .expect((res) => {
                //res.body.data.length = 7;
                res.body.fullname = "user test";
                res.body.username = "user-test";
                res.body.role = "user";
                res.body.status = "successfully logged in";
                res.body.success = true;
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});

/*describe('Upload a file', () => {
    test('should get the token and upload a file', () => {
        jest.setTimeout(30000);
        let token = await redisClient.get('token')
        request(app)
        .post('/upload')
        .set('Authorization', token)
        .sendFile("DevOps.png")
        .expect(200)
        .expect((res) => {
            res.body.data.length = 6,
            res.body.data[0].filename = "DevOps.png",
        })
    })
});

afterAll(async() => {
    await User.deleteOne({where: {
        username: 'user-test'
    }})
    await User.deleteOne({
        where: {
            username: 'admin-test'
        }
    })
    await File.deleteOne({
        where: {
            filename: 'DevOps.png'
        }
    })
});*/