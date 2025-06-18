// Hole dir aus dem globalen supabase-Objekt die createClient-Funktion
const { createClient } = supabase;

// Deine Supabase-Projekt-Daten
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

// Initialisiere den Client
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// LOGIN
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await client.auth.signInWithPassword({ email, password });

  if (error) {
    alert('Login fehlgeschlagen: ' + error.message);
  } else {
    alert('Login erfolgreich!');
    window.location.href = 'kiosk.html';
  }
});

// REGISTRIERUNG
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;

  const { data, error } = await client.auth.signUp({ email, password });

  if (error) {
    alert('Registrierung fehlgeschlagen: ' + error.message);
  } else {
    alert('Registrierung erfolgreich! Bestätige deine E-Mail.');
  }
});