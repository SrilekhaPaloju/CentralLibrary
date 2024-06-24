sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/app/libraryfiorielement/test/integration/FirstJourney',
		'com/app/libraryfiorielement/test/integration/pages/BooksList',
		'com/app/libraryfiorielement/test/integration/pages/BooksObjectPage',
		'com/app/libraryfiorielement/test/integration/pages/UsersObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, UsersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/app/libraryfiorielement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheUsersObjectPage: UsersObjectPage
                }
            },
            opaJourney.run
        );
    }
);