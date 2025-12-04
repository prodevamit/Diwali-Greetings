// Get the "name" parameter from the URL
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

const fromEl = document.getElementById('from');

if (name && name.trim().length) {
  // sanitize basic HTML characters to avoid accidental HTML injection
  const safeName = name.replace(/&/g,'&amp;')
                       .replace(/</g,'&lt;')
                       .replace(/>/g,'&gt;')
                       .replace(/"/g,'&quot;')
                       .replace(/'/g,'&#39;');

  fromEl.innerHTML = `🎇 With love from <strong>${safeName}</strong> 🎇`;
} else {
  fromEl.innerHTML = `Share this page with <code>?name=Amit</code> added to the URL.`;
}
