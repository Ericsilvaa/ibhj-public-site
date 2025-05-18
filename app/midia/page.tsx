import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/video-section";
import { RECENT_PODCASTS, RECENT_VIDEOS } from "@/constants/midias";

export default function Midia() {
  return (
    <div>
      {/* Hero da página */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Podcast e Mídia
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Acompanhe nossas mensagens, estudos e conteúdos em áudio e vídeo
          </p>
        </div>
      </section>

      {/* Últimos Vídeos */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title mb-8">Últimos Vídeos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECENT_VIDEOS.map((video) => (
              <VideoSection
                key={video.id}
                title={video.title}
                videoId={video.videoId}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://www.youtube.com/channel/IBHJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visite nosso canal no YouTube
            </Link>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <h2 className="section-title mb-8">Podcast IBHJ</h2>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">
              IBHJ – O podcast para chamar de nosso
            </h3>

            <div className="aspect-[3/1] w-full mb-4 rounded-lg overflow-hidden">
              <iframe
                src="https://open.spotify.com/embed/show/2AsNiCX0b7svOK7oDfmEgg?utm_source=generator"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full h-full"
                title="Podcast IBHJ – Membresia e Reunião"
              ></iframe>
            </div>

            <p className="text-gray-700">
              Nosso podcast traz reflexões bíblicas, entrevistas e conteúdos
              edificantes para o seu dia a dia. Disponível nas principais
              plataformas de streaming, incluindo Spotify e Telegram.
            </p>

            <div className="mt-4 flex gap-4">
              <Link
                href="https://open.spotify.com/show/2AsNiCX0b7svOK7oDfmEgg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline text-sm"
              >
                Ouça no Spotify
              </Link>
              <Link
                href="https://t.me/podcastibhj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline text-sm"
              >
                Entrar no grupo no Telegram
              </Link>
            </div>
          </div>

          <h3 className="text-xl font-bold text-primary mb-4">
            Episódios Recentes
          </h3>

          {/* <div className="space-y-4">
            {RECENT_PODCASTS.map((podcast) => (
              <div
                key={podcast.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center"
              >
                <div className="h-16 w-16 bg-primary rounded-md flex items-center justify-center text-white flex-shrink-0">
                  🎧
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-bold text-gray-800">{podcast.title}</h4>
                  <p className="text-sm text-gray-600">{podcast.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span>{podcast.date}</span>
                    <span className="mx-2">•</span>
                    <span>{podcast.duration}</span>
                  </div>
                </div>
                <button
                  aria-label="Ouvir episódio"
                  className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            ))}
          </div> */}
          <div className="space-y-4">
            {RECENT_PODCASTS.map((podcast) => {
              const {
                id,
                title,
                description,
                date,
                duration,
                spotifyUrl,
                youtubeUrl,
              } = podcast;

              return (
                <div
                  key={id}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center"
                >
                  <div className="h-16 w-16 bg-primary rounded-md flex items-center justify-center text-white flex-shrink-0">
                    🎧
                  </div>

                  <div className="ml-4 flex-1">
                    <h4 className="font-bold text-gray-800">{title}</h4>
                    <p className="text-sm text-gray-600">{description}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span>{date}</span>
                      <span className="mx-2">•</span>
                      <span>{duration}</span>
                    </div>
                  </div>

                  <a
                    href={spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ouvir episódio no Spotify: ${title}`}
                    className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Playlists */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title mb-8">Playlists</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://i.ytimg.com/vi/xjpvtrsx2tg/hqdefault.jpg"
                  alt="Cultos de Domingo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Cultos de Domingo
                </h3>
                <p className="text-gray-700 mb-4">
                  Assista aos nossos cultos dominicais.
                </p>
                <Link
                  href="https://www.youtube.com/@CanalIBHJ/streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-hover transition-colors"
                >
                  Ver playlist →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://i.ytimg.com/vi/Mn-FcQZXgvo/hqdefault.jpg"
                  alt="Aniversário IBHJ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Aniversário IBHJ - 55 Anos
                </h3>
                <p className="text-gray-700 mb-4">
                  Aprofunde-se na Palavra com nossos estudos.
                </p>
                <Link
                  href="https://youtube.com/playlist?list=PLmbR9vXMpuJpGbZNnljdRALuQyJk3vixb&si=Xfst3uELPKASIw-w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-hover transition-colors"
                >
                  Ver playlist →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://i.ytimg.com/vi/IAGGGRU6YOQ/hqdefault.jpg"
                  alt="Eventos Especiais"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Eventos Especiais
                </h3>
                <p className="text-gray-700 mb-4">
                  Conferências, cantatas e momentos especiais.
                </p>
                <Link
                  href="https://www.youtube.com/playlist?list=PLmbR9vXMpuJpErPGwZjDYB3zcezn-T4zV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-hover transition-colors"
                >
                  Ver playlist →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
//  <section className="py-16 bg-surface">
//    <div className="container-custom">
//      <h2 className="section-title mb-8">Podcast IBHJ</h2>

//      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//        <h3 className="text-xl font-bold text-primary mb-4">
//          IBHJ – O podcast para chamar de nosso
//        </h3>
//        <div className="aspect-video bg-gray-200 rounded-lg mb-4">
//          {/* Aqui seria inserido o embed do Spotify */}
//          <div className="w-full h-full flex items-center justify-center text-gray-500">
//            Embed do Spotify
//          </div>
//        </div>
//        <p className="text-gray-700">
//          Nosso podcast traz reflexões bíblicas, entrevistas e conteúdos
//          edificantes para o seu dia a dia. Disponível nas principais
//          plataformas de streaming.
//        </p>
//      </div>

//      <h3 className="text-xl font-bold text-primary mb-4">
//        Episódios Recentes
//      </h3>
//      <div className="space-y-4">
//        {podcasts.map((podcast) => (
//          <div
//            key={podcast.id}
//            className="bg-white rounded-lg shadow-md p-4 flex items-center"
//          >
//            <div className="h-16 w-16 bg-primary rounded-md flex items-center justify-center text-white flex-shrink-0">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                width="24"
//                height="24"
//                viewBox="0 0 24 24"
//                fill="none"
//                stroke="currentColor"
//                strokeWidth="2"
//                strokeLinecap="round"
//                strokeLinejoin="round"
//              >
//                <path d="M18 8a6 6 0 0 0-9.33-5"></path>
//                <path d="m6 15 4-4 4 4"></path>
//                <circle cx="12" cy="12" r="2"></circle>
//                <path d="M15 9a6 6 0 0 1-6 6"></path>
//              </svg>
//            </div>
//            <div className="ml-4 flex-1">
//              <h4 className="font-bold">{podcast.title}</h4>
//              <div className="flex items-center text-sm text-gray-500">
//                <span>{podcast.data}</span>
//                <span className="mx-2">•</span>
//                <span>{podcast.duracao}</span>
//              </div>
//            </div>
//            <button className="bg-primary text-white p-2 rounded-full">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                width="20"
//                height="20"
//                viewBox="0 0 24 24"
//                fill="none"
//                stroke="currentColor"
//                strokeWidth="2"
//                strokeLinecap="round"
//                strokeLinejoin="round"
//              >
//                <polygon points="5 3 19 12 5 21 5 3"></polygon>
//              </svg>
//            </button>
//          </div>
//        ))}
//      </div>

//      <div className="mt-8 text-center">
//        <Link
//          href="https://open.spotify.com/show/ibhj"
//          target="_blank"
//          rel="noopener noreferrer"
//          className="btn-primary"
//        >
//          Ouça no Spotify
//        </Link>
//      </div>
//    </div>
//  </section>;
