import Book from "../../../db/models/booksModel.js";
import Borrow from "../../../db/models/borrowModel.js";

export const borrowBook = async (req, res) => {
  const { BookId } = req.params;
  const { id } = req.auth.user;

  const book = await Book.findByPk(BookId);

  if (!book) {
    return res.json({ message: "Book isn't found" });
  }

  if(!book.available) {
    return res.json({ message: "Book isn't available for borrow" });
  }

  const borrow = await Borrow.create({ UserId: id, BookId });

  await book.update({
    available: false
  })

  res.json({ message: "Book borrowed", borrow });

};

export const returnBook = async (req, res) => {

  const { borrowId } = req.body;
  const { BookId } = req.params;

  const borrow = await Borrow.findOne({
    where: {
      id: borrowId,
      BookId: BookId
    }
  });

  if (!borrow) {
    return res.json({
      message: "No borrow found"
    })
  }

  if (borrow.returnDate) {
    return res.json({
      message: "Book already returned"
    })
  }

  await borrow.update({ returnDate: new Date() });

  await Book.update({ available: true }, { where: { id: BookId } });

  res.json({ message: "Book returned", borrow });

};

export const getAllBorrows = async (req, res) => {
  const { id } = req.auth.user;


  const borrows = await Borrow.findAll({
    where: {
      UserId: id,
    },
    include: [Book]
  })

  res.json({ message: "borrowed books", borrows });

};
