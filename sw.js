/* Service worker do curso R para Proteomica.
   Ao publicar uma versao nova do index.html, mude o numero do CACHE
   para forcar a atualizacao nos aparelhos que ja instalaram. */
const CACHE = "rproteomica-v4";

const ARQUIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function guardar(req, resp) {
  if (resp && resp.status === 200 && resp.type === "basic") {
    const copia = resp.clone();
    caches.open(CACHE).then((c) => c.put(req, copia));
  }
  return resp;
}

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;

  const ehPagina =
    e.request.mode === "navigate" || e.request.destination === "document";

  /* A pagina em si: rede primeiro, para o curso estar sempre atualizado.
     Sem internet, cai no cache e abre offline do mesmo jeito. */
  if (ehPagina) {
    e.respondWith(
      fetch(e.request)
        .then((resp) => guardar(e.request, resp))
        .catch(() =>
          caches.match(e.request).then((c) => c || caches.match("./index.html"))
        )
    );
    return;
  }

  /* Icones e manifesto: cache primeiro, que sao estaveis e pesados. */
  e.respondWith(
    caches.match(e.request).then((cacheada) => {
      const rede = fetch(e.request)
        .then((resp) => guardar(e.request, resp))
        .catch(() => cacheada);
      return cacheada || rede;
    })
  );
});
