document.addEventListener('DOMContentLoaded', function () {
    // lấy table body để thay đổi
    var tableBody = document.getElementById('my-table-data');
// xử lý request lên server.
    var xmlHttpRequest = new XMLHttpRequest();
// sự kiện khi request thay đổi trạng thái
    xmlHttpRequest.onreadystatechange = function () {
        // kiểm tra khi trạng thái request đã hoàn thành (readyState = 1) và thành công (status = 200) (thất bại = 500)
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var data = JSON.parse(xmlHttpRequest.responseText); // ép kiểu dữ liệu nhận về thành json;
            var newContent = ''; // tạo ra biến content mới để cộng dồn và update vào view.
            for (let i = 0; i < data.length; i++) {
                // sử dụng dấu ` để nhồi biến vào html dễ dàng hơn.
                newContent += `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].price}</td>
            <td><image src="${data[i].thumbnail}" style="width: 150px"></image></td>
        </tr>`;
            }
            tableBody.innerHTML = newContent; // thay đổi nội dung table.
        }
    }
    xmlHttpRequest.open('get', 'http://localhost:8080/api/v1/products', false);
    xmlHttpRequest.send();
})


