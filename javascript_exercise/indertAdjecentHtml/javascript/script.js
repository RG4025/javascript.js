
first.insertAdjacentHTML ('beforebegin' , '<h3 class="first_class"> Adding the html to previous one </h3>');
first.insertAdjacentHTML ('beforeend' , '<h3 class="first_class"> Adding the html to previous two </h3>');
first.insertAdjacentHTML ('afterbegin' , '<h3 class="first_class"> Adding the html to previous three </h3>');
first.insertAdjacentHTML ('afterend' , '<h3 class="first_class"> Adding the html to previous four </h3>');

// after adding the remove method in the elment it wiil only remove the original and beforeend and afterbegin content only and not reemoves the beforebegin and afterend remain on the webpage
first.remove();

