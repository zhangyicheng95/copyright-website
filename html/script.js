document.addEventListener('DOMContentLoaded', function () {
    // 获取所有标签页和内容
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    // 标签页切换功能
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // 移除所有活动状态
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // 添加新的活动状态
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            // 加载对应的内容
            loadContent(tabId);
        });
    });

    // 加载内容的函数
    function loadContent(tabId) {
        const contentContainer = document.getElementById(`${tabId}-content`);
        contentContainer.innerHTML = '<div class="loading">加载中...</div>';

        fetch(`http://localhost:5500/api/${tabId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                renderContent(tabId, data);
            })
            .catch(error => {
                console.error('Error:', error);
                contentContainer.innerHTML = `
                    <div class="error">
                        抱歉，加载失败。请稍后重试。
                    </div>
                `;
            });
    }

    // 渲染内容的函数
    function renderContent(tabId, data) {
        const contentContainer = document.getElementById(`${tabId}-content`);
        let html = '';

        switch (tabId) {
            case 'copyright':
                html = `
                    <div class="content-section">
                        <h3>${data.title}</h3>
                        <p class="description">${data.description}</p>
                        <div class="copyright-list">
                            ${data.items.map(item => `
                                <div class="copyright-item">
                                    <h4>${item.title}</h4>
                                    <p>${item.content}</p>
                                    <div class="item-meta">
                                        <span class="date">登记日期：${item.date}</span>
                                        <span class="status ${item.status === '有效' ? 'valid' : 'pending'}">
                                            状态：${item.status}
                                        </span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'services':
                html = `
                    <div class="content-section">
                        <h3>${data.title}</h3>
                        <p class="description">${data.description}</p>
                        <div class="services-grid">
                            ${data.services.map(service => `
                                <div class="service-card">
                                    <h4>${service.name}</h4>
                                    <p>${service.description}</p>
                                    <div class="service-details">
                                        <span class="price">${service.price}</span>
                                        <span class="duration">${service.duration}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'contact':
                html = `
                    <div class="content-section">
                        <h3>${data.title}</h3>
                        <p class="description">${data.description}</p>
                        <div class="contact-locations">
                            ${data.locations.map(location => `
                                <div class="location-card">
                                    <h4>${location.city}</h4>
                                    <p><i class="icon-address"></i>${location.address}</p>
                                    <p><i class="icon-phone"></i>${location.tel}</p>
                                    <p><i class="icon-email"></i>${location.email}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="social-media">
                            <p><strong>关注我们：</strong></p>
                            <p>微信：${data.socialMedia.weixin}</p>
                            <p>微博：${data.socialMedia.weibo}</p>
                        </div>
                    </div>
                `;
                break;
        }

        contentContainer.innerHTML = html;
    }

    // 初始加载第一个标签页的内容
    loadContent('copyright');
});

function jsonp(url, callback) {
    const script = document.createElement('script');
    const callbackName = 'jsonp_' + Math.round(100000 * Math.random());
    window[callbackName] = function (data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };
    script.src = `${url}?callback=${callbackName}`;
    document.body.appendChild(script);
} 