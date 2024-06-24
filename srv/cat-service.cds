using my.bookshop as my from '../db/data-model';

service CatalogService {
    @restrict: [{
        grant: '*',
        to   : 'Admin'
    }]
   entity Books as projection on my.Books;
   entity Users as projection on my.Users;
   entity BooksLoan as projection on my.BooksLoan;
   entity Reservation as projection on my.Reservation;
   } 

