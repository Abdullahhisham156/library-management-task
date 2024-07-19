import Book from "../../../db/models/booksModel.js";

export const createBook = async (req, res) => {
  const { title, genre, author } = req.body;


  const bookMatched = await Book.findOne({
    where: {
      title
    }
  });

  if (bookMatched)
    return res.json({ message: "Book already exists" });

  const book = await Book.create({ title, genre, author });

  res.status(201).json({ messsage: "Book added", book });

};

export const deleteBook = async (req, res) => {
  const { id } = req.params;


  const book = await Book.destroy({
    where: {
      id
    }
  });

  res.json({ messsage: "Book deleted", book });

};

export const updateBook = async (req, res) => {
  const { title, genre, author } = req.body;
  const { id } = req.params;


  const book = await Book.update(
    {
      title,
      genre,
      author
    },
    {
      where: {
        id
      }
    }
  );

  res.json({ messsage: "Book updated", book });

};


export const getAllBooks = async (req, res) => {
  const books = await Book.findAll();
  if (!books) return res.json({ message: "No books available" });
  res.json({ messsage: "Books", books });

};

export const getSpecificBook = async (req, res) => {
  const { author, genre, title } = req.query;


  if (author) {
    const books = await Book.findAll({
      where: {
        author
      }
    });

    if (!books) {
      return res.json({ message: "No available books" });
    }

    return res.json({ message: "Author books", books });
  }

  if (genre) {
    const books = await Book.findAll({
      where: {
        genre
      }
    });

    if (!books) {
      return res.json({ message: "No available books" });
    }

    return res.json({ message: "Genre books", books });
  }

  if (title) {
    const book = await Book.findOne({
      where: {
        title
      }
    })

    if (!book) {
      return res.json({ message: "No available books" });
    }

    return res.json({ message: "Book title", book });
  }

};
