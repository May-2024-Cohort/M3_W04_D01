import axios from 'axios'
class BookService{

    constructor() {
        // Create a new instance of axios with a custom configuration
        this.api = axios.create({
          baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5005'
          // We set our API's base URL so that all requests use the same base URL
        });

        // Automatically set JWT token in the headers for every request
        this.api.interceptors.request.use(config => {
        // Retrieve the JWT token from the local storage
        const storedToken = localStorage.getItem('token');
   
        if (storedToken) {
          config.headers = { Authorization: `Bearer ${storedToken}` };
        }
   
        return config;
      });
     
      }

      getAllBooks(){
        return this.api.get('/books')
      }

      getBookForAuthor(id){
        return this.api.get(`/books/author/${id}`)
      }

      createBook(bookToCreate){
        return this.api.post('/books',bookToCreate)
      }

      updateBook(bookInfo,id){
        return this.api.put(`/books/${id}`,bookInfo)
      }



}


const bookService = new BookService()

export default bookService