<script>
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  // Initialize theme based on local storage or system preference
  (function initTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      htmlEl.classList.add('dark');
      themeToggleBtn.textContent = 'Light Mode';
    } else {
      themeToggleBtn.textContent = 'Dark Mode';
    }
  })();

  themeToggleBtn.addEventListener('click', () => {
    const isDark = htmlEl.classList.toggle('dark');
    if (isDark) {
      themeToggleBtn.textContent = 'Light Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleBtn.textContent = 'Dark Mode';
      localStorage.setItem('theme', 'light');
    }
  });

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('contact').focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    formMessage.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2) {
      formMessage.textContent = 'Please enter a valid name (at least 2 characters).';
      formMessage.style.color = 'red';
      form.name.focus();
      return;
    }
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      form.email.focus();
      return;
    }
    if (message.length < 10) {
      formMessage.textContent = 'Please enter a message (at least 10 characters).';
      formMessage.style.color = 'red';
      form.message.focus();
      return;
    }

    // Simulate form submission success
    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    formMessage.style.color = '#2563eb';
    form.reset();
  });
</script>
</body>
</html>

