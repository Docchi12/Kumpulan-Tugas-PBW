function tambahData() {
  const form = document.forms["formData"];

  // Ambil nilai dari form
  const nama = form["nama"].value;
  const workshop = form["workshop"].value;
  const kursus = form["kursus"].value;
  const ipkLokal = form["ipkLokal"].value;
  const ipkUtama = form["ipkUtama"].value;

  // Tambah baris baru di bawah Ali
  const tbody = document
    .getElementById("tabelUtama")
    .getElementsByTagName("tbody")[0];
  const baris = tbody.insertRow();
  baris.insertCell().textContent = nama;
  baris.insertCell().textContent = workshop;
  baris.insertCell().textContent = kursus;
  baris.insertCell().textContent = ipkLokal;
  baris.insertCell().textContent = ipkUtama;

  // Kosongkan form dan cegah halaman reload
  form.reset();
  return false;
}
