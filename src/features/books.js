import { createSlice } from "@reduxjs/toolkit";
import jsonBooks from "../books.json";

export const booksSlice = createSlice({
    name: "books",
    initialState: { value: { books: jsonBooks, booksToDisplay: jsonBooks, maxPriceSort: false, minRatingSort: false, filteredText: "" } },
    reducers: {
        addBookToBooks: (state, action) => {
            state.value.books.push(action.payload);

            if (!action.payload.title.toLowerCase().includes(state.value.filteredText.toLocaleLowerCase()))
                return;
            state.value.booksToDisplay.push(action.payload);
            booksSlice.caseReducers.sortBooksToDisplay(state);
        },

        deleteBookFromBooks: (state, action) => {
            state.value.books = state.value.books.filter((book) => book.id !== action.payload);
            state.value.booksToDisplay = state.value.booksToDisplay.filter((book) => book.id !== action.payload);
        },

        updatePriceOfBook: (state, action) => {
            let book = state.value.books.find(book => book.id === action.payload.bookData.id);
            book.price = action.payload.price;
            book = state.value.booksToDisplay.find(book => book.id === action.payload.bookData.id);
            book.price = action.payload.price;
            booksSlice.caseReducers.sortBooksToDisplay(state);
        },
        updateRatingOfBook: (state, action) => {
            let book = state.value.books.find(book => book.id === action.payload.bookData.id);
            book.rating = action.payload.rating;
            book = state.value.booksToDisplay.find(book => book.id === action.payload.bookData.id);
            book.rating = action.payload.rating;
            booksSlice.caseReducers.sortBooksToDisplay(state);
        },

        changeSort: (state, action) => {
            state.value.maxPriceSort = action.payload.maxPrice;
            state.value.minRatingSort = action.payload.minRating;
            booksSlice.caseReducers.sortBooksToDisplay(state);
        },

        sortBooksToDisplay: (state) => {

            if (state.value.maxPriceSort)
                state.value.booksToDisplay.sort(function (a, b) { return (b.price - a.price) });
            else if (state.value.minRatingSort)
                state.value.booksToDisplay.sort(function (a, b) { return (a.rating - b.rating) });
            else
                state.value.booksToDisplay.sort(function (a, b) { return (a.id - b.id) });
        },

        filterSearch: (state, action) => {
            state.value.filteredText = action.payload;
            state.value.booksToDisplay =
                state.value.books.filter(book => book.title.toLowerCase().includes(state.value.filteredText));
            booksSlice.caseReducers.sortBooksToDisplay(state);
        }
    }
});

export const { addBookToBooks, deleteBookFromBooks, updatePriceOfBook, updateRatingOfBook,
    sortBooksToDisplay, changeSort, filterSearch } = booksSlice.actions;

export default booksSlice.reducer;