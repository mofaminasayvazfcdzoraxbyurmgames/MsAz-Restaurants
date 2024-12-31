function validatePromoCode() {
            const correctCode1 = 'HAPPY2025'; 
            const correctCode2 = '20MSAZ25';
            const userCode = document.getElementById('promoCode').value;
            const message = document.getElementById('message');
            const sponsorCode = '#IAmASponsorOfMinasAyvaz';
            const correctCode3 = 'BYE2024'

                if (userCode === correctCode1) {
                window.location.href = "promo1active.html"; 
            } else if (userCode === correctCode2) {
              window.location.href = "promo1active.html"
            } else if (userCode === sponsorCode || userCode === correctCode3){
              window.location.href = "promo2active.html"
            } else {
                message.textContent = "Invalid promo code. Please try again.";
            }
        }
