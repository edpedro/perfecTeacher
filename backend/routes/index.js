const express = require('express');
const multer = require('multer')
const multerConfig = require('../config/multer')
const router = express.Router();

const WithAuth = require('../private/auth')
const UserController = require("../controllers/UserController")
const AdminController = require('../controllers/AdminController')
const CourseController = require('../controllers/CourseController')
const TelaInitialController = require('../controllers/TelaInitialController')
const OrderController = require('../controllers/OrderController')
const SearchController = require('../controllers/SearchControlller')

router.get('/', TelaInitialController.show)

router.post('/user', UserController.create)
router.post('/login', UserController.login)
router.get('/list', UserController.list)
router.post('/authlogin', UserController.authLogin)
router.post('/upload/:id', WithAuth, multer(multerConfig).single('file'), UserController.upload)


router.post('/admin/materia', WithAuth, AdminController.createSubjects)
router.get('/admin/materia', WithAuth, AdminController.showSubjects)

router.post('/admin/submateria', WithAuth, AdminController.createSub_Subjects)
router.get('/admin/submateria', WithAuth, AdminController.showSub_Subjects)

router.post('/curso', WithAuth, CourseController.create)
router.get('/curso/:id', WithAuth, CourseController.show)
router.get('/curso/show/:id', CourseController.showId)
router.put('/curso/:id', WithAuth, CourseController.edit)
router.delete('/curso/:id', WithAuth, CourseController.delete)

router.get('/search', SearchController.search)


router.post('/order', WithAuth, OrderController.order)
router.delete('/order/:id',WithAuth, OrderController.deleteOrder)
router.get('/order/:id',WithAuth, OrderController.show)

module.exports = router;
