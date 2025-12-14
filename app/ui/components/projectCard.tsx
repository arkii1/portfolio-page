export default function ProjectCard({imageUrl, title, description, link, category, key = ''}  : {
    imageUrl: string,
    title: string,
    description: string,
    link: string,
    category: string,
    key?: string
}) {
    return (
         <article key={key}>
            <a href={link}>
              <div className="relative w-full">
                <img
                  alt={`Image of ${title} website`}
                  src={imageUrl}
                  className="aspect-video w-full rounded-2xl bg-secondary-500 object-cover sm:aspect-2/1 lg:aspect-3/2 shadow"
                />
              </div>
              <div className="flex grow flex-col justify-between">
                <div className="mt-8 flex items-center text-xs bg-secondary-500/10 w-max px-xs py-4xs rounded-xl">
                    {category}
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold">
                    <span className="absolute inset-0" />
                    {title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6">{description}</p>
                </div>
              </div>
              </a>
            </article>
    )
}