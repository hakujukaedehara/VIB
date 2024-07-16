var teamMembers = [
    "welcome mr Ngô Xuân Dũng join Team 1",
    "welcome mrs Nguyễn Trần Minh Tú join Team 1",
    "welcome mrs Đỗ Thị Minh Nguyệt join Team 2",
    "welcome mr Mai Thanh Bình join Team 3",
    "welcome mr Trần Hữu Thuận join Team 1",
    "welcome mrs Phạm Tú Quỳnh join Team 2",
    "welcome mrs Nguyễn Thị Thắm join Team 3",
    "welcome mrs Cung Thị Thanh Thủy join Team 1",
    "welcome mr Lê Trần Hải join Team 2",
    "welcome mr Hoàng Nguyên Danh join Team 3",
    "welcome mrs Trần Thanh Hoa join Team 1",
    "welcome mrs Nguyễn Thu Trang join Team 2",
    "welcome mr Lỹ Văn Vũ join Team 3",
    "welcome mrs Phạm Thị Lý join Team 2",
    "welcome mrs Trần Ngọc Tuyết Anh join Team 3",
    "welcome mr Hoàng Văn Thiếu join Team 2",
    "welcome mr Nguyễn Xuân Dũng join Team 1",
    "welcome mrs Nguyễn Ngọc Hà join Team 2",
    "welcome mr Nguyễn Giang Nam join Team 3",
    "welcome mrs Nguyễn Thị Hồng Nhung join Team 2",
    "welcome mrs Vũ Hồng Hà join Team 3",
    "welcome mrs Lê Thị Thanh Tâm join Team 1",
    "welcome mr Phạm Hoàng Tuấn join Team 2",
    "welcome mr Trần Thế Anh join Team 2",
    "welcome mr Vũ Xuân Toàn join Team 3",
    "welcome mr Phí Văn Bảo join Team 1",
    "welcome mr Trần Văn Chính join Team 3",
    "welcome mr Đặng Tùng Hưng join Team 1",
    "welcome mr Hà Huy Giáp join Team 2",
    "welcome mr Nguyễn Vĩnh Nguyên join Team 3",
    "welcome mrs Diệp Thị Hòa join Team 2",
    "welcome mr Nguyễn Văn Tiệp join Team 1",
    "welcome mr Nguyễn Xuân Đô join Team 3",
    "welcome mrs Lê Thị Kim Thoa join Team 2",
    "welcome mrs Nguyễn Hồng Hạnh join Team 3",
    "welcome mr Trần Chí Linh join Team 1",
    "welcome mr Hồ Văn Nên join Team 1",
    "welcome mrs Lê Thị Thu Thủy join Team 1",
    "welcome mr Võ Tấn Đạt join Team 2",
    "welcome mr Võ Hoàng Lân join Team 3",
    "welcome mr Lê Anh Tuấn join Team 1",
    "welcome mr Phạm Tuấn Anh join Team 3",
    "welcome mrs Vũ Thị Tuyết join Team 2",
    "welcome mr Trần Đặng Trung join Team 3",
    "welcome mr Trần Quang Hùng join Team 1",
    "welcome mr Đặng Hoàng Phương Quang join Team 1",
    "welcome mr Đỗ Thái Bình join Team 2",
    "welcome mrs Bùi Thị Thư join Team 2",
    "welcome mr Nguyễn Thế Quốc Bảo join Team 3",
    "welcome mrs Đặng Thị Kim Cương join Team 1",
    "welcome mr Vũ Huy Bình join Team 3",
    "welcome mr Nguyễn Xuân Trường join Team 2",
    "welcome mrs Nguyễn Thị Thanh Hoa join Team 3",
    "welcome mr Phạm Tiến Dũng join Team 1"
];

function searchTeam() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
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
