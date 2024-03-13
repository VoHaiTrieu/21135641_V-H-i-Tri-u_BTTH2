/*bai1*/
function giaiPhuongTrinh() {
    var a = parseFloat(document.getElementById("input1").value);
    var b = parseFloat(document.getElementById("input2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("ketQua").innerHTML = "Vui lòng nhập số hợp lệ.";
    } else {
        if (a === 0) {
            document.getElementById("ketQua").innerHTML = "Phương trình không phải là phương trình bậc 1.";
        } else {
            var x = -b / a;
            document.getElementById("ketQua").innerHTML = "KẾT QUẢ: Nghiệm x = <span style='display:inline-block;text-align:center;'>" + x.toFixed(2) + "</span>";
        }
    }
/*bai4*/
 function calculateBMI() {
    // Lấy giá trị cân nặng từ input
    var weight = parseFloat(document.getElementById("weight").value);
    // Lấy giá trị chiều cao từ input
    var height = parseFloat(document.getElementById("height").value) / 100; // chuyển đổi chiều cao từ cm sang m

    // Tính chỉ số BMI
    var bmi = weight / (height * height);

    // Hiển thị kết quả
    var result = document.getElementById("result");
    if (!isNaN(bmi)) {
        var status = "";
        if (bmi < 18.5) {
            status = "Dưới chuẩn";
        } else if (bmi >= 18.5 && bmi < 25) {
            status = "Bình thường";
        } else if (bmi >= 25 && bmi < 30) {
            status = "Thừa cân";
        } else if (bmi >= 30 && bmi < 35) {
            status = "Béo phì cấp độ I";
        } else if (bmi >= 35 && bmi < 40) {
            status = "Béo phì cấp độ II";
        } else {
            status = "Béo phì cấp độ III";
        }
        result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + " - " + status;
    } else {
        result.innerHTML = "Vui lòng nhập cân nặng và chiều cao hợp lệ.";
    }
}

/*bai5*/
 function togglePassword() {
            var passwordInput = document.getElementById('password');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        }
