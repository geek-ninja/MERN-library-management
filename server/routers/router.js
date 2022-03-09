const express = require('express')
const adminController = require('../controllers/admin')
const librarianController = require('../controllers/librarian')
const bookController = require('../controllers/book')
const studentController = require('../controllers/student')
const issueController = require('../controllers/issue')

const router = express.Router()
 
// **************** admin routes************************

router.post('/admin/login',adminController.login())

router.post('/admin/student',adminController.createStudent())
router.get('/admin/student',adminController.getStudents())
router.patch('/admin/student/:id',adminController.updateStudent())
router.delete('/admin/student/:id',adminController.deleteStudent())

router.post('/admin/librarian',adminController.createLibrarian())
router.get('/admin/librarian',adminController.getLibrarians())
router.patch('/admin/librarian/:id',adminController.updateLibrarian())
router.delete('/admin/librarian/:id',adminController.deleteLibrarian())

// **************** librarian routes************************
router.post('/librarian/login',librarianController.login())

// **************** student routes************************
router.post('/student/login',studentController.login())
router.patch('/student/:id/fine',studentController.getIssueFine())

// **************** books routes************************
router.get('/books',bookController.getBooks())
router.post('/books',bookController.createBook())
router.patch('/books/:id',bookController.updateBook())
router.delete('/books/:id',bookController.deleteBook())
router.patch('/books/:id/quantity',bookController.bookQuantity())
router.patch('/books/:id/quantityRemove',bookController.bookQuantityRemove())

// **************** issues routes************************
router.get('/issue',issueController.getIssues())
router.post('/issue',issueController.createIssue())
router.delete('/issue/:id',issueController.deleteIssue())
router.patch('/issue/:id/request',issueController.updateIssue())
router.patch('/issue/:id/returned',issueController.updateIssueReturned())
router.patch('/issue/:id/returndate',issueController.updateIssueReturnDate())
// router.patch('/issue/:id/clearLibfine',issueController.librarianClearIssueFine())
router.patch('/issue/:id/fine',issueController.updateIssueFine())
router.patch('/issue/:id/clearfine',issueController.clearIssueFine())

module.exports = router