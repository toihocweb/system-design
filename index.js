
const list = [
    "0. Foreword.html",
    "1. Join the Community.html",
    "2. Scale From Zero To Millions Of Users.html",
    "3. Back-of-the-envelope Estimation.html",
    "4. A Framework For System Design Interviews.html",
    "5. Design A Rate Limiter.html",
    "6. Design Consistent Hashing.html",
    "7. Design A Key-value Store.html",
    "8. Design A Unique ID Generator In Distributed Systems.html",
    "9. Design A URL Shortener.html",
    "10. Design A Web Crawler.html",
    "11. Design A Notification System.html",
    "12. Design A News Feed System.html",
    "13. Design A Chat System.html",
    "14. Design A Search Autocomplete System.html",
    "15. Design YouTube.html",
    "16. Design Google Drive.html",
    "17. Proximity Service.html",
    "18. Nearby Friends.html",
    "19. Google Maps.html",
    "20. Distributed Message Queue.html",
    "21. Metrics Monitoring and Alerting System.html",
    "22. Ad Click Event Aggregation.html",
    "23. Hotel Reservation System.html",
    "24. Distributed Email Service.html",
    "25. S3-like Object Storage.html",
    "26. Real-time Gaming Leaderboard.html",
    "27. Payment System.html",
    "28. Digital Wallet.html",
    "29. Stock Exchange.html",
    "30. The Learning Continues.html"
];


const ul = document.querySelectorAll(".ant-menu.ant-menu-root.ant-menu-inline.ant-menu-dark li")

ul.forEach((li, idx) => {
    li.addEventListener("click", (e) => {
        window.location.href = `./${list[idx]}`;
    })
})