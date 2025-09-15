document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("download-form");
  const urlInput = document.getElementById("url-input");
  const statusBox = document.getElementById("status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = urlInput.value.trim();

    if (!url) {
      showStatus("⚠️ Masukkan URL komik dulu!", "error");
      return;
    }

    // Simulasi proses download
    showStatus("⏳ Sedang memproses link...", "loading");

    setTimeout(() => {
      if (url.includes("http")) {
        showStatus("✅ Komik berhasil didownload!", "success");
      } else {
        showStatus("❌ URL tidak valid!", "error");
      }
    }, 2000);
  });

  function showStatus(message, type) {
    statusBox.textContent = message;
    statusBox.className = "";
    statusBox.classList.add(type);
  }
});
