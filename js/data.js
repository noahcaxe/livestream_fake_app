

const Data = {
  // ── Baza komentarzy ──────────────────────────────────────────────────────
  // Możesz podmienić tę tablicę albo załadować zewnętrzny plik comments.json
  // Każdy wpis: ["nazwa_użytkownika", "treść komentarza"]
  comments: [
    // --- oryginalny zestaw (PL) ---
    ["anna_w",           "Niee mozliwe 😭😭"],
    ["krzys99",          "piękna jesteś!!!"],
    ["zofia_m",          "obserwuję od początku i wow ❤️"],
    ["tomek_xd",         "HEJKA Z KRAKOWA"],
    ["user_basia",       "jakie oczy masz serio"],
    ["maciek1234",       "kiedy kolejny live?"],
    ["kinga.kk",         "twoja muzyka 😍😍"],
    ["patryk_yt",        "nie mogę przestać oglądać lol"],
    ["ola_smile",        "KOCHAM CIĘ 💜💜💜"],
    ["dawid__x",         "ile followersow masz? pytam serio"],
    ["julia.rose",       "to jest niesamowite"],
    ["bartosz99",        "hej z Warszawy!!!"],
    ["magda_official",   "twój styl to 10/10"],
    ["kamil_street",     "kiedy merch?"],
    ["werka2003",        "moja mama też ogląda haha"],
    ["filip_dev",        "ten live to złoto"],
    ["nadia_art",        "twoja muzyka zmienia moje życie ❤️"],
    ["roman_x",          "first time tu i wow"],
    ["monika99",         "nie wychodzę z tego live"],
    ["szymon_k",         "LECIMY 100K 🔥🔥🔥"],
    ["ala_kawaii",       "jaki telefon masz?"],
    ["piotr_f",          "świetny vibe tutaj"],
    ["kasia.m",          "obserwuję od 2021 ❤"],
    ["lucyna88",         "piękny stream"],
    ["radek_xd",         "hej mama oglądaj"],
    ["zuzia_art",        "twoje tańce są ponad wszystko"],
    ["marek_pro",        "kiedy tour?"],
    ["ewa_kawaii",       "nie wiem jak to możliwe że jesteś taka piękna"],
    ["igor_b",           "HEJKA"],
    ["celina22",         "stream bez końca pls 🙏"],
    // --- dodatkowe ---
    ["xavier_fan01",     "Zycie Xaviera to najlepsza decyzja na ten wieczór 🔥"],
    ["marta_pl",         "weszłam tu przez przypadek i już nie wychodzę 😂"],
    ["karolina_w",       "ta energia jest niesamowita!!!"],
    ["bartek_xyz",       "Xavier king 👑"],
    ["weronika99",       "skąd jesteś? pytam bo świetnie wyglądasz na kamerze"],
    ["tomasz_live",      "1.2M i rośnie 📈📈"],
    ["ania.kowalska",    "dawaj więcej takich live!"],
    ["michal_k",         "oglądamy razem z całą rodziną ❤"],
    ["gosia_m",          "już trzeci raz wracam na ten live lol"],
    ["patrycja_07",      "zostań na zawsze na żywo 😩"],
    ["lukasz_fan",       "ta kamera to profesja 👌"],
    ["natalia.x",        "serio jeden z lepszych livów jakie widziałam"],
    ["damian_yt",        "subskrybuje od razu!"],
    ["zuzanna_w",        "ten dźwięk w tle 🎶"],
    ["michalina_art",    "piękne ujęcie 😍"],
    ["sebastian_k",      "hej z Gdańska 🌊"],
    ["agnieszka_m",      "Xavier zawsze dostarcza 💯"],
    ["rafal_pro",        "widzów przybywa co minutę 👀"],
    ["dominika_f",       "nie mogę oderwać oczu"],
    ["pawel_stream",     "live level: MASTER 🏆"],
  ],

  avatarColors: [
    "linear-gradient(135deg,#e040fb,#7c4dff)",
    "linear-gradient(135deg,#4ecdc4,#44a08d)",
    "linear-gradient(135deg,#f7971e,#ffd200)",
    "linear-gradient(135deg,#ee0979,#ff6a00)",
    "linear-gradient(135deg,#11998e,#38ef7d)",
    "linear-gradient(135deg,#4776e6,#8e54e9)",
  ],
};

/**
 * Optional: load comments from external comments.json
 * Place a "comments.json" file next to index.html with format:
 * [["username", "comment text"], ...]
 * The file will override Data.comments if loaded successfully.
 */
(async function loadExternalComments() {
  try {
    const resp = await fetch("comments.json");
    if (resp.ok) {
      const external = await resp.json();
      if (Array.isArray(external) && external.length > 0) {
        Data.comments = external;
        console.log(`Loaded ${external.length} comments from comments.json`);
      }
    }
  } catch (e) {
    // No external file – use built-in comments
  }
})();
