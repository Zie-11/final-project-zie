// Ambil quote dari API dan tampilkan
fetch("https://api.quotable.io/random")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("quote").textContent = `"${data.content}" — ${data.author}`;
  })
  .catch((err) => {
    document.getElementById("quote").textContent = "Gagal memuat quote 😢";
    console.error(err);
  });
