const express = require('express');
const multer = require('multer')
const multerConfig = require('../config/multer')
const router = express.Router();

const WithAuth = require('../private/auth')
const UserController = require("../controllers/UserController")
const AdminController = require('../controllers/AdminController')
const CourseController = require('../controllers/CourseController')
const SearchController = require('../controllers/SearchControlller')
const TelaInitialController = require('../controllers/TelaInitialController')
const OrderController = require('../controllers/OrderController')

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
router.put('/curso/:id', WithAuth, CourseController.edit)
router.delete('/curso/:id', WithAuth, CourseController.delete)

router.get('/search', WithAuth, SearchController.search)

router.post('/order', OrderController.order)
router.delete('/order', OrderController.deleteOrder)
router.get('/order/:id', OrderController.show)

module.exports = router;
