let data = [
    {
        id: 1,
        title: 'Üzləşmə',
        author: 'Rövşən Abdullaoğlu',
        price: 9,
        description: 'Bu kitab özünlə üzləşəcəyin aləmə açılan qapıdır. Özünə doğru aç.',
        category: 'psixologiya',
        count: 0,
        img: 'https://static.insales-cdn.com/images/products/1/4097/964259841/9bb2d0c7-ca11-4bf1-b143-0db2025e18a3.jpeg'
    },
    {
        id: 2,
        title: 'Cinayət və Cəza',
        author: 'Fyodor Dostoyevski',
        price: 13,
        description: 'Günahkar insanın cəzası nə zamandan başlayır? onun günah törətdiyi gündənmi, yoxsa günahını dərk etdiyi andan?',
        category: 'roman',
        count: 0,
        img: 'https://www.teaspress.az/storage/2510/conversions/cinayet-ve-ceza-front-book.jpg'
    },
    {
        id: 3,
        title: 'Abaddon',
        author: 'Rövşən Abdullaoğlu',
        price: 10,
        description: 'Qə­tiyyən göründüyü kimi deyil. Daha da dəh­şət­lisi, qə­tiyyən özü­nün sandığı kimi də deyil. O, sadəcə olaraq, Abaddondur.',
        category: 'detektiv',
        count: 0,
        img: 'https://novella.az/wp-content/uploads/2020/07/Webp.net-compress-image-85.jpg'
    },
    {
        id: 4,
        title: 'Səfillər',
        author: 'Viktor Hüqo',
        price: 16,
        description: 'Əgər "Səfıllər" olmasaydı, dünya ədəbiyyatı həqiqətən də bir xeyli yoxsul görünərdi.',
        category: 'klassika',
        count: 0,
        img: 'https://www.qanun.az/images/news/compressed/2021-09-20-09-25-241632115524.jpg'
    },
    {
        id: 5,
        title: 'Siçanlar və adamlar',
        author: 'John Steinbeck',
        price: 5,
        description: 'Bir parça torpaq həsrəti ilə yaşayan, bu həsrətlə də ömrünü başa vuran kəslər, yazıçının çox yaxından tanıdığı insanlardır.',
        category: 'klassika',
        count: 0,
        img: 'https://static.insales-cdn.com/images/products/1/3528/980618696/Steynbek_Sicanlar_ve_adamlar_ESAS.png'
    },
    {
        id: 6,
        title: 'Bu şəhərdə kimsə yoxdur',
        author: 'Rövşən Abdullaoğlu',
        price: 12,
        description: 'Öz “mələyi” ilə qarşılaşmadan heç kəs bu həyatıtərk etməz – bəlkə, bu, bir insandır, bəlkə də, bir kitab.',
        category: 'roman',
        count: 0,
        img: 'https://kitabal.az/img/books/135335.jpg'
    },
    {
        id: 7,
        title: 'Çərpələng uçuran',
        author: 'Xalid Huseyni',
        price: 9,
        description: 'Öz qorxaqlığından çıldıran Əmir ayılanda artıq gec olduğunu düşünür. Haçansa gec olurmu?',
        category: 'roman',
        count: 0,
        img: 'https://upload.wikimedia.org/wikipedia/az/e/e1/%C3%87%C9%99rp%C9%99l%C9%99ng_u%C3%A7uran.jpeg'
    },
    {
        id: 8,
        title: 'Xəstə ruhlar',
        author: 'Elxan Elatlı',
        price: 8,
        description: 'Bu mahalda baş verən faciələrin kökü 150 il əvvələ gedir.',
        category: 'detektiv',
        count: 0,
        img: 'https://static.insales-cdn.com/images/products/1/7083/282418091/Xeste-ruhlar--uz-qabigi-cover_1559112417.jpg'
    },
    {
        id: 9,
        title: 'Min möhtəşəm günəş',
        author: 'Xalid Huseyni',
        price: 11,
        description: '“Min möhtəşəm günəş” güclü, dramatik, lirik romandır – oxucu qəlbini riqqətə gətirən ağrısı, sevinci ilə, nəcib məqsədi, sonsuz lütfü ilə.',
        category: 'roman',
        count: 0,
        img: 'https://upload.wikimedia.org/wikipedia/az/0/04/Min-m%C3%B6ht%C9%99%C5%9F%C9%99m-g%C3%BCn%C9%99%C5%9F.jpg'
    },
    {
        id: 10,
        title: 'Yeraltından qeydlər',
        author: 'Fyodor Dostoyevski',
        price: 6,
        description: 'O, bu insanlardan daha ağıllı və gözəl yaşamağa layiq olduğu halda qaranlıq yeraltında qalmağa və dünyaya ordan baxmağa məcburdur.',
        category: 'psixologiya',
        count: 0,
        img: 'https://www.qanun.az/images/news/compressed/2025-04-10-16-22-191744287739.jpg'
    },
]

function renderBooks(bookArray) {
    books.innerHTML = "";

    if (bookArray.length === 0) {
        books.innerHTML = "<p style='text-align:center; font-size:24px; color:#999; margin-top: 50px'>Uyğun kitab tapılmadı 📚</p>";
        return;
    }

    bookArray.forEach(book => {
        books.innerHTML += `<div class="book">
                                <img class="book-img" src="${book.img}" alt="">
                                <div class="book-content">
                                    <h2 class="book-title">${book.title}</h2>
                                    <span class="book-price">${book.price}₼</span>
                                    <p class="description">${book.description}</p>
                                    <button class="btn" onclick="addToBasket(${book.id})">
                                        <i class="fa-solid fa-cart-shopping"></i>Səbətə at 
                                    </button>
                                </div>
                            </div>`;
    });
}

const books = document.getElementById("books");
renderBooks(data);

let total = 0;
function renderBasket() {
    total = 0;
    const products = document.getElementById("products");
    products.innerHTML = "";
    let totalCount = 0;

    data.forEach(item => {
        if (item.count > 0) {
            const itemTotal = item.price * item.count;
            total += itemTotal;
            totalCount += item.count;

            products.innerHTML += `<div class="product">
                                            <img src="${item.img}" alt="${item.title}" class="product-img">
                                            <div class="product-info">
                                                <h4>${item.title}</h4>
                                                <h5>${item.author}</h5>
                                                <div class="quantity-control">
                                                    <button onclick="changeCount(${item.id}, -1)">-</button>
                                                    <p class="quantity">${item.count}</p>
                                                    <button onclick="changeCount(${item.id}, 1)">+</button>
                                                </div>
                                            </div>
                                            <span>${itemTotal}₼</span>
                                        </div>`;
        }
    });
    let endirim = totalCount >= 2 ? total * 0.25 : 0;
    const catdirilma = total > 0 ? 4 : 0;
    const finalTotal = total - endirim + catdirilma;
    document.getElementById("total-price").textContent = total.toFixed(2) + "₼";
    document.getElementById("discount").textContent = endirim.toFixed(2) + "₼";
    document.getElementById("delivery").textContent = catdirilma.toFixed(2) + "₼";
    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + "₼";

    const ferqliMehsulSayi = data.filter(item => item.count > 0).length;
    document.getElementById("basket-count").innerHTML = ferqliMehsulSayi;
}

let basket = [];

function addToBasket(bookId) {
    const book = data.find(item => item.id == bookId);
    if (!book) return;
    book.count += 1;
    renderBasket();

    Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'success',
        title: 'Səbətə əlavə olundu',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    });
}

function clearBasket() {
    Swal.fire({
        title: 'Əminsən?',
        text: "Səbət tamamilə silinəcək!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4b9feeff',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Bəli, sil!',
        cancelButtonText: 'Xeyr'
    }).then((result) => {
        if (result.isConfirmed) {
            data.forEach(item => item.count = 0);
            renderBasket();
            closePanels()
            Swal.fire({
                icon: 'success',
                title: 'Səbət təmizləndi!',
                showConfirmButton: false,
                timer: 1200
            });
        }
    });
}

function confirmOrder() {
    if (total > 0) {
        const orderItems = data
            .filter(item => item.count > 0)
            .map(item => ({
                id: item.id,
                title: item.title,
                price: item.price * item.count,
                count: item.count,
                date: new Date().toLocaleString(),
                status: "Yoldadır"
            }));

        orders.push(...orderItems);
        Swal.fire({
            icon: 'success',
            title: 'Sifarişin qəbul edildi!',
            confirmButtonText: 'Bağla'
        }).then(() => {
            clearBasketWithoutAlert();
            closePanels();
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Səbət boşdur!',
            text: 'Məhsul əlavə etməmisən',
            confirmButtonText: 'Bağla'
        });
    }
}

function clearBasketWithoutAlert() {
    data.forEach(item => item.count = 0);
    renderBasket();
}

const uniqueCategories = [...new Set(data.map(book => book.category))];
const uniqueAuthors = [...new Set(data.map(book => book.author))];

const categorySelect = document.getElementById("category-select");
const authorSelect = document.getElementById("author-select");

function populateSelect(el, arr) {
    let options = '<option value="">Hamısı</option>';
    arr.forEach(value => {
        options += `<option value="${value}">${value}</option>`;
    });
    el.innerHTML = options;
}

populateSelect(categorySelect, uniqueCategories);
populateSelect(authorSelect, uniqueAuthors);

function applyFilter() {
    const selectedCategory = categorySelect.value;
    const selectedAuthor = authorSelect.value;

    let filteredBooks = data;
    if (selectedCategory) {
        filteredBooks = filteredBooks.filter(book => book.category === selectedCategory);
    }
    if (selectedAuthor) {
        filteredBooks = filteredBooks.filter(book => book.author === selectedAuthor);
    }
    renderBooks(filteredBooks);
}

function resetFilter() {
    categorySelect.value = "";
    authorSelect.value = "";
    renderBooks(data);

    Swal.fire({
        icon: 'success',
        title: 'Filtrlər sıfırlandı!',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        closePanels();
    });
}

const filterPanel = document.getElementById("filterPanel");
const basketPanel = document.getElementById("basketPanel");
const backdrop = document.getElementById("backdrop");
const ordersPanel = document.getElementById('ordersPanel');

function openFilter() {
    filterPanel.classList.add("active");
    basketPanel.classList.remove("active");
    backdrop.classList.add("active");
}

function openBasket() {
    const totalCount = data.reduce((sum, item) => sum + item.count, 0);
    if (totalCount === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Səbət boşdur',
            text: 'Əlavə etmək üçün məhsul seç',
            timer: 1500,
            showConfirmButton: false
        });
        return;
    }
    basketPanel.classList.add("active");
    filterPanel.classList.remove("active");
    backdrop.classList.add("active");
}

function closePanels() {
    filterPanel.classList.remove("active");
    basketPanel.classList.remove("active");
    backdrop.classList.remove("active");
    ordersPanel.classList.remove("active");
}

function changeCount(id, n) {
    const product = data.find(item => item.id === id);
    product.count += n;
    if (product.count <= 0) product.count = 0;
    renderBasket();
}

let orders = [];

function openOrdersModal() {
    const tbody = document.querySelector("#ordersTable tbody");
    tbody.innerHTML = "";

    if (orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="font-size: 20px; color: #B22222;">Sifariş yoxdur</td></tr>`;
    } else {
        orders.forEach((order, index) => {
            tbody.innerHTML += `<tr>
                            <td>${index + 1}</td>
                            <td class="order-title">${order.title}</td>
                            <td>${order.date}</td>
                            <td>${order.count}</td> <!-- say -->
                            <td>${order.price}₼</td>
                            <td class="order-status">${order.status}</td>
                        </tr>`;
        });
    }

    ordersPanel.classList.add("active");
    backdrop.classList.add("active");
}

function closeOrdersModal() {
    ordersPanel.classList.remove("active");
    backdrop.classList.remove("active");
}
