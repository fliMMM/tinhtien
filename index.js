const total = document.getElementById("total");
const voucher = document.getElementById("voucher");
const calButton = document.getElementById("calButton");
const foodDetailDong = document.getElementById("foodDetailDong");
const foodDetailDBach = document.getElementById("foodDetailDBach");
const dong = document.getElementById("dong");
const bach = document.getElementById("bach");

function caculate() {
  const voucherValue = Number(voucher.value);

  const reduceEach = Number(voucherValue / 2);

  const Dong =
    foodDetailDong.value
      .split(",")
      .map((item) => Number(item.split(":")[1]))
      .reduce((x, y) => x + y) - reduceEach;
  const Bach =
    foodDetailBach.value
      .split(",")
      .map((item) => Number(item.split(":")[1]))
      .reduce((x, y) => x + y) - reduceEach;

  dong.innerText = "Đông: " + Dong;
  bach.innerText = "Bách" + Bach;
}

calButton.addEventListener("click", caculate);
