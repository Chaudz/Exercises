interface CD {
  maCD: number;
  tuaCD: string;
  caSy: string;
  soBaiHat: number;
  giaThanh: number;
}
class listCD {
  private arrayCD: CD[];
  private sizeMax: number;
  constructor(size: number) {
    this.arrayCD = [];
    this.sizeMax = size;
  }
  them(cd: CD) {
    if (this.arrayCD.length >= this.sizeMax) {
      console.log("Số lượng CV đã đầy");
      return false;
    }
    if (this.arrayCD.some((item) => item.maCD === cd.maCD)) {
      // chỉ cần 1 cái true là trả vè true
      console.log("Ma này đã tồn tại");
      return false;
    }
    this.arrayCD.push(cd);
    console.log("Thêm thành công");
    return true;
  }
  soLuongCd() {
    return this.arrayCD.length;
  }
  tongGiaThanhCD() {
    let total = this.arrayCD.reduce((total, cd) => total + cd.giaThanh, 0);
    return total;
  }
  sapXepGiamDan() {
    this.arrayCD.sort((a, b) => b.giaThanh - a.giaThanh);
  }
  sapXepTangDan() {
    this.arrayCD.sort((a, b) => a.giaThanh - b.giaThanh);
  }
  print() {
    this.arrayCD.forEach((element) => {
      console.log(element);
    });
  }
}
let cdList = new listCD(3);
cdList.them({
  maCD: 2,
  tuaCD: "Album 2",
  caSy: "Ca sỹ B",
  soBaiHat: 8,
  giaThanh: 200000,
});
cdList.them({
  maCD: 1,
  tuaCD: "Album 2",
  caSy: "Ca sỹ B",
  soBaiHat: 8,
  giaThanh: 200000,
});
cdList.them({
  maCD: 3,
  tuaCD: "Album 2",
  caSy: "Ca sỹ B",
  soBaiHat: 8,
  giaThanh: 200000,
});
cdList.them({
  maCD: 4,
  tuaCD: "Album 2",
  caSy: "Ca sỹ B",
  soBaiHat: 8,
  giaThanh: 200000,
});
cdList.print();
