const shuoshuo_template =
    template`<div class="item">
        <div class="time">TOP ${0}</div>
        <div class="shuoshuo">
            <div class="header">
                <div class="wall-avatar img-fit"></div>
                <div class="usertime"><span class="user">江中${1}墙</span><span class="time">${2}</span></div>
            </div>
            <div class="content">${3}</div>
            <div class="foot">
                <span class="icon icon-cmt"></span><span class="num">${4}</span>
                <span class="icon icon-like"></span><span class="num">${5}</span>
                <span class="icon icon-view"></span><span class="num">${6}</span>
            </div>
            <a target="_blank" href="${7}">
                <div class="go">
                    <span class="icon icon-go-l"></span>
                </div>
            </a>
        </div>
    </div>`;

function get_name(qq) {
    return qq === '2485931633' ? '西' : '东';
}

function get_readtime(timestamp) {
    const d = new Date(timestamp * 1000);
    return d.getFullYear() + '年' + (d.getMonth()+1) + '月' + d.getDate() + '日 ' + d.getHours() + ':' + d.getMinutes();
}

function get_link(cellid, qq) {
    return `https://user.qzone.qq.com/${qq}/mood/${cellid}`;
}

const hot_cmt = document.getElementById('hot-cmt');
const hot_like = document.getElementById('hot-like');
const hot_view = document.getElementById('hot-view');

let index = 10;
for (const item of cmt_data.reverse()) {
    const html = stringToHtml(shuoshuo_template(
        `${index}, ${item.cmt_num} comments`,
        get_name(item.qq),
        get_readtime(item.time),
        item.title,
        item.cmt_num,
        item.like_num,
        item.view_num,
        get_link(item.cellid, item.qq),
    ));
    hot_cmt.appendChild(html);
    index --;
}

index = 10;
for (const item of like_data.reverse()) {
    const html = stringToHtml(shuoshuo_template(
        `${index}, ${item.like_num} likes`,
        get_name(item.qq),
        get_readtime(item.time),
        item.title,
        item.cmt_num,
        item.like_num,
        item.view_num,
        get_link(item.cellid, item.qq),
    ));
    hot_like.appendChild(html);
    index --;
}

index = 10;
for (const item of view_data.reverse()) {
    const html = stringToHtml(shuoshuo_template(
        `${index}, ${item.view_num} views`,
        get_name(item.qq),
        get_readtime(item.time),
        item.title,
        item.cmt_num,
        item.like_num,
        item.view_num,
        get_link(item.cellid, item.qq),
    ));
    hot_view.appendChild(html);
    index --;
}