// ==== MULTILANGUAGE FULL ====
// Thêm key cho tất cả các text cần dịch trên toàn bộ trang
const translations = {
    vi: {
        'menu.follow-us': 'Theo dõi chúng tôi:',
        'menu.home': 'Trang chủ',
        'menu.products': 'Sản phẩm',
        'menu.about': 'Về chúng tôi',
        'menu.blog': 'Blog',
        'menu.contact': 'Liên hệ',
        'button.consult': 'Nhận tư vấn ngay',
        'banner.title': 'Than Sạch Từ Làng Nghề Việt Nam <br> Đối Tác Toàn Cầu Của Bạn',
        'banner.desc': 'Chúng tôi biến phế phẩm gỗ thành nhiên liệu không khói, nhiệt lượng cao, thân thiện với môi trường. Chất lượng vượt trội với giá trực tiếp từ nhà sản xuất.',
        'button.quote': 'Yêu cầu báo giá',
        'about.title': 'Sự Khác Biệt <br> Tạo Nên Vị Thế Dẫn Đầu',
        'about.desc1': 'Chủ Động Nguồn Cung & Giá - Kiểm soát 100% mùn cưa từ các làng nghề gỗ, đảm bảo sản lượng 800-1,500 tấn/tháng và giá gốc cạnh tranh. Với 15 Năm Kinh Nghiệm - Chúng tôi là bậc thầy trong công nghệ sản xuất than sạch, đảm bảo chất lượng đồng nhất, không pha trộn và đáp ứng mọi yêu cầu khắt khe từ nướng BBQ Trung Đông đến sưởi ấm Châu Âu.',
        'about.desc2': 'Giao Hàng Đúng Hẹn: Quy mô lớn, quy trình tối ưu, cam kết tiến độ cho mọi đơn hàng.',
        'about.counter1': 'Chất lượng tuyệt đối',
        'about.counter2': 'Số lượng sản phẩm',
        'about.cta.title': 'Liên hệ ngay với <br> chúng tôi',
        'about.cta.desc': 'Và nhận báo giá cạnh tranh <br> nhất thị trường.',
        'about.cta.button': 'Liên hệ ngay',
        'service.title': 'Khám Phá Các Dòng Sản Phẩm <br> Của Chúng Tôi',
        'service.premium.title': 'Hạng Premium',
        'service.premium.sub': 'Than Lục Giác',
        'service.premium.desc': 'Nhiệt lượng cao, cháy trên 4 giờ, cực ít khói. Lựa chọn hàng đầu cho các thị trường khó tính.',
        'service.standard.title': 'Hạng Standard',
        'service.standard.sub': 'Than Vuông',
        'service.standard.desc': 'Hiệu suất ổn định, giá cả cạnh tranh, phù hợp cho nhu cầu phổ thông.',
        'service.basic.title': 'Hạng Basic',
        'service.basic.sub': 'Than Vuông',
        'service.basic.desc': 'Hiệu suất ổn định, giá cả cạnh tranh, phù hợp cho nhu cầu phổ thông.',
        'service.normal.title': 'Hạng Normal',
        'service.normal.sub': 'Than Vuông',
        'service.normal.desc': 'Hiệu suất ổn định, giá cả cạnh tranh, phù hợp cho nhu cầu phổ thông.',
        'service.button': 'Thông Số Kỹ Thuật',
        'marquee.slogan': 'Chuyên nghiệp Uy Tín Chất Lượng &nbsp;',
        'marquee2.slogan': '- Chất Lượng Đồng Nhất - Nguồn Cung Bền Vững - Đối Tác Tin Cậy - Giá Cả Cạnh Tranh',
        'process.title': 'Quy Trình Hợp Tác',
        'process.desc': 'Chúng tôi luôn đặt sự rõ ràng và minh bạch làm nền tảng trong mọi giao dịch với khách hàng. Với mục tiêu mang đến trải nghiệm hợp tác đơn giản, đáng tin cậy và hiệu quả, quy trình đặt hàng của chúng tôi được chuẩn hóa thành 6 bước rõ ràng, từ khi tiếp nhận yêu cầu đến khi giao hàng và thanh toán.',
        'process.1.title': 'Tiếp nhận yêu cầu',
        'process.1.desc': 'Tiếp nhận thông tin chi tiết từ khách hàng như loại than cần mua, số lượng, tiêu chuẩn kỹ thuật, mục đích sử dụng, thời gian giao hàng và địa điểm nhận hàng.',
        'process.2.title': 'Sản xuất',
        'process.2.desc': 'Sau khi thống nhất đơn hàng, tiến hành khai thác và sản xuất theo đúng yêu cầu.',
        'process.3.title': 'Kiểm tra chất lượng',
        'process.3.desc': 'Đội ngũ QC (kiểm soát chất lượng) sẽ kiểm định từng lô sản phẩm trước khi đóng gói.',
        'process.4.title': 'Đóng gói',
        'process.4.desc': 'Sản phẩm được đóng gói cẩn thận theo tiêu chuẩn hoặc yêu cầu riêng biệt của khách hàng.',
        'process.5.title': 'Lưu kho/Vận chuyển',
        'process.5.desc': 'Hàng hóa sau khi kiểm tra và đóng gói sẽ được lưu trữ tạm thời tại kho trước khi vận chuyển.',
        'process.6.title': 'Thanh toán',
        'process.6.desc': 'Khách hàng được lựa chọn phương thức thanh toán linh hoạt theo thỏa thuận.',
        'timeline.2010': '2010: Khởi đầu là nhà cung cấp nguyên liệu thô (mùn cưa) cho các xưởng địa phương.',
        'timeline.2016': '2016: Mở rộng với 32 lò than, cung cấp cho các công ty thương mại và xuất khẩu.',
        'timeline.2025': '2025: Thành lập KeMixPort, chuyên kiểm soát chất lượng và xuất khẩu trực tiếp.',
        'timeline.2025plus': '2025+: Mục tiêu phát triển, nâng tầm Kemixport thành thương hiệu quốc tế.',
        'timeline.heading': 'Hành Trình 15 Năm <br> Khẳng Định Chất Lượng Than Sạch Việt',
        'cta.hours': 'Thứ 2 - Thứ 7: 8:00 am - 18:45pm',
        'cta.ready': 'Sẵn Sàng Nâng Tầm Nguồn Cung Của Bạn?',
        'cta.contact': 'Liên hệ với chúng tôi',
        'testimonials.heading': 'Cảm nhận của Khách hàng về chúng tôi',
        'testimonial.1.name': 'Nguyễn Văn Hùng',
        'testimonial.1.role': 'Giám đốc Công ty <br> Thương mại Gỗ Việt',
        'testimonial.1.text': 'Kemixport luôn giao hàng đúng hẹn, chất lượng than ổn định và hỗ trợ khách hàng rất tận tâm. Chúng tôi hoàn toàn yên tâm khi hợp tác lâu dài.',
        'testimonial.2.name': 'Trần Thị Mai',
        'testimonial.2.role': 'Chủ doanh nghiệp <br> BBQ tại Hà Nội',
        'testimonial.2.text': 'Than của Kemixport cháy lâu, ít khói, rất phù hợp cho nhà hàng của tôi. Đội ngũ tư vấn chuyên nghiệp, giải đáp mọi thắc mắc nhanh chóng.',
        'testimonial.3.name': 'Lê Quốc Dũng',
        'testimonial.3.role': 'Đối tác xuất khẩu tại Hàn Quốc',
        'testimonial.3.text': 'Tôi đánh giá cao sự minh bạch và chuyên nghiệp của Kemixport. Quy trình làm việc rõ ràng, sản phẩm đạt tiêu chuẩn xuất khẩu quốc tế.',
        'footer.home': 'Trang chủ',
        'footer.products': 'Sản phẩm',
        'footer.about': 'About us',
        'footer.blog': 'Blog',
        'footer.contact': 'Liên hệ',
        'footer.terms': 'Điều khoản sử dụng',
        'footer.privacy': 'Chính sách bảo mật',
        'footer.environment': 'Chính sách môi trường',
        'footer.copyright': 'Kemixport. Đã đăng ký bản quyền.',
        'footer.phone': 'Điện thoại/WhatsApp',
        'footer.hours': 'Giờ hành chính',
        'footer.email': 'Email hỗ trợ',
        'footer.address': 'Địa chỉ',
        'footer.hours.value': 'Thứ 2-Thứ 6: 9:00 - 17:00<br>Thứ 7: 9:00 - 14:00',
        'footer.address.value': '804 Quang Trung, Hà Đông,<br>Hà Nội, Việt Nam',
        'footer.desc': 'Chúng tôi cam kết nâng tầm trải nghiệm xuất khẩu than cho khách hàng. Đam mê đổi mới và chất lượng là kim chỉ nam của Kemixport.',
    },
    en: {
        'menu.follow-us': 'Follow us on:',
        'menu.home': 'Home',
        'menu.products': 'Products',
        'menu.about': 'About Us',
        'menu.blog': 'Blog',
        'menu.contact': 'Contact',
        'button.consult': 'Get Consultation',
        'banner.title': 'Clean Charcoal from Vietnam\'s Craft Villages <br> Your Global Partner',
        'banner.desc': 'We turn wood waste into smokeless, high-calorie, eco-friendly fuel. Superior quality at direct-from-manufacturer prices.',
        'button.quote': 'Request a Quote',
        'about.title': 'Globally Recognized Quality',
        'about.desc1': 'We are committed to quality, verified through rigorous testing. Official laboratory test results are in progress and will be updated soon.',
        'about.desc2': 'We pledge never to mix charcoal sources to ensure consistent quality.',
        'about.counter1': 'Excellent quality',
        'about.counter2': 'Output production',
        'about.cta.title': 'Contact us now',
        'about.cta.desc': 'And get the most competitive <br> quote on the market.',
        'about.cta.button': 'Contact now',
        'service.title': 'Discover Our Product Lines',
        'service.premium.title': 'Premium Grade',
        'service.premium.sub': 'Hexagonal Charcoal',
        'service.premium.desc': 'High heat, burns over 4 hours, very little smoke.',
        'service.standard.title': 'Standard Grade',
        'service.standard.sub': 'Square Charcoal',
        'service.standard.desc': 'Stable performance, competitive price, suitable for general needs.',
        'service.basic.title': 'Basic Grade',
        'service.basic.sub': 'Square Charcoal',
        'service.basic.desc': 'Stable performance, competitive price, suitable for general needs.',
        'service.normal.title': 'Normal Grade',
        'service.normal.sub': 'Square Charcoal',
        'service.normal.desc': 'Stable performance, competitive price, suitable for general needs.',
        'service.button': 'Technical Specs',
        'marquee.slogan': 'Professionalism, Prestige, Quality &nbsp;',
        'marquee2.slogan': '- Consistent Quality - Sustainable Supply - Trusted Partner - Competitive Price',
        'process.title': 'Cooperation Process',
        'process.desc': 'We always place clarity and transparency as the foundation in every transaction with our customers. With the goal of providing a simple, reliable, and efficient cooperation experience, our ordering process is standardized into 6 clear steps, from receiving requests to delivery and payment.',
        'process.1.title': 'Receive Request',
        'process.1.desc': 'Receive detailed information from the customer such as the type of charcoal needed, quantity, technical standards, purpose of use, delivery time, and delivery location.',
        'process.2.title': 'Production',
        'process.2.desc': 'After order confirmation, proceed with sourcing and production according to requirements.',
        'process.3.title': 'Quality Control',
        'process.3.desc': 'The QC (Quality Control) team inspects each batch before packaging.',
        'process.4.title': 'Packaging',
        'process.4.desc': 'Products are carefully packaged according to standards or the customer\'s specific requirements.',
        'process.5.title': 'Storage/Shipping',
        'process.5.desc': 'After inspection and packaging, goods are temporarily stored in the warehouse before shipping.',
        'process.6.title': 'Payment',
        'process.6.desc': 'Customers can choose flexible payment methods as agreed.',
        'timeline.2010': '2010: Started as a raw material (sawdust) supplier for local workshops.',
        'timeline.2016': '2016: Expanded with 32 charcoal kilns, supplying trading and export companies.',
        'timeline.2025': '2025: Established KeMixPort, specializing in quality control and direct export.',
        'timeline.2025plus': '2025+: Aiming to develop and elevate Kemixport into an international brand.',
        'timeline.heading': '15-Year Journey <br> Affirming the Quality of Vietnamese Clean Charcoal',
        'cta.hours': 'Mon - Sat: 8:00 am - 6:45 pm',
        'cta.ready': 'Ready to Upgrade Your Supply?',
        'cta.contact': 'Contact us',
        'testimonials.heading': 'Client Experiences That <br> Speak Volumes',
        'testimonial.1.name': 'Nguyen Van Hung',
        'testimonial.1.role': 'Director, Viet Wood Trading Co.',
        'testimonial.1.text': 'Kemixport always delivers on time, with consistent charcoal quality and dedicated customer support. We are completely confident in our long-term partnership.',
        'testimonial.2.name': 'Tran Thi Mai',
        'testimonial.2.role': 'BBQ Restaurant Owner in Hanoi',
        'testimonial.2.text': 'Kemixport charcoal burns long, produces little smoke, and is perfect for my restaurant. The consulting team is professional and answers all questions quickly.',
        'testimonial.3.name': 'Lee Jon Huyn',
        'testimonial.3.role': 'Export Partner in Korea',
        'testimonial.3.text': 'I highly appreciate Kemixport\'s transparency and professionalism.The workflow is clear and the products meet international export standards.',
        'footer.home': 'Home',
        'footer.products': 'Products',
        'footer.about': 'About Us',
        'footer.blog': 'Blog',
        'footer.contact': 'Contact',
        'footer.terms': 'Terms of use',
        'footer.privacy': 'Privacy',
        'footer.environment': 'Environmental Policy',
        'footer.copyright': 'Kemixport. All Rights Reserved.',
        'footer.phone': 'Phone/WhatsApp',
        'footer.hours': 'Working hours',
        'footer.email': 'Support email',
        'footer.address': 'Address',
        'footer.hours.value': 'Mon-Fri: 9:00 am - 5:00 pm<br>Sat: 9:00 am - 2:00 pm',
        'footer.address.value': '804 Quang Trung, Ha Dong,<br>Hanoi, Vietnam',
        'footer.desc': "We're committed to elevating the charcoal export experience for our clients. With a passion for innovation and quality craftsmanship, Kemixport leads the way.",
    }
};

function setLanguage(lang) {
    console.log("setLanguage");

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Nếu là nút có HTML (như <a> với icon), dùng innerHTML
            if (el.tagName === 'A' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'H5' || el.tagName === 'H6' || el.tagName === 'P' || el.tagName === 'SPAN' || el.tagName === 'DIV') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

function onLangChange() {

    const langSelect = document.getElementById('lang-select');
    const lang = langSelect.value;
    setLanguage(lang);
    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded");

    const langSelect = document.getElementById('lang-select');
    // Load ngôn ngữ đã lưu hoặc mặc định
    const savedLang = localStorage.getItem('lang') || 'en';
    langSelect.value = savedLang;
    setLanguage(savedLang);

    console.log("langSelect", langSelect);

    langSelect.addEventListener('change', function () {
        const lang = this.value;
        setLanguage(lang);
        localStorage.setItem('lang', lang);
    });
});
// ==== END MULTILANGUAGE FULL ==== 