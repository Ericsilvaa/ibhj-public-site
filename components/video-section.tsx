interface VideoSectionProps {
  title: string;
  videoId: string;
  description?: string;
}

export default function VideoSection({
  title,
  videoId,
  description,
}: VideoSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        {description && <p className="text-gray-700">{description}</p>}
      </div>
    </div>
  );
}
