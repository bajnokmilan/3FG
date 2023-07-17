const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
    });
});





var hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));

var hiddenElements = document.querySelectorAll('.hidden2');
hiddenElements.forEach((el) => observer.observe(el));

var hiddenElements = document.querySelectorAll('.hiddenfo');
hiddenElements.forEach((el) => observer.observe(el));