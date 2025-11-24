const Book = require("../models/Book");

// @desc Create a new book
// @route Post /api/books
// @access Private
const createBook = async (req, res) => {
    try {

    } catch (error) {

    }
};

// @desc Get all books for a user
// @route GET /api/books
// @access Private
const getBooks = async (req, res) => {
    
};

// @desc Get a single book by ID
// @route GET /api/books/:id
// @access Private
const getBookById = async (req, res) => {
    
};

// @desc Update a book
// @route PUT /api/books/:id
// @access Private
const updateBook = async (req, res) => {
    
};

// @desc Delete a book
// @route DELETE /api/books/:id
// @access Private
const deleteBook = async (req, res) => {
    
};

// @desc Update a book's cover image
// @route PUT /api/books/cover/:id
// @access Private
const updateBookCover = async (req, res) => {
    
};

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
    updateBookCover,
}