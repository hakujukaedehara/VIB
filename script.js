var teamMembers = [
    "Welcome Mr Ngô Xuân Dũng join Team 1",
    "Welcome Mrs Nguyễn Trần Minh Tú join Team 1",
    "Welcome Mrs Đỗ Thị Minh Nguyệt join Team 2",
    "Welcome Mr Mai Thanh Bình join Team 3",
    "Welcome Mr Trần Hữu Thuận join Team 1",
    "Welcome Mrs Phạm Tú Quỳnh join Team 2",
    "Welcome Mrs Nguyễn Thị Thắm join Team 3",
    "Welcome Mrs Cung Thị Thanh Thủy join Team 1",
    "Welcome Mr Lê Trần Hải join Team 2",
    "Welcome Mr Hoàng Nguyên Danh join Team 3",
    "Welcome Mrs Trần Thanh Hoa join Team 1",
    "Welcome Mrs Nguyễn Thu Trang join Team 2",
    "Welcome Mr Lỹ Văn Vũ join Team 3",
    "Welcome Mrs Phạm Thị Lý join Team 2",
    "Welcome Mrs Trần Ngọc Tuyết Anh join Team 3",
    "Welcome Mr Hoàng Văn Thiếu join Team 2",
    "Welcome Mr Nguyễn Xuân Dũng join Team 1",
    "Welcome Mrs Nguyễn Ngọc Hà join Team 2",
    "Welcome Mr Nguyễn Giang Nam join Team 3",
    "Welcome Mrs Nguyễn Thị Hồng Nhung join Team 2",
    "Welcome Mrs Vũ Hồng Hà join Team 3",
    "Welcome Mrs Lê Thị Thanh Tâm join Team 1",
    "Welcome Mr Phạm Hoàng Tuấn join Team 2",
    "Welcome Mr Trần Thế Anh join Team 2",
    "Welcome Mr Vũ Xuân Toàn join Team 3",
    "Welcome Mr Phí Văn Bảo join Team 1",
    "Welcome Mr Trần Văn Chính join Team 3",
    "Welcome Mr Đặng Tùng Hưng join Team 1",
    "Welcome Mr Hà Huy Giáp join Team 2",
    "Welcome Mr Nguyễn Vĩnh Nguyên join Team 3",
    "Welcome Mrs Diệp Thị Hòa join Team 2",
    "Welcome Mr Nguyễn Văn Tiệp join Team 1",
    "Welcome Mr Nguyễn Xuân Đô join Team 3",
    "Welcome Mrs Lê Thị Kim Thoa join Team 2",
    "Welcome Mrs Nguyễn Hồng Hạnh join Team 3",
    "Welcome Mr Trần Chí Linh join Team 1",
    "Welcome Mr Hồ Văn Nên join Team 1",
    "Welcome Mrs Lê Thị Thu Thủy join Team 1",
    "Welcome Mr Võ Tấn Đạt join Team 2",
    "Welcome Mr Võ Hoàng Lân join Team 3",
    "Welcome Mr Lê Anh Tuấn join Team 1",
    "Welcome Mr Phạm Tuấn Anh join Team 3",
    "Welcome Mrs Vũ Thị Tuyết join Team 2",
    "Welcome Mr Trần Đặng Trung join Team 3",
    "Welcome Mr Trần Quang Hùng join Team 1",
    "Welcome Mr Đặng Hoàng Phương Quang join Team 1",
    "Welcome Mr Đỗ Thái Bình join Team 2",
    "Welcome Mrs Bùi Thị Thư join Team 2",
    "Welcome Mr Nguyễn Thế Quốc Bảo join Team 3",
    "Welcome Mrs Đặng Thị Kim Cương join Team 1",
    "Welcome Mr Vũ Huy Bình join Team 3",
    "Welcome Mr Nguyễn Xuân Trường join Team 2",
    "Welcome Mrs Nguyễn Thị Thanh Hoa join Team 3",
    "Welcome Mr Phạm Tiến Dũng join Team 1"
];

function searchTeam() {
    var searchTerm = document.getElementById("searchInput").value.trim().LowerCase();
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    if (searchTerm === "") {
        resultDiv.innerHTML = "<p>Vui lòng nhập tên để tìm kiếm.</p>";
        return;
    }

    var foundMembers = teamMembers.filter(function(member) {
        return member.toLowerCase().includes(searchTerm);
    });

    if (foundMembers.length === 0) {
        resultDiv.innerHTML = "<p>Không tìm thấy thành viên nào có tên này.</p>";
    } else {
        foundMembers.forEach(function(member) {
            resultDiv.innerHTML += "<p>" + member + "</p>";
        });
    }
}
