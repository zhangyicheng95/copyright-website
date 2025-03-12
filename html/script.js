document.addEventListener('DOMContentLoaded', function () {
    // 获取所有标签页和内容
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    // 标签页切换功能
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止默认的锚点跳转

            // 移除所有活动状态
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // 添加新的活动状态
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
                // 平滑滚动到内容区域
                // targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // 加载对应的内容
            loadContent(tabId);
        });
    });

    // 加载内容的函数
    function loadContent(tabId) {
        const contentContainer = document.getElementById(`${tabId}-content`);
        contentContainer.innerHTML = '<div class="loading">加载中...</div>';

        fetch(`http://localhost:5500/api/${tabId}?timestamp=${Date.now()}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
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
        console.log(data);
        switch (tabId) {
            case 'copyright':
                html = `
                    <div class="content-section">
                        <h3>${data.title}</h3>
                        <p class="description">${data.description}</p>
                        
                        <div class="search-box">
                            <form class="search-form" onsubmit="return false;">
                                <input type="text" placeholder="作品名称/登记号" id="searchInput">
                                <select id="typeFilter">
                                    <option value="">全部类型</option>
                                    <option value="音乐">音乐作品</option>
                                    <option value="文学">文学作品</option>
                                    <option value="影视">影视作品</option>
                                    <option value="软件">软件作品</option>
                                    <option value="美术">美术作品</option>
                                    <option value="摄影">摄影作品</option>
                                    <option value="建筑">建筑作品</option>
                                    <option value="戏剧">戏剧作品</option>
                                    <option value="曲艺">曲艺作品</option>
                                    <option value="舞蹈">舞蹈作品</option>
                                </select>
                                <select id="statusFilter">
                                    <option value="">全部状态</option>
                                    <option value="有效">有效</option>
                                    <option value="审核中">审核中</option>
                                    <option value="已过期">已过期</option>
                                    <option value="待续期">待续期</option>
                                </select>
                                <button onclick="filterCopyrights()">搜索</button>
                            </form>
                        </div>

                        <div class="copyright-list">
                            ${data.items.map(item => `
                                <div class="copyright-item">
                                    <h4>
                                        ${item.title}
                                        <span class="reg-num">${item.regNum}</span>
                                    </h4>
                                    <p>${item.content}</p>
                                    <div class="item-meta">
                                        <div class="meta-item">
                                            <span class="meta-label">登记日期：</span>
                                            <span>${item.date}</span>
                                        </div>
                                        <div class="meta-item">
                                            <span class="meta-label">版权所有：</span>
                                            <span>${item.owner}</span>
                                        </div>
                                        <div class="meta-item">
                                            <span class="meta-label">创作年份：</span>
                                            <span>${item.creationYear}年</span>
                                        </div>
                                        <div class="meta-item">
                                            <span class="meta-label">保护期限：</span>
                                            <span>至${item.protectionPeriod}</span>
                                        </div>
                                        <div class="meta-item">
                                            <span class="meta-label">状态：</span>
                                            <span class="status ${item.status === '有效' ? 'valid' : item.status === '审核中' ? 'pending' : 'expired'}">
                                                ${item.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <div class="pagination">
                            <!-- 分页按钮将通过 JavaScript 动态生成 -->
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

        // 初始化分页
        if (tabId === 'copyright') {
            initPagination(data.items);
        }
    }

    // 添加分页功能
    function initPagination(items, pageSize = 10) {
        const totalPages = Math.ceil(items.length / pageSize);
        const pagination = document.querySelector('.pagination');

        let html = '';
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="${i === 1 ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
        }

        pagination.innerHTML = html;
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

// 平滑滚动到指定元素
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 为页脚链接添加平滑滚动
document.querySelectorAll('.footer-section a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        scrollToElement(id);
    });
}); 