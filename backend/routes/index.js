const express = require('express');
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

router.post('/admin/materia', WithAuth, AdminController.createSubjects)
router.get('/admin/materia', WithAuth, AdminController.showSubjects)

router.post('/admin/submateria', WithAuth, AdminController.createSub_Subjects)
router.get('/admin/submateria', WithAuth, AdminController.showSub_Subjects)

router.post('/curso', WithAuth, CourseController.create)
router.get('/curso/:id', WithAuth, CourseController.show)
router.put('/curso/:id', WithAuth, CourseController.edit)

router.get('/search', WithAuth, SearchController.search)

router.post('/order', OrderController.order)
router.delete('/order', OrderController.deleteOrder)
router.get('/order/:id', OrderController.show)

module.exports = router;
