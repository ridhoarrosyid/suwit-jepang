// function untuk mendapatkan pilihan lawan
function pilihanLawan() {
  const angka = Math.floor(Math.random() * 3 + 1);
  if (angka === 1) {
    return "rock";
  } else if (angka === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

// mengambil element tombol untuk pilihan player
const rock = document.getElementsByClassName("pilihan")[1];
const paper = document.getElementsByClassName("pilihan")[2];
const scissor = document.getElementsByClassName("pilihan")[3];

// function untuk mengetahui siapa yang menang dan siapa yang kalah
function hasilPermainan(pilihanLawan, pilihanPemain) {
  if (pilihanLawan === pilihanPemain) {
    return "SERI";
  }
  if (pilihanLawan === "rock") {
    return pilihanPemain === "paper" ? "MENANG" : "KALAH";
  }
  if (pilihanLawan === "paper") {
    return pilihanPemain === "rock" ? "KALAH" : "MENANG";
  }
  if (pilihanLawan === "scissor") {
    return pilihanPemain === "paper" ? "KALAH" : "MENANG";
  }
}

// function mengganti kotak hasil permainan
function menggantiKotakHasil(hasil) {
  // mendapatkan element kotak hasil yang akan diganti
  const kotakHasil = document.getElementsByTagName("p")[0];
  // membuat elemen yang akan menggantikan
  const paragraf = document.createElement("p");
  //   membuat isi paragraf
  const text = document.createTextNode(hasil);
  //   memasukan teks ke dalam paragraf baru
  paragraf.appendChild(text);
  //   mendapapaktan parentnode yaitu container
  const container = document.getElementsByClassName("container")[0];
  //   mengganti hasil yang lama dengan hasil yang baru
  container.replaceChild(paragraf, kotakHasil);
}

// mengganti gambar pada kotak pilihan lawan
function menggantiGambarLawan(pilihan) {
  // mendapatkan element gambar
  const gambarLawan = document.getElementsByTagName("img")[0];

  if (pilihan === "rock") {
    return gambarLawan.setAttribute(
      "src",
      "https://img.freepik.com/free-vector/illustration-fist-punching-through-red-paper_1284-45614.jpg?w=740&t=st=1687162191~exp=1687162791~hmac=7ee7453828e2e4eb1e2f4c0ac1fc4e9be599b4eafd3ac963a0cd5b613d41a4b2"
    );
  }
  if (pilihan === "paper") {
    return gambarLawan.setAttribute(
      "src",
      "https://img.freepik.com/free-photo/front-view-hand-showing-palm_23-2148775895.jpg?w=740&t=st=1687162346~exp=1687162946~hmac=e56242663e1f0e3ad8f614ddf72946b66c92eeb12729b6a7348c686f5aac182e"
    );
  }
  if (pilihan === "scissor") {
    return gambarLawan.setAttribute(
      "src",
      "https://img.freepik.com/free-vector/realistic-hand-peace-sign-background_23-2148005626.jpg?w=740&t=st=1687162404~exp=1687163004~hmac=e5bcf14a7e4f72d4ca470aab2358dcf76bfe417905367f71d7d20da50882feba"
    );
  }
}

// mengganti keterangan gambaar pilihan lawan
function menggantiKeteranganLawan(pilihan) {
  // mendapatkan elemen keterangan pilihan lawan
  const keteranganLawan = document.getElementsByTagName("p")[1];
  // menciptakan element p baru
  const element = document.createElement("p");
  // menciptakan isi p
  const isiP = document.createTextNode(pilihan);
  // memasukan isi p ke dalam element p baru
  element.appendChild(isiP);
  // mendapatkan elemen parent dari element p
  const parent = document.getElementsByClassName("pilihan")[0];
  // mengganti element p lama dengan element p baru
  parent.replaceChild(element, keteranganLawan);
}

// ketika menekan tombol maka jalankan tiga function berbeda
// yaitu mendapatkan pilihan player
// menjalankan permainan
// menampilkan hasil permainan di kotak hasil
rock.onclick = function () {
  let lawanPilih = pilihanLawan();
  let hasil = hasilPermainan(lawanPilih, "rock");
  menggantiKotakHasil(hasil);
  menggantiGambarLawan(lawanPilih);
  menggantiKeteranganLawan(lawanPilih);
};

paper.onclick = function () {
  let lawanPilih = pilihanLawan();
  let hasil = hasilPermainan(lawanPilih, "paper");
  menggantiKotakHasil(hasil);
  menggantiGambarLawan(lawanPilih);
  menggantiKeteranganLawan(lawanPilih);
};

scissor.onclick = function () {
  let lawanPilih = pilihanLawan();
  let hasil = hasilPermainan(lawanPilih, "scissor");
  menggantiKotakHasil(hasil);
  menggantiGambarLawan(lawanPilih);
  menggantiKeteranganLawan(lawanPilih);
};
