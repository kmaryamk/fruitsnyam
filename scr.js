document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('products-container')) return;

    const products = [
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="},
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="},
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="},
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="},
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="},
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="},
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="},
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="}
    ]

    const cont = document.getElementById('products-container');

    products.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-sm-6';
        col.innerHTML = `
            <div class = "card h-100">
                <img src = "${item.img}" class = "card-img-top">
                <div class = "card-body">
                    <h5 class = "card-title">${item.name}</h5>
                    <p class = "card-text">${item.price} руб./кг</p>
                </div>
            </div>
        `;
        cont.appendChild(col);
    });
});